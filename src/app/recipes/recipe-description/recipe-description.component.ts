import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.css']
})
export class RecipeDescriptionComponent {
  @Input() description!: string;
}
