import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetteService } from '../recette.service';
import { RecipeServiceService } from '../../login/recipe-service.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  @Input() recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recetteService: RecetteService,
    private recipeService: RecipeServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = +params['id'];
      this.recetteService.getRecetteById(recipeId).subscribe(
        (data) => {
          this.recipe = data;
        },
        error => {
          console.error('Error fetching recipe:', error);
        }
      );
    });
  }

  addRecipe() {
    this.recipeService.addRecipe(this.recipe);
  }
}
