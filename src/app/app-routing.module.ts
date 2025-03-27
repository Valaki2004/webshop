import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandiesComponent } from './candies/candies.component';
import { ChipsekComponent } from './chipsek/chipsek.component';
import { CsiposChipsekComponent } from './csipos-chipsek/csipos-chipsek.component';
import { EdesUditokComponent } from './edes-uditok/edes-uditok.component';
import { GumicukrokComponent } from './gumicukrok/gumicukrok.component';
import { SavanyuUditokComponent } from './osszestermek/savanyu-uditok.component';
import { SosChipsekComponent } from './sos-chipsek/sos-chipsek.component';
import { UditokComponent } from './uditok/uditok.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { OrderComponent } from './order/order.component';
import { adminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path:'candies',component:CandiesComponent},
  { path:'chipsek',component:ChipsekComponent},
  { path:'csipos-csipsek',component:CsiposChipsekComponent},
  { path:'edes-uditok',component:EdesUditokComponent},
  { path:'gumicukrok',component:GumicukrokComponent},
  { path:'osszestermek',component: SavanyuUditokComponent},
  { path:'sos-chipsek', component:SosChipsekComponent},
  { path:'uditok', component:UditokComponent},
  { path:'register', component:RegisterComponent, },
  { path:'login', component:LoginComponent, },
  { path:'navbar', component:NavbarComponent},
  { path: 'card', component: CardComponent },
  { path: 'order', component: OrderComponent},
  { path: 'admin',component:AdminComponent, canActivate:[adminGuard]},
  { path: '', redirectTo: '/osszestermek', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
