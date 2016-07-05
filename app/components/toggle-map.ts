export class ToggleMap<E> {
    private collection: Array<E> = [];
    private toggles: Array<boolean> = [];

    constructor (collection: Array<E>) {
        this.collection = collection;
        this.toggles = this.collection.map(function (item) {
            return false;            
        });
    }

    public toggle(index: number) {
        return (this.toggles[index] = !this.toggles[index]);
    }

    public toggleElement(elem: E) {
        return (this.toggle(this.collection.indexOf(elem)));
    }

    public items(mask: boolean): Array<E> {
        let self = this;
        return this.collection.filter(function (item, i) {
            return (self.toggles[i] === mask);    
        });
    }

    public indexes(mask: boolean): Array<number> {
        let self = this;
        return this.items(mask).map(function (item) {
            return self.collection.indexOf(item);
        });
    }
}