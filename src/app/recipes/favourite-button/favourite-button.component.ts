import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent {
  favoriteImagePath: string = '../../assets/images/empty-heart.png'; // Default image path
  clickCount: number = 0;
  message: string = 'Liste des favoris'; // Default message

  constructor() {}

  onClick() {
    this.clickCount++;
    this.updateImagePath();
    this.updateMessage();
  }

  private updateImagePath() {
    if (this.clickCount % 2 === 0) {
      this.favoriteImagePath = '../../assets/images/empty-heart.png'; // Set url1 when clickCount is even
    } else {
      this.favoriteImagePath = '../../assets/images/full-heart.png'; // Set url2 when clickCount is odd
    }
  }

  private updateMessage() {
    if (this.clickCount % 2 === 0) {
      this.message = 'Retiré de la liste des favoris';
    } else {
      this.message = 'Ajouté à la liste des favoris';
    }
  }
}
