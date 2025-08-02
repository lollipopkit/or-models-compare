// 国际化配置文件
const i18n = {
    // 中文（简体）
    'zh-CN': {
        title: 'OpenRouter 模型面板',
        search_placeholder: '搜索模型名称、描述...',
        price_range: '价格范围',
        all: '全部',
        free: '免费',
        low: '低价 (< $1)',
        medium: '中价 ($1 - $10)',
        high: '高价 (> $10)',
        context_length: '上下文长度',
        short: '短 (< 10K)',
        medium_ctx: '中 (10K - 50K)',
        long: '长 (50K - 200K)',
        extra_long: '超长 (> 200K)',
        total_models: '总模型数',
        current_display: '当前显示',
        last_update: '最后更新',
        column_settings: '显示列设置',
        model_name: '模型名称',
        description: '描述',
        price: '价格 (每百万tokens)',
        provider_info: '供应商信息',
        input_output_modality: '输入/输出模态',
        tokenizer: 'Tokenizer',
        created_time: '创建时间',
        loading: '加载中...',
        load_failed: '加载数据失败',
        max_completion: '最大完成',
        moderated: '受审查',
        input: '输入',
        output: '输出',
        language: '语言'
    },

    // 英语
    'en': {
        title: 'OpenRouter Models Dashboard',
        search_placeholder: 'Search model name, description...',
        price_range: 'Price Range',
        all: 'All',
        free: 'Free',
        low: 'Low (< $1)',
        medium: 'Medium ($1 - $10)',
        high: 'High (> $10)',
        context_length: 'Context Length',
        short: 'Short (< 10K)',
        medium_ctx: 'Medium (10K - 50K)',
        long: 'Long (50K - 200K)',
        extra_long: 'Extra Long (> 200K)',
        total_models: 'Total Models',
        current_display: 'Currently Showing',
        last_update: 'Last Update',
        column_settings: 'Column Settings',
        model_name: 'Model Name',
        description: 'Description',
        price: 'Price (per million tokens)',
        provider_info: 'Provider Info',
        input_output_modality: 'Input/Output Modality',
        tokenizer: 'Tokenizer',
        created_time: 'Created Time',
        loading: 'Loading...',
        load_failed: 'Failed to load data',
        max_completion: 'Max Completion',
        moderated: 'Moderated',
        input: 'Input',
        output: 'Output',
        language: 'Language'
    },

    // 日语
    'ja': {
        title: 'OpenRouter モデルダッシュボード',
        search_placeholder: 'モデル名、説明を検索...',
        price_range: '価格範囲',
        all: 'すべて',
        free: '無料',
        low: '低価格 (< $1)',
        medium: '中価格 ($1 - $10)',
        high: '高価格 (> $10)',
        context_length: 'コンテキスト長',
        short: '短い (< 10K)',
        medium_ctx: '中程度 (10K - 50K)',
        long: '長い (50K - 200K)',
        extra_long: '超長い (> 200K)',
        total_models: '総モデル数',
        current_display: '現在の表示',
        last_update: '最終更新',
        column_settings: '列表示設定',
        model_name: 'モデル名',
        description: '説明',
        price: '価格 (100万トークンあたり)',
        provider_info: 'プロバイダー情報',
        input_output_modality: '入力/出力モダリティ',
        tokenizer: 'トークナイザー',
        created_time: '作成時間',
        loading: '読み込み中...',
        load_failed: 'データの読み込みに失敗',
        max_completion: '最大完了',
        moderated: '審査済み',
        input: '入力',
        output: '出力',
        language: '言語'
    },

    // 韩语
    'ko': {
        title: 'OpenRouter 모델 대시보드',
        search_placeholder: '모델명, 설명 검색...',
        price_range: '가격 범위',
        all: '전체',
        free: '무료',
        low: '저가 (< $1)',
        medium: '중가 ($1 - $10)',
        high: '고가 (> $10)',
        context_length: '컨텍스트 길이',
        short: '짧음 (< 10K)',
        medium_ctx: '중간 (10K - 50K)',
        long: '긺 (50K - 200K)',
        extra_long: '매우 긺 (> 200K)',
        total_models: '총 모델 수',
        current_display: '현재 표시',
        last_update: '마지막 업데이트',
        column_settings: '열 표시 설정',
        model_name: '모델명',
        description: '설명',
        price: '가격 (백만 토큰당)',
        provider_info: '공급자 정보',
        input_output_modality: '입력/출력 모달리티',
        tokenizer: '토크나이저',
        created_time: '생성 시간',
        loading: '로딩 중...',
        load_failed: '데이터 로드 실패',
        max_completion: '최대 완성',
        moderated: '심사됨',
        input: '입력',
        output: '출력',
        language: '언어'
    },

    // 法语
    'fr': {
        title: 'Tableau de bord des modèles OpenRouter',
        search_placeholder: 'Rechercher nom du modèle, description...',
        price_range: 'Gamme de prix',
        all: 'Tous',
        free: 'Gratuit',
        low: 'Bas (< $1)',
        medium: 'Moyen ($1 - $10)',
        high: 'Élevé (> $10)',
        context_length: 'Longueur du contexte',
        short: 'Court (< 10K)',
        medium_ctx: 'Moyen (10K - 50K)',
        long: 'Long (50K - 200K)',
        extra_long: 'Très long (> 200K)',
        total_models: 'Total des modèles',
        current_display: 'Affichage actuel',
        last_update: 'Dernière mise à jour',
        column_settings: 'Paramètres des colonnes',
        model_name: 'Nom du modèle',
        description: 'Description',
        price: 'Prix (par million de tokens)',
        provider_info: 'Info fournisseur',
        input_output_modality: 'Modalité entrée/sortie',
        tokenizer: 'Tokenizer',
        created_time: 'Heure de création',
        loading: 'Chargement...',
        load_failed: 'Échec du chargement des données',
        max_completion: 'Complétion max',
        moderated: 'Modéré',
        input: 'Entrée',
        output: 'Sortie',
        language: 'Langue'
    },

    // 德语
    'de': {
        title: 'OpenRouter Modell-Dashboard',
        search_placeholder: 'Modellname, Beschreibung suchen...',
        price_range: 'Preisbereich',
        all: 'Alle',
        free: 'Kostenlos',
        low: 'Niedrig (< $1)',
        medium: 'Mittel ($1 - $10)',
        high: 'Hoch (> $10)',
        context_length: 'Kontextlänge',
        short: 'Kurz (< 10K)',
        medium_ctx: 'Mittel (10K - 50K)',
        long: 'Lang (50K - 200K)',
        extra_long: 'Extra lang (> 200K)',
        total_models: 'Gesamte Modelle',
        current_display: 'Aktuell angezeigt',
        last_update: 'Letzte Aktualisierung',
        column_settings: 'Spalteneinstellungen',
        model_name: 'Modellname',
        description: 'Beschreibung',
        price: 'Preis (pro Million Tokens)',
        provider_info: 'Anbieterinformation',
        input_output_modality: 'Ein-/Ausgabemodalität',
        tokenizer: 'Tokenizer',
        created_time: 'Erstellungszeit',
        loading: 'Lädt...',
        load_failed: 'Laden der Daten fehlgeschlagen',
        max_completion: 'Max. Vervollständigung',
        moderated: 'Moderiert',
        input: 'Eingabe',
        output: 'Ausgabe',
        language: 'Sprache'
    },

    // 西班牙语
    'es': {
        title: 'Panel de modelos OpenRouter',
        search_placeholder: 'Buscar nombre del modelo, descripción...',
        price_range: 'Rango de precios',
        all: 'Todos',
        free: 'Gratis',
        low: 'Bajo (< $1)',
        medium: 'Medio ($1 - $10)',
        high: 'Alto (> $10)',
        context_length: 'Longitud del contexto',
        short: 'Corto (< 10K)',
        medium_ctx: 'Medio (10K - 50K)',
        long: 'Largo (50K - 200K)',
        extra_long: 'Extra largo (> 200K)',
        total_models: 'Total de modelos',
        current_display: 'Mostrando actualmente',
        last_update: 'Última actualización',
        column_settings: 'Configuración de columnas',
        model_name: 'Nombre del modelo',
        description: 'Descripción',
        price: 'Precio (por millón de tokens)',
        provider_info: 'Info del proveedor',
        input_output_modality: 'Modalidad entrada/salida',
        tokenizer: 'Tokenizer',
        created_time: 'Hora de creación',
        loading: 'Cargando...',
        load_failed: 'Error al cargar datos',
        max_completion: 'Completado máx.',
        moderated: 'Moderado',
        input: 'Entrada',
        output: 'Salida',
        language: 'Idioma'
    },

    // 俄语
    'ru': {
        title: 'Панель моделей OpenRouter',
        search_placeholder: 'Поиск названия модели, описания...',
        price_range: 'Ценовой диапазон',
        all: 'Все',
        free: 'Бесплатно',
        low: 'Низкая (< $1)',
        medium: 'Средняя ($1 - $10)',
        high: 'Высокая (> $10)',
        context_length: 'Длина контекста',
        short: 'Короткий (< 10K)',
        medium_ctx: 'Средний (10K - 50K)',
        long: 'Длинный (50K - 200K)',
        extra_long: 'Очень длинный (> 200K)',
        total_models: 'Всего моделей',
        current_display: 'Отображается сейчас',
        last_update: 'Последнее обновление',
        column_settings: 'Настройки столбцов',
        model_name: 'Название модели',
        description: 'Описание',
        price: 'Цена (за миллион токенов)',
        provider_info: 'Информация о провайдере',
        input_output_modality: 'Модальность ввода/вывода',
        tokenizer: 'Токенизатор',
        created_time: 'Время создания',
        loading: 'Загрузка...',
        load_failed: 'Ошибка загрузки данных',
        max_completion: 'Макс. завершение',
        moderated: 'Модерируется',
        input: 'Ввод',
        output: 'Вывод',
        language: 'Язык'
    },

    // 葡萄牙语
    'pt': {
        title: 'Painel de Modelos OpenRouter',
        search_placeholder: 'Pesquisar nome do modelo, descrição...',
        price_range: 'Faixa de preço',
        all: 'Todos',
        free: 'Grátis',
        low: 'Baixo (< $1)',
        medium: 'Médio ($1 - $10)',
        high: 'Alto (> $10)',
        context_length: 'Comprimento do contexto',
        short: 'Curto (< 10K)',
        medium_ctx: 'Médio (10K - 50K)',
        long: 'Longo (50K - 200K)',
        extra_long: 'Extra longo (> 200K)',
        total_models: 'Total de modelos',
        current_display: 'Mostrando atualmente',
        last_update: 'Última atualização',
        column_settings: 'Configurações de colunas',
        model_name: 'Nome do modelo',
        description: 'Descrição',
        price: 'Preço (por milhão de tokens)',
        provider_info: 'Info do provedor',
        input_output_modality: 'Modalidade entrada/saída',
        tokenizer: 'Tokenizer',
        created_time: 'Hora de criação',
        loading: 'Carregando...',
        load_failed: 'Falha ao carregar dados',
        max_completion: 'Conclusão máx.',
        moderated: 'Moderado',
        input: 'Entrada',
        output: 'Saída',
        language: 'Idioma'
    },

    // 意大利语
    'it': {
        title: 'Dashboard Modelli OpenRouter',
        search_placeholder: 'Cerca nome modello, descrizione...',
        price_range: 'Fascia di prezzo',
        all: 'Tutti',
        free: 'Gratuito',
        low: 'Basso (< $1)',
        medium: 'Medio ($1 - $10)',
        high: 'Alto (> $10)',
        context_length: 'Lunghezza contesto',
        short: 'Corto (< 10K)',
        medium_ctx: 'Medio (10K - 50K)',
        long: 'Lungo (50K - 200K)',
        extra_long: 'Extra lungo (> 200K)',
        total_models: 'Totale modelli',
        current_display: 'Attualmente mostrato',
        last_update: 'Ultimo aggiornamento',
        column_settings: 'Impostazioni colonne',
        model_name: 'Nome modello',
        description: 'Descrizione',
        price: 'Prezzo (per milione di token)',
        provider_info: 'Info fornitore',
        input_output_modality: 'Modalità input/output',
        tokenizer: 'Tokenizer',
        created_time: 'Ora di creazione',
        loading: 'Caricamento...',
        load_failed: 'Caricamento dati fallito',
        max_completion: 'Completamento max',
        moderated: 'Moderato',
        input: 'Input',
        output: 'Output',
        language: 'Lingua'
    }
};

// 语言列表配置
const LANGUAGES = [
    { code: 'zh-CN', name: '中文简体' },
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' },
    { code: 'ru', name: 'Русский' },
    { code: 'pt', name: 'Português' },
    { code: 'it', name: 'Italiano' }
];

// 国际化管理器
class I18nManager {
    constructor() {
        this.translations = i18n;
        this.currentLanguage = this.detectLanguage();
    }

    detectLanguage() {
        // 首先检查本地存储
        const savedLang = localStorage.getItem('openrouter-language');
        if (savedLang && this.translations[savedLang]) {
            return savedLang;
        }

        // 然后检查浏览器语言
        const browserLang = navigator.language || navigator.userLanguage;
        if (this.translations[browserLang]) {
            return browserLang;
        }

        // 尝试匹配语言代码的前缀（如 en-US -> en）
        const langPrefix = browserLang.split('-')[0];
        for (const lang in this.translations) {
            if (lang.startsWith(langPrefix)) {
                return lang;
            }
        }

        // 默认返回中文
        return 'zh-CN';
    }

    setLanguage(langCode) {
        if (this.translations[langCode]) {
            this.currentLanguage = langCode;
            localStorage.setItem('openrouter-language', langCode);
            this.updatePageLanguage();

            // 触发语言变化事件
            if (typeof document !== 'undefined') {
                document.dispatchEvent(new CustomEvent('languageChanged', {
                    detail: { language: langCode }
                }));
            }
        }
    }

    t(key) {
        return this.translations[this.currentLanguage]?.[key] || key;
    }

    updatePageLanguage() {
        // 更新HTML lang属性
        if (typeof document !== 'undefined') {
            document.documentElement.lang = this.currentLanguage;
        }

        // 确保DOM已加载再更新元素
        if (typeof document === 'undefined') return;

        // 更新页面中所有带有 data-i18n 属性的元素
        try {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (el.tagName === 'INPUT' && el.type === 'text') {
                    el.placeholder = this.t(key);
                } else {
                    el.textContent = this.t(key);
                }
            });
        } catch (error) {
            console.warn('Error updating page language:', error);
        }

        // 更新语言选择器的显示
        this.updateLanguageSelector();
    }

    updateLanguageSelector() {
        try {
            const langSelector = document.getElementById('languageSelector');
            if (langSelector) {
                const currentLang = LANGUAGES.find(lang => lang.code === this.currentLanguage);
                if (currentLang) {
                    langSelector.textContent = currentLang.name;
                }
            }
        } catch (error) {
            console.warn('Error updating language selector:', error);
        }
    }

    createLanguageSelector() {
        const selector = document.createElement('div');
        selector.className = 'language-selector';
        selector.innerHTML = `
            <button id="languageSelector" class="language-btn">${LANGUAGES.find(l => l.code === this.currentLanguage)?.name}</button>
            <div class="language-dropdown" id="languageDropdown">
                ${LANGUAGES.map(lang =>
            `<div class="language-option ${lang.code === this.currentLanguage ? 'active' : ''}" data-lang="${lang.code}">
                        ${lang.name}
                    </div>`
        ).join('')}
            </div>
        `;

        // 添加事件监听器
        selector.addEventListener('click', (e) => {
            const dropdown = selector.querySelector('.language-dropdown');
            if (e.target.classList.contains('language-btn')) {
                dropdown.classList.toggle('show');
            } else if (e.target.classList.contains('language-option')) {
                const langCode = e.target.dataset.lang;
                this.setLanguage(langCode);
                dropdown.classList.remove('show');

                // 更新选中状态
                selector.querySelectorAll('.language-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                e.target.classList.add('active');
            }
        });

        // 点击外部关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (!selector.contains(e.target)) {
                selector.querySelector('.language-dropdown').classList.remove('show');
            }
        });

        return selector;
    }

    init() {
        // 初始化页面语言
        this.updatePageLanguage();

        // 延迟创建语言选择器，确保DOM已加载
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.addLanguageSelector();
            });
        } else {
            this.addLanguageSelector();
        }
    }

    addLanguageSelector() {
        // 创建语言选择器并添加到页面
        const controls = document.querySelector('.controls-row');
        if (controls) {
            const langSelector = this.createLanguageSelector();
            controls.appendChild(langSelector);
        }
    }
}

// 导出供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { I18nManager, i18n, LANGUAGES };
} else if (typeof window !== 'undefined') {
    window.I18nManager = I18nManager;
    window.i18n = i18n;
    window.LANGUAGES = LANGUAGES;
}
