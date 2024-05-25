import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.css'
})
export class CartButtonComponent {
  cartImagePath: string = '../../assets/images/empty-cart.png'; // Default image path
  clickCount: number = 0;
  message: string = 'Liste des courses'; // Default message

  constructor() {}

  onClick() {
    this.clickCount++;
    this.updateImagePath();
    this.updateMessage();
  }

  private updateImagePath() {
    if (this.clickCount % 2 === 0) {
      this.cartImagePath = '../../assets/images/empty-cart.png'; // Set url1 when clickCount is even
    } else {
      this.cartImagePath = '../../assets/images/full-cart.png'; // Set url2 when clickCount is odd
    }
  }

  private updateMessage() {
    if (this.clickCount % 2 === 0) {
      this.message = 'Retiré de la liste des courses';
    } else {
      this.message = 'Ajouté à la liste des courses';
    }
  }
}
