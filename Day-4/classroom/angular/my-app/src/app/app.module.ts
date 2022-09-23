import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaincomComponent } from './maincom/maincom.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { USER_ROUTE } from 'app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MaincomComponent,
    HeaderComponent,
    FooterComponent,
    FormdemoComponent,
    PortfolioComponent,
    LoginComponent,
    RegistrationComponent,
    UserdetailsComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule, USER_ROUTE
  ],
  providers: [],
  bootstrap: [LandingpageComponent]
})
export class AppModule { }
