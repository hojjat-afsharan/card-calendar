import { Component, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  maxZIndexCard: any;

  cards: Card[] = [
    {
      x: '20px',
      y: '50px',
      height: '100px',
      width: '200px',
      zIndex: '2',
    },
    {
      x: '50px',
      y: '80px',
      height: '60px',
      width: '250px',
      zIndex: '3',
    },
    {
      x: '20px',
      y: '80px',
      height: '100px',
      width: '100px',
      zIndex: '4',
    },
  ];

  firstCardZIndex = '3';
  secondCardZIndex = '2';

  ngOnInit() {
    this.calculateMaxZIndexCard();
  }

  ChangeZIndex(selectedCard: Card) {
    this.calculateMaxZIndexCard();
    if(selectedCard === this.maxZIndexCard) return;
    console.log(selectedCard);
    let zIndex = parseInt(this.maxZIndexCard.zIndex);
    zIndex += 1;
    selectedCard.zIndex = zIndex.toString();
  }

  calculateMaxZIndexCard() {
    this.maxZIndexCard = this.cards.reduce((prev, current) => {
      return prev.zIndex > current.zIndex ? prev : current;
    });
  }
}
