import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-properties',
  templateUrl: './recipe-properties.component.html',
  styleUrls: ['./recipe-properties.component.css']
})
export class RecipePropertiesComponent implements OnInit {
  @Input() propertiesString!: string; // Input property to receive the properties string
  properties: string[] = []; // Array to hold the properties after parsing

  constructor() { }

  ngOnInit() {
    if (this.propertiesString) {
      try {
        // Try parsing the string as JSON
        this.properties = JSON.parse(this.propertiesString.replace(/'/g, '"'));
      } catch (error) {
        // If parsing as JSON fails, handle it as a non-JSON string
        // Split the string based on the delimiter (e.g., ',')
        this.properties = this.propertiesString.replace('[', '').replace(']', '').split(',');
      }
      console.log(this.properties);
    }
  }
}
