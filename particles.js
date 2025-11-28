class ParticleSystem {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.particles = [];
        this.animationId = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.isDarkMode = false;

        // 性能检测
        this.isLowEndDevice = this.detectLowEndDevice();

        // 配置参数 - 根据设备性能调整
        const baseConfig = {
            particleCount: this.isLowEndDevice ? 30 : 80,
            baseColors: [
                'rgba(59, 130, 246, 0.6)',  // 蓝色
                'rgba(96, 165, 250, 0.5)',  // 浅蓝
                'rgba(37, 99, 235, 0.4)',   // 深蓝
                'rgba(147, 197, 253, 0.3)'  // 更浅蓝
            ],
            darkModeColors: [
                'rgba(147, 197, 253, 0.6)',  // 浅蓝
                'rgba(196, 181, 253, 0.5)',  // 浅紫
                'rgba(125, 211, 252, 0.4)',  // 天蓝
                'rgba(165, 180, 252, 0.3)'   // 淡紫
            ],
            minSize: 2,
            maxSize: 6,
            minSpeed: 0.1,
            maxSpeed: 0.3,
            gravity: 0.02,
            windEffect: 0.01,
            mouseRadius: 100,
            mouseRepel: 0.5,
            targetFPS: this.isLowEndDevice ? 30 : 60,
            frameSkip: this.isLowEndDevice ? 2 : 1
        };

        this.config = this.getResponsiveConfig(baseConfig);

        this.init();
    }

    detectLowEndDevice() {
        // 检测低端设备的启发式方法
        const indicators = {
            memoryLimit: navigator.deviceMemory !== undefined && navigator.deviceMemory <= 4,
            hardwareConcurrency: navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4,
            connection: navigator.connection && (
                navigator.connection.effectiveType === 'slow-2g' ||
                navigator.connection.effectiveType === '2g' ||
                navigator.connection.effectiveType === '3g'
            ),
            // 检测移动设备
            isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        };

        // 如果满足多个条件，认为是低端设备
        const score = Object.values(indicators).filter(Boolean).length;
        return score >= 2 || (indicators.isMobile && score >= 1);
    }

    getResponsiveConfig(baseConfig) {
        const width = window.innerWidth;
        const isMobile = width <= 768;
        const isTablet = width <= 1024;

        let config = { ...baseConfig };

        // 根据屏幕尺寸调整粒子数量
        if (isMobile) {
            config.particleCount = Math.min(config.particleCount, 20);
            config.maxSize = Math.min(config.maxSize, 4);
            config.mouseRadius = 60;
        } else if (isTablet) {
            config.particleCount = Math.min(config.particleCount, 50);
            config.maxSize = Math.min(config.maxSize, 5);
            config.mouseRadius = 80;
        }

        // 针对超宽屏优化
        if (width >= 1920) {
            config.particleCount = Math.max(config.particleCount, 100);
        }

        return config;
    }

    init() {
        if (!this.container) return;

        // 创建画布
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.8;
        `;

        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        // 检查暗色模式
        this.checkDarkMode();

        // 监听暗色模式变化
        this.setupDarkModeObserver();

        // 设置画布大小
        this.resizeCanvas();

        // 创建粒子
        this.createParticles();

        // 监听鼠标移动
        this.setupMouseTracking();

        // 监听窗口大小变化
        this.resizeTimeout = null;
        window.addEventListener('resize', () => this.handleResize());

        // 开始动画
        this.frameCount = 0;
        this.lastFrameTime = performance.now();
        this.animate();
    }

    checkDarkMode() {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkMode = isDark;
    }

    setupDarkModeObserver() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener((e) => {
            this.isDarkMode = e.matches;
            this.updateParticleColors();
        });
    }

    updateParticleColors() {
        const colors = this.isDarkMode ? this.config.darkModeColors : this.config.baseColors;
        this.particles.forEach(particle => {
            particle.color = colors[Math.floor(Math.random() * colors.length)];
        });
    }

    handleResize() {
        // 防抖处理
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }

        this.resizeTimeout = setTimeout(() => {
            this.resizeCanvas();
            this.reconfigureForScreenSize();
        }, 250);
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    reconfigureForScreenSize() {
        // 重新计算配置
        const baseConfig = {
            particleCount: this.isLowEndDevice ? 30 : 80,
            baseColors: this.config.baseColors,
            darkModeColors: this.config.darkModeColors,
            minSize: 2,
            maxSize: 6,
            minSpeed: 0.1,
            maxSpeed: 0.3,
            gravity: 0.02,
            windEffect: 0.01,
            mouseRadius: 100,
            mouseRepel: 0.5,
            targetFPS: this.isLowEndDevice ? 30 : 60,
            frameSkip: this.isLowEndDevice ? 2 : 1
        };

        const newConfig = this.getResponsiveConfig(baseConfig);

        // 如果粒子数量变化，重新创建粒子
        if (newConfig.particleCount !== this.config.particleCount) {
            this.config = newConfig;
            this.createParticles();
        } else {
            this.config = newConfig;
        }
    }

    createParticles() {
        this.particles = [];
        const colors = this.isDarkMode ? this.config.darkModeColors : this.config.baseColors;

        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push(this.createParticle(colors));
        }
    }

    createParticle(colors) {
        // 右侧密度更高 - 偏向右侧分布
        const sideBias = Math.random() < 0.7 ? 0.5 : 0; // 70%概率偏向右侧
        const x = this.canvas.width * (0.5 + sideBias + Math.random() * 0.5);

        return {
            x: x,
            y: Math.random() * this.canvas.height,
            size: Math.random() * (this.config.maxSize - this.config.minSize) + this.config.minSize,
            speedX: (Math.random() - 0.3) * this.config.maxSpeed, // 稍微向左飘动
            speedY: -Math.random() * this.config.maxSpeed - this.config.minSpeed,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.6 + 0.2,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.02,
            shape: Math.random() < 0.7 ? 'circle' : 'irregular' // 70%圆形，30%不规则形状
        };
    }

    setupMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
    }

    updateParticle(particle) {
        // 应用重力
        particle.speedY += this.config.gravity;

        // 应用风力（轻微向右）
        particle.speedX += this.config.windEffect;

        // 鼠标排斥效果
        const dx = particle.x - this.mouseX;
        const dy = particle.y - this.mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.mouseRadius) {
            const force = (1 - distance / this.config.mouseRadius) * this.config.mouseRepel;
            particle.speedX += (dx / distance) * force;
            particle.speedY += (dy / distance) * force;
        }

        // 限制最大速度
        const maxSpeed = 2;
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > maxSpeed) {
            particle.speedX = (particle.speedX / speed) * maxSpeed;
            particle.speedY = (particle.speedY / speed) * maxSpeed;
        }

        // 更新位置
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        // 边界处理 - 循环出现
        if (particle.x < -20) {
            particle.x = this.canvas.width + 20;
            particle.y = Math.random() * this.canvas.height;
        } else if (particle.x > this.canvas.width + 20) {
            particle.x = -20;
            particle.y = Math.random() * this.canvas.height;
        }

        if (particle.y < -20) {
            particle.y = this.canvas.height + 20;
            particle.x = Math.random() * this.canvas.width;
        } else if (particle.y > this.canvas.height + 20) {
            particle.y = -20;
            particle.x = Math.random() * this.canvas.width;
        }
    }

    drawParticle(particle) {
        this.ctx.save();
        this.ctx.translate(particle.x, particle.y);
        this.ctx.rotate(particle.rotation);
        this.ctx.globalAlpha = particle.opacity;

        if (particle.shape === 'circle') {
            // 绘制圆形粒子
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        } else {
            // 绘制不规则形状
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            const points = 4 + Math.floor(Math.random() * 3);
            for (let i = 0; i < points; i++) {
                const angle = (i / points) * Math.PI * 2;
                const radius = particle.size * (0.7 + Math.random() * 0.6);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                if (i === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }
            this.ctx.closePath();
            this.ctx.fill();
        }

        this.ctx.restore();
    }

    animate() {
        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastFrameTime;
        const targetFrameTime = 1000 / this.config.targetFPS;

        // 帧率控制
        if (deltaTime >= targetFrameTime) {
            this.frameCount++;

            // 帧跳过优化
            if (this.frameCount % this.config.frameSkip === 0) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

                this.particles.forEach(particle => {
                    this.updateParticle(particle);
                    this.drawParticle(particle);
                });
            }

            this.lastFrameTime = currentTime - (deltaTime % targetFrameTime);
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('mousemove', this.setupMouseTracking);
    }
}

// 导出为模块或全局变量
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ParticleSystem;
} else {
    window.ParticleSystem = ParticleSystem;
}