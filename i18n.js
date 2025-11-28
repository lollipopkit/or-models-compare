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
        input_modality: '输入模态',
        output_modality: '输出模态',
        total_models: '总模型数',
        current_display: '当前显示',
        last_update: '最后更新',
        data_overview: '数据概览',
        view_compare: '视图与对比',
        filters: '筛选',
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
        language: '语言',
        compare: '对比',
        remove: '删除',
        compare_selected: '对比选中',
        selected: '已选择',
        compare_button: '开始对比',
        compare_title: '模型对比',
        clear_selection: '清空选择',
        no_selection: '未选择模型',
        compare_bar_hint: '选择多个模型进行对比',
        close: '关闭',
        compare_mode: '对比模式',
        exit_compare_mode: '退出对比模式'
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
        input_modality: 'Input Modality',
        output_modality: 'Output Modality',
        total_models: 'Total Models',
        current_display: 'Currently Showing',
        last_update: 'Last Update',
        data_overview: 'Data Overview',
        view_compare: 'View & Compare',
        filters: 'Filters',
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
        language: 'Language',
        compare: 'Compare',
        remove: 'Remove',
        compare_selected: 'Compare Selected',
        selected: 'Selected',
        compare_button: 'Start Compare',
        compare_title: 'Model Comparison',
        clear_selection: 'Clear Selection',
        no_selection: 'No models selected',
        compare_bar_hint: 'Select multiple models to compare',
        close: 'Close',
        compare_mode: 'Compare Mode',
        exit_compare_mode: 'Exit Compare Mode'
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
        input_modality: '入力モダリティ',
        output_modality: '出力モダリティ',
        total_models: '総モデル数',
        current_display: '現在の表示',
        last_update: '最終更新',
        data_overview: 'データ概要',
        view_compare: 'ビューと比較',
        filters: 'フィルター',
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
        language: '言語',
        compare: '比較',
        remove: '削除',
        compare_selected: '選択を比較',
        selected: '選択済み',
        compare_button: '比較を開始',
        compare_title: 'モデル比較',
        clear_selection: '選択をクリア',
        no_selection: 'モデルが選択されていません',
        compare_bar_hint: '複数のモデルを選んで比較',
        close: '閉じる',
        compare_mode: '比較モード',
        exit_compare_mode: '比較モードを終了'
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
        input_modality: '입력 모달리티',
        output_modality: '출력 모달리티',
        total_models: '총 모델 수',
        current_display: '현재 표시',
        last_update: '마지막 업데이트',
        data_overview: '데이터 개요',
        view_compare: '뷰 및 비교',
        filters: '필터',
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
        language: '언어',
        compare: '비교',
        remove: '삭제',
        compare_selected: '선택 비교',
        selected: '선택됨',
        compare_button: '비교 시작',
        compare_title: '모델 비교',
        clear_selection: '선택 지우기',
        no_selection: '선택한 모델 없음',
        compare_bar_hint: '여러 모델을 선택해 비교하세요',
        close: '닫기',
        compare_mode: '비교 모드',
        exit_compare_mode: '비교 모드 종료'
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
        input_modality: 'Modalité d\'entrée',
        output_modality: 'Modalité de sortie',
        total_models: 'Total des modèles',
        current_display: 'Affichage actuel',
        last_update: 'Dernière mise à jour',
        data_overview: 'Vue d’ensemble des données',
        view_compare: 'Vue et comparaison',
        filters: 'Filtres',
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
        language: 'Langue',
        compare: 'Comparer',
        remove: 'Supprimer',
        compare_selected: 'Comparer la sélection',
        selected: 'Sélectionné',
        compare_button: 'Lancer la comparaison',
        compare_title: 'Comparaison des modèles',
        clear_selection: 'Effacer la sélection',
        no_selection: 'Aucun modèle sélectionné',
        compare_bar_hint: 'Sélectionnez plusieurs modèles pour comparer',
        close: 'Fermer',
        compare_mode: 'Mode comparaison',
        exit_compare_mode: 'Quitter le mode comparaison'
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
        input_modality: 'Eingabe-Modalität',
        output_modality: 'Ausgabe-Modalität',
        total_models: 'Gesamte Modelle',
        current_display: 'Aktuell angezeigt',
        last_update: 'Letzte Aktualisierung',
        data_overview: 'Datenübersicht',
        view_compare: 'Ansicht & Vergleich',
        filters: 'Filter',
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
        language: 'Sprache',
        compare: 'Vergleichen',
        remove: 'Entfernen',
        compare_selected: 'Auswahl vergleichen',
        selected: 'Ausgewählt',
        compare_button: 'Vergleich starten',
        compare_title: 'Modellvergleich',
        clear_selection: 'Auswahl leeren',
        no_selection: 'Keine Modelle ausgewählt',
        compare_bar_hint: 'Wählen Sie mehrere Modelle zum Vergleichen',
        close: 'Schließen',
        compare_mode: 'Vergleichsmodus',
        exit_compare_mode: 'Vergleichsmodus beenden'
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
        input_modality: 'Modalidad de entrada',
        output_modality: 'Modalidad de salida',
        total_models: 'Total de modelos',
        current_display: 'Mostrando actualmente',
        last_update: 'Última actualización',
        data_overview: 'Resumen de datos',
        view_compare: 'Vista y comparación',
        filters: 'Filtros',
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
        language: 'Idioma',
        compare: 'Comparar',
        remove: 'Eliminar',
        compare_selected: 'Comparar seleccionados',
        selected: 'Seleccionado',
        compare_button: 'Iniciar comparación',
        compare_title: 'Comparación de modelos',
        clear_selection: 'Limpiar selección',
        no_selection: 'No hay modelos seleccionados',
        compare_bar_hint: 'Seleccione varios modelos para comparar',
        close: 'Cerrar',
        compare_mode: 'Modo de comparación',
        exit_compare_mode: 'Salir del modo de comparación'
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
        input_modality: 'Модальность ввода',
        output_modality: 'Модальность вывода',
        total_models: 'Всего моделей',
        current_display: 'Отображается сейчас',
        last_update: 'Последнее обновление',
        data_overview: 'Обзор данных',
        view_compare: 'Просмотр и сравнение',
        filters: 'Фильтры',
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
        language: 'Язык',
        compare: 'Сравнить',
        remove: 'Удалить',
        compare_selected: 'Сравнить выбранные',
        selected: 'Выбрано',
        compare_button: 'Начать сравнение',
        compare_title: 'Сравнение моделей',
        clear_selection: 'Очистить выбор',
        no_selection: 'Нет выбранных моделей',
        compare_bar_hint: 'Выберите несколько моделей для сравнения',
        close: 'Закрыть',
        compare_mode: 'Режим сравнения',
        exit_compare_mode: 'Выйти из режима сравнения'
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
        input_modality: 'Modalidade de entrada',
        output_modality: 'Modalidade de saída',
        total_models: 'Total de modelos',
        current_display: 'Mostrando atualmente',
        last_update: 'Última atualização',
        data_overview: 'Visão geral dos dados',
        view_compare: 'Visualizar e comparar',
        filters: 'Filtros',
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
        language: 'Idioma',
        compare: 'Comparar',
        remove: 'Remover',
        compare_selected: 'Comparar selecionados',
        selected: 'Selecionado',
        compare_button: 'Iniciar comparação',
        compare_title: 'Comparação de modelos',
        clear_selection: 'Limpar seleção',
        no_selection: 'Nenhum modelo selecionado',
        compare_bar_hint: 'Selecione vários modelos para comparar',
        close: 'Fechar',
        compare_mode: 'Modo de comparação',
        exit_compare_mode: 'Sair do modo de comparação'
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
        input_modality: 'Modalità di input',
        output_modality: 'Modalità di output',
        total_models: 'Totale modelli',
        current_display: 'Attualmente mostrato',
        last_update: 'Ultimo aggiornamento',
        data_overview: 'Panoramica dati',
        view_compare: 'Vista e confronto',
        filters: 'Filtri',
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
        language: 'Lingua',
        compare: 'Confronta',
        remove: 'Rimuovi',
        compare_selected: 'Confronta selezionati',
        selected: 'Selezionato',
        compare_button: 'Avvia confronto',
        compare_title: 'Confronto modelli',
        clear_selection: 'Pulisci selezione',
        no_selection: 'Nessun modello selezionato',
        compare_bar_hint: 'Seleziona più modelli per confrontarli',
        close: 'Chiudi',
        compare_mode: 'Modalità confronto',
        exit_compare_mode: 'Esci dalla modalità confronto'
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
            const menu = document.getElementById('languageMenu');
            if (menu) {
                menu.querySelectorAll('.lang-option').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.lang === this.currentLanguage);
                });
            }
            const button = document.getElementById('languageButton');
            if (button) {
                button.setAttribute('title', this.t('language'));
                button.setAttribute('aria-label', this.t('language'));
            }
        } catch (error) {
            console.warn('Error updating language selector:', error);
        }
    }

    createLanguageSelector() {
        const wrapper = document.createElement('div');
        wrapper.className = 'lang-switch';
        wrapper.innerHTML = `
            <button class="icon-button" id="languageButton" aria-haspopup="true" aria-expanded="false" aria-label="${this.t('language')}" title="${this.t('language')}">
                <svg class="github-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 8l6 6" />
                        <path d="M4 14l6-6 2-3" />
                        <path d="M2 5h12" />
                        <path d="M7 2h1" />
                        <path d="M22 22l-5-10-5 10" />
                        <path d="M14 18h6" />
                    </g>
                </svg>
            </button>
            <div class="lang-menu" id="languageMenu">
                ${LANGUAGES.map(lang => `<button class="lang-option" data-lang="${lang.code}">${lang.name}</button>`).join('')}
            </div>
        `;

        const button = wrapper.querySelector('#languageButton');
        const menu = wrapper.querySelector('#languageMenu');

        const closeMenu = () => {
            menu.classList.remove('open');
            button.setAttribute('aria-expanded', 'false');
        };

        const openMenu = () => {
            menu.classList.add('open');
            button.setAttribute('aria-expanded', 'true');
        };

        button.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = menu.classList.contains('open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        menu.addEventListener('click', (e) => {
            const target = e.target.closest('.lang-option');
            if (target) {
                this.setLanguage(target.dataset.lang);
                closeMenu();
            }
        });

        const markActive = () => {
            menu.querySelectorAll('.lang-option').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === this.currentLanguage);
            });
        };

        markActive();

        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
                closeMenu();
            }
        });

        this.updateLanguageSelector();
        return wrapper;
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
        const mount = document.getElementById('languageMount');
        if (mount) {
            mount.innerHTML = '';
            const langSelector = this.createLanguageSelector();
            mount.appendChild(langSelector);
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
