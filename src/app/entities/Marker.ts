export class Marker {
    public constructor(private colour: string, public ink_amount: number = 100) {

    }

    public print(message: string) {
        let text: string = "";
        for (let symbol of message) {
            text += symbol;
            this.ink_amount -= 0.5;
        }
        console.log("%c"+text, `color: ${this.colour}`)
    }
}

export class RefillableMarker extends Marker {
    public refill() {
        console.log("Marker refilled");
        this.ink_amount = 100;
    }
}
