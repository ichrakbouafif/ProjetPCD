import { Component, OnInit,Input } from '@angular/core';
import { RecommendationServiceService } from '../../recommendation-service.service';
import { RecetteService } from '../../recipes/recette.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userEmail!: string;
  recommendations: any[] = []; 
  recettes: any[] = []; // Initialize recettes as an array
  constructor(private recommendationService: RecommendationServiceService,
    private recetteService: RecetteService,
    private sanitizer: DomSanitizer,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userEmail = this.userService.getUserEmail(); 
    this.recommendationService.getRecommendations().subscribe(data => {
      if (data && data.recommendations) {
        this.recommendations = data.recommendations;
        this.recommendations.forEach(recette => {
          recette.image = JSON.parse(recette.image.replace(/'/g, '"'));
        });
      } else {
        console.error('Invalid data received from server');
      }
    }, error => {
      console.error('Error fetching recommendations', error);
    });
  }
  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}

