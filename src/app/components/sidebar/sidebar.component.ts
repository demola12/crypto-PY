import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})



export class SidebarComponent implements OnInit {
  // item = true;
  // @Output() toggleDisplay: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  // toggle(){
  //   this.toggleDisplay.emit();
  // }
}
