export abstract class Item {
    
    // Propiedades
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() {
        return this._id;
    }

    // set id(id: number) {
    //     this._id = id;
    // }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }
}