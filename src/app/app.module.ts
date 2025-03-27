import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandiesComponent } from './candies/candies.component';
import { ChipsekComponent } from './chipsek/chipsek.component';
import { CsiposChipsekComponent } from './csipos-chipsek/csipos-chipsek.component';
import { EdesUditokComponent } from './edes-uditok/edes-uditok.component';
import { GumicukrokComponent } from './gumicukrok/gumicukrok.component';
import { SavanyuUditokComponent } from './savanyu-uditok/savanyu-uditok.component';
import { SosChipsekComponent } from './sos-chipsek/sos-chipsek.component';
import { UditokComponent } from './uditok/uditok.component';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { CardComponent } from './card/card.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    CandiesComponent,
    ChipsekComponent,
    CsiposChipsekComponent,
    EdesUditokComponent,
    GumicukrokComponent,
    SavanyuUditokComponent,
    SosChipsekComponent,
    UditokComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    CardComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
