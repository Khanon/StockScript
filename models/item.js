export class Item {
    description = "";
    url = "";
    onStock = false;
    changed = false;
    firstCheck = true;

    constructor(description, url) {
        this.description = description;
        this.url = url;
        this.onStock = false;
        this.changed = false;
        this.firstCheck = true;
    }
}