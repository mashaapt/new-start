import { Component, OnInit } from '@angular/core';


class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  text: string = "";
  price: number = 0;

  calc: number;

  
  items: Item[] =
      [
          { purchase: "Хлеб", done: false, price: 15.9 },
          { purchase: "Масло", done: false, price: 60 },
          { purchase: "Картофель", done: true, price: 22.6 },
          { purchase: "Сыр", done: false, price: 310 }
      ];
      
  addItem(text: string, price: number): void {
  
      if (text == null || text.trim() == "" || price == null)
          return;
      this.items.push(new Item(text, price));
  }
  constructor() { }

  ngOnInit(): void {
  }

}


