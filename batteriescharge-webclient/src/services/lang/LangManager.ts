enum Languages {
    ES = 'es',
    DEFAULT = ES
}

export { Languages };

const DATA: Map<Languages, Map<String, String>> = new Map();
DATA.set( Languages.ES, new Map() );

class LangManager {
    private currentLang: Languages;

    constructor() {
        this.currentLang = Languages.DEFAULT;
    }

    setCurrentLang(newLang: Languages) {
        this.currentLang = newLang;
    }

    get(dataKey: String) {
        return DATA.get(this.currentLang)?.get(dataKey);
    }
}

const instance = new LangManager();
export { instance as LangManager };