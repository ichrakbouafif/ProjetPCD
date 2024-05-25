import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private recipes = [
    {
      name: 'Pâtes À La Carbonara, La Vraie Recette !',
      image: '../../../assets/images/pates.png',
      ingredients: [
        '80 gr de parmesan (ou pecorino)',
        '4 tranches de pancetta (4 à 5 tranches)',
        '2 oeufs',
        'Poivre du moulin'
      ]
    },
    {
      name: 'Chocolats Maison',
      image: '../../../assets/images/chocolats-maison.png',
      ingredients: [
        '200g de chocolat noir',
        '100g de chocolat au lait',
        '50g de beurre',
        '50g de crème liquide',
        '30g de noisettes concassées',
        '30g d\'amandes effilées',
        '10g de sucre glace',
        '1 pincée de sel',
        '1 cuillère à café de vanille liquide'
      ]
    },
    {
      name: 'Donuts',
      image: '../../../assets/images/donuts.png',
      ingredients: ['350 gr de farine', '2 cac de levure de boulanger', '2 oeufs', '60 ml de lait', '60 ml d\'eau', '2 c. à café de sel', '40 gr de sucre', '30 gr de beurre mou', '50 ml de lait', '340 gr de sucre glace', 'colorants alimentaires', 'décorations en sucre']
    }
  ];

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: any) {
    this.recipes.push(recipe);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
