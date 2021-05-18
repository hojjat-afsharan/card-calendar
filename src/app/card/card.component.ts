import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() x = '0px';
  @Input() y = '0px';
  @Input() width = '100px';
  @Input() height = '100px';
  @Input() zIndex = '0';
  @Input() color = 'rgb(255, 255, 255)';

  @Output() goUp = new EventEmitter();

  hovered = false;

  constructor() { }

  ngOnInit(): void {
  }

  goUpOneLevel() {
    this.goUp.emit(this.zIndex);
  }

}
