import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-image',
  templateUrl: './recipe-image.component.html',
  styleUrl: './recipe-image.component.css'
})
export class RecipeImageComponent {
  @Input() imageString!: string;
  imageUrl!: string;

  ngOnInit() {
    this.parseImageString();

  }

  parseImageString() {
    if (this.imageString) {
      const imageArray = JSON.parse(this.imageString.replace(/'/g, '"'));
      if (imageArray.length > 0) {
        this.imageUrl = imageArray[0];  // Use the first image URL
      }
    }

  }
}
