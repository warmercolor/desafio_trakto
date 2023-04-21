import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {
  @Input() label!: string;
  @Input() name!: string;
  @Input() inputType: string = 'text';
  @Input() placeholder!: string;
  @Input() required: boolean = false;
  @Input() value!: string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onChange() {
    this.valueChange.emit(this.value);
  }
}

