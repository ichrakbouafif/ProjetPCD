import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { RecetteListeComponent } from './recipes/recette-liste/recette-liste.component';
import { RecipePageComponent } from './recipes/recipe-page/recipe-page.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { LayoutComponent } from './login/layout/layout.component';
import { CalComponent } from './login/cal/cal.component';
import { ListeCoursesComponent } from './login/liste-courses/liste-courses.component';



const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'recettes',component: RecetteListeComponent},
  {path: 'recettes/:id', component: RecipePageComponent},
  {path: 'login' , component:LoginComponent},
  /* ****** */
  {path:'dashboard', component:DashboardComponent},
  {path:'layout',component:LayoutComponent},
  {path:'cal',component:CalComponent},
  {path:'listecourses',component:ListeCoursesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
