import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Output() onClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public fire():void{
    this.onClick.emit(true)
  }

}
