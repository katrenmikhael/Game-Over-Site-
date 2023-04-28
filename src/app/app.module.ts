import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { GameByPlatformComponent } from './game-by-platform/game-by-platform.component';
import { GameBySortComponent } from './game-by-sort/game-by-sort.component';
import { GameByCategoryComponent } from './game-by-category/game-by-category.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    GameDetailsComponent,
    AllGamesComponent,
    GameByPlatformComponent,
    GameBySortComponent,
    GameByCategoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
