export class Item {
    description = "";
    url = "";
    onStock = false;
    changed = false;
    fistCheck = true;

    constructor(description, url) {
        this.description = description;
        this.url = url;
        this.onStock = false;
        this.changed = false;
        this.fistCheck = true;
    }
}