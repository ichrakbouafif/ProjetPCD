import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { GeneralModule } from '../general/general.module';
import { CalComponent } from './cal/cal.component';

// Angular Calendar imports
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { RouterModule } from '@angular/router';
import { ListeCoursesComponent } from './liste-courses/liste-courses.component';

// Register French locale
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    CalComponent,
    ListeCoursesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GeneralModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  exports: [
    LayoutComponent,
    CalComponent,
    ListeCoursesComponent,
  ]
})
export class LoginModule { }


