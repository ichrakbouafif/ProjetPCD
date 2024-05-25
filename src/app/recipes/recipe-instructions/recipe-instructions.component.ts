import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent {
  @Input() instructionString!: string; // Input property to receive the instructions string
  instructions: string[] = []; // Array to hold the instructions

  constructor() { }

  // Initialization logic
  ngOnInit() {
    console.log(this.instructionString);
    // Assign instructionString to instructions directly
    this.instructions = this.instructionString.split(/,\s*["']|,\s*['"]/).map(instruction => instruction.replace(/["'\[\]]/g, ''));    }
}
