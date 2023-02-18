export class Task {
    public isDone = false;

    constructor(public title: string) { }

    toggleDone() {
        if (this) {
            this.isDone = !this.isDone;
        }
    }
}


