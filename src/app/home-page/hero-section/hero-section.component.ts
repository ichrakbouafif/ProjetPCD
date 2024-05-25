import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  myScriptElement: HTMLScriptElement | null = null;

  constructor(@Inject(DOCUMENT) private document: Document) {
    // Ensure the code is running in a browser context (document is defined)
    if (this.document) {
        // Create a script element
        this.myScriptElement = this.document.createElement("script");
        // Set the source of the script element
        this.myScriptElement.src = "../../assets/scripts/hero-section.js";
        // Append the script element to the body of the document
        this.document.body.appendChild(this.myScriptElement);
    }
  }
}
