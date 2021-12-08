export class Note {

    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getContent() {
        return this.content;
    }

    setContent(content: string) {
        this.content = content;
    }

    toString() {
        return "Title: " + this.title + '\n'
            + "Content: " + this.content;
    }
}