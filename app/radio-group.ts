import { 
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit 
} from '@angular/core';

@Component({
  selector: 'radio-group',
  template: `
    <div *ngFor="let item of items; let i = index" class="form-group">
        <input #r 
            (click)="changeHandler(r.value, r)" 
            [name]="name"
            [checked]="initial == i" 
            [value]="i"
            type="radio" class="form-control">
        {{ getItemCaption(item) }}
    </div> 
  `
})
export class RadioGroup {
    @Input() items: Array<any>;
    @Input() name: string;
    @Input() initial: number;
    @Output() changed = new EventEmitter();

    private selected: number;

    constructor() {}

    ngOnInit() {
        if (this.initial !== undefined) {
            this.changeHandler(this.initial);
        }
    }

    changeHandler(newIndex) {  
        this.selected = newIndex;
        this.changed.emit({
            index: this.getSelectedId(),
            value: this.getSelectedItem()
        });
    }

    private getItemCaption(item) {
        return (typeof item === "object") ?
            item.toString() : 
            item;
    }

    getSelectedId(): number {
        return this.selected;
    }

    getSelectedItem() {
        return this.items[this.selected];
    }
}