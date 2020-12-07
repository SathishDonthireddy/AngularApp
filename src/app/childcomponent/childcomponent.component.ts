import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.sass']
})
export class ChildcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input()
all :number;
@Input()
male :number;
@Input()
female :number;

SelectedRadioButtonValue: string='All';
@Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

      onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.SelectedRadioButtonValue);
    }
}

