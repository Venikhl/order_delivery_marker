export class User {
    private date: string;
    public name: string;

    public constructor(){
        this.date = new Date().toDateString();
    }
}