import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() toggleDisplay: EventEmitter<any> = new EventEmitter();
  // @Output() change = new EventEmitter();
  
  isStar: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.toggleDisplay.emit();
    this.isStar = !this.isStar;
  }

}
