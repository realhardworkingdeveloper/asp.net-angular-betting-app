import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { MatchesComponent } from './matches/matches.component';
import { JwtModule } from '@auth0/angular-jwt';
import { BetFormComponent } from './bet-form/bet-form.component';
import { AdminMatchesComponent } from './admin/admin-matches/admin-matches.component';
import { AdminMatchesFormComponent } from './admin/admin-matches-form/admin-matches-form.component';
import { AdminMatchesFormEditComponent } from './admin/admin-matches-form-edit/admin-matches-form-edit.component';
import { AdminScoreFormComponent } from './admin/admin-score-form/admin-score-form.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    MatchesComponent,
    BetFormComponent,
    AdminMatchesComponent,
    AdminMatchesFormComponent,
    AdminMatchesFormEditComponent,
    AdminScoreFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    ErrorInterceptorProvider,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
