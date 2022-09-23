import {RouterModule} from '@angular/router'
import { LoginComponent } from 'src/app/login/login.component'
import { PortfolioComponent } from 'src/app/portfolio/portfolio.component'
import { RegistrationComponent } from 'src/app/registration/registration.component'
import { UserdetailsComponent } from 'src/app/userdetails/userdetails.component'


 export const USER_ROUTE= RouterModule.forRoot([
{path:'', component:LoginComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegistrationComponent},
{path:'userdetails', component:UserdetailsComponent},
{path:'portfolio', component:PortfolioComponent}

 ])