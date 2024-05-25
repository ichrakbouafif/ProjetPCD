import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrl: './recipe-title.component.css'
})
export class RecipeTitleComponent {
  @Input() title!: string;
}
