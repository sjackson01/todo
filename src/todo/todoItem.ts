export class TodoItem{
    id: number;
    task: string;
    complete: boolean = false;

    public constructor(id: number, task: string, complete: boolean = false){
        this.id = id;
        this.task = task;
        this.complete = complete; 
    }

    public printDetails() : void {
        console.log(`${this.id}, ${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }

}