import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-recette-liste',
  templateUrl: './recette-liste.component.html',
  styleUrls: ['./recette-liste.component.css']
})
export class RecetteListeComponent implements OnInit {
  title = 'recette.app';
  recettes: any[] = [];
  filteredRecettes: any[] = [];
  selectedValue: string = "Tout";
  searchQuery: string = ''; // Variable to store the search query

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.getAllRecettes();
  }

  getAllRecettes(): void {
    this.recetteService.getRecettes().subscribe((data: any) => {
      this.recettes = data;
      this.filteredRecettes = this.recettes;
      this.recettes.forEach(recette => {
        recette.image = JSON.parse(recette.image.replace(/'/g, '"'));
      });
    });
  }

  filterRecettesByType(type: string): void {
    this.selectedValue = type;
    if (type === "Tout") {
      this.filteredRecettes = this.recettes;
    } else {
      this.recetteService.getRecettesByType(type).subscribe((data: any) => {
        this.filteredRecettes = data;
        this.filteredRecettes.forEach(recette => {
          recette.image = JSON.parse(recette.image.replace(/'/g, '"'));
        });
      }, error => {
        console.error("Error fetching filtered recipes:", error);
      });
    }
  }

  // Event handler for search query emitted by SearchbarComponent
  handleSearchQuery(searchQuery: string): void {
    this.searchQuery = searchQuery; // Update the search query
    // Filter recipes based on search query and selected type
    this.filteredRecettes = this.recettes.filter(recette => {
      return recette.type === this.selectedValue && recette.nom.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
}
