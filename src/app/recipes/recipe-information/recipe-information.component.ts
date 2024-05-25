import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-information',
  templateUrl: './recipe-information.component.html',
  styleUrl: './recipe-information.component.css'
})
export class RecipeInformationComponent {
  @Input() type!: string;
  @Input() tmps_preparation!: string;
  @Input() tmps_cuisson!: string;
  @Input() nb_personne!: string;
  @Input() difficulte!: string;
}
