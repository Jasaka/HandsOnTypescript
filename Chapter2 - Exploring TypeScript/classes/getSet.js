class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("message is missing speaker's name");
        }
        return this.message;
    }
    set Message(value) {
        let tmpMessage = value;
        if (!value.includes(this.name)) {
            tmpMessage = this.name + " " + value;
        }
        this.message = tmpMessage;
    }
}
const speaker = new Speaker("John");
speaker.Message = "hello";
console.log(speaker.Message);
