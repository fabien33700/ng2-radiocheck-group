import { 
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit 
} from '@angular/core';

import { ToggleMap } from './toggle-map';

@Component({
  selector: 'check-group',
  template: `
    <div *ngFor="let item of items; let i = index" class="form-group">
        <input #c 
            (click)="changeHandler([c.value])" 
            [name]="name"
            [checked]="isChecked(i)"
            [value]="i"
            type="checkbox" class="form-control">
        {{ getItemCaption(item) }} {{i}}
    </div> 
  `
})
export class CheckGroup {
    @Input() items: Array<any>;
    @Input() name: string;
    @Input() initial: Array<number>;

    @Output() changed = new EventEmitter();
    @Output() added   = new EventEmitter();
    @Output() removed = new EventEmitter();

    private selected: ToggleMap<string> = null;

    constructor() {}

    ngOnInit() {
        this.selected = new ToggleMap<string>(this.items);

        if (this.initial !== undefined) {
            let self = this;
            this.initial.map(function (item) {
                self.changeHandler(item);
            });
        }
    }

    changeHandler(index: number) { 
        let present = this.selected.toggle(index);

        let event = {
            indexes: this.getSelectedIds(),
             values: this.getSelectedItems()
        };
        
        this.changed.emit(event);
        this[(present) ? 'removed' : 'added'].emit(event);
    }

    private isChecked(index: number) {
        return this.selected.indexes(true).indexOf(index) > -1;
    }

    /*private setInitial(indexes: Array<number>) {
        indexes.map(this.changeHandler);
    }*/

    private getItemCaption(item) {
        return (typeof item === "object") ?
            item.toString() : 
            item;
    }

    getSelectedIds(): Array<number> {
        return this.selected.indexes(true);
    }

    getSelectedItems() {
        return this.selected.items(true);
    }
}