import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,FooterComponent,

  ],
  imports: [
    CommonModule,FormsModule,RouterModule,
  ],
  exports:[NavbarComponent,FooterComponent,],
  providers: []
})
export class GeneralModule { }
