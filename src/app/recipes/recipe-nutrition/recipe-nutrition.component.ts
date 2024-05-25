import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-nutrition',
  templateUrl: './recipe-nutrition.component.html',
  styleUrls: ['./recipe-nutrition.component.css']
})
export class RecipeNutritionComponent {
  @Input() recipe: any;
  nutrition: any;
  nutritionKeys!: string[];

  constructor() {}

  ngOnChanges() {
    if (this.recipe && this.recipe.nutrition) {
      // Preprocess the nutrition data to convert single quotes to double quotes
      const processedNutritionData = this.recipe.nutrition.replace(/'/g, '"');
      // Parse the processed data into a JavaScript object
      this.nutrition = JSON.parse(processedNutritionData);
      this.nutritionKeys = Object.keys(this.nutrition);
    }
  }
}
