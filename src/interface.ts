/*
interfaceについて
*/

// Swiftでいうところのprotocol, TypeScriptではinterface
interface Paper {
    // プロパティ名に?を付けるとオプショナルになる。
    readonly paperColor?: string;
}

// interfaceは継承できる。
interface Book extends Paper {
    readonly title: string;
    page: number;
    introduce: (title: string, page: number) => void;
}

// interfaceの"実装"。""継承"とは言わない。
class Magazine implements Book {
    constructor(public readonly title: string, public page: number, public readonly paperColor?: string) {}
    introduce() {
        console.log(`${ this.title }, ${ this.page }ページ。`);
    }
}

const magazine = new Magazine('週刊少年ジャンプ', 400, 'yellow');
magazine.introduce();