import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent {
  @Input() recipe: any;
  ingredientsList!: { category: string, ingredients: string[] }[];

  constructor() {}

  ngOnChanges() {
    if (this.recipe && this.recipe.ingredients) {
      this.parseIngredients();
    }
  }

  private parseIngredients() {
    // Replace single quotes with double quotes in specific contexts
    const ingredientsString = this.recipe.ingredients
      .replace(/'(?=:)/g, '"') // Replace single quotes before colon with double quotes
      .replace(/([{,\[])\s*'/g, '$1"') // Replace single quotes after {, [, , with double quotes
      .replace(/'\s*([,\]}])/g, '"$1'); // Replace single quotes before }, ], , with double quotes
    
    console.log('Ingredients String:', ingredientsString); // Log the modified ingredients string
    
    try {
      // Parse the corrected string as JSON
      const ingredientsMap = JSON.parse(ingredientsString);
  
      // Convert the parsed object into the desired format
      this.ingredientsList = Object.keys(ingredientsMap).map(category => {
        return { category, ingredients: ingredientsMap[category] };
      });
    } catch (error) {
      console.error('Error parsing ingredients JSON:', error);
    }
  }  
}
