import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../../login/recipe-service.service';

@Component({
  selector: 'app-liste-courses',
  templateUrl: './liste-courses.component.html',
  styleUrls: ['./liste-courses.component.css']
})
export class ListeCoursesComponent implements OnInit {
  recipes: { name: string, image: string, ingredients: string[] }[] = [];

  constructor(private recipeService: RecipeServiceService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  deleteRecipe(index: number) {
    this.recipeService.deleteRecipe(index);
    this.recipes = this.recipeService.getRecipes();
  }
}
