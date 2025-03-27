import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandiesComponent } from './candies/candies.component';
import { ChipsekComponent } from './chipsek/chipsek.component';
import { CsiposChipsekComponent } from './csipos-chipsek/csipos-chipsek.component';
import { EdesUditokComponent } from './edes-uditok/edes-uditok.component';
import { GumicukrokComponent } from './gumicukrok/gumicukrok.component';
import { SavanyuUditokComponent } from './savanyu-uditok/savanyu-uditok.component';
import { SosChipsekComponent } from './sos-chipsek/sos-chipsek.component';
import { UditokComponent } from './uditok/uditok.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'candies',component:CandiesComponent},
  { path:'chipsek',component:ChipsekComponent},
  { path:'csipos-csipsek',component:CsiposChipsekComponent},
  { path:'edes-uditok',component:EdesUditokComponent},
  { path:'gumicukrok',component:GumicukrokComponent},
  { path:'savanyu-uditok',component:SavanyuUditokComponent},
  { path:'sos-chipsek', component:SosChipsekComponent},
  { path:'uditok', component:UditokComponent},
  { path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  { path:'navbar', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
