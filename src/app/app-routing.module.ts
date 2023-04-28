import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { GameByPlatformComponent } from './game-by-platform/game-by-platform.component';
import { GameBySortComponent } from './game-by-sort/game-by-sort.component';
import { GameByCategoryComponent } from './game-by-category/game-by-category.component';

const routes: Routes = [
{path:"",redirectTo:"login",pathMatch:"full"},

{path:"login",component:LoginComponent},
{path:"gameDetails/:id",canActivate:[AuthGuard],component:GameDetailsComponent},
{path:"allGames",canActivate:[AuthGuard],component:AllGamesComponent},
{path:"gamesByPlatform/:platform",canActivate:[AuthGuard],component:GameByPlatformComponent},
{path:"gamesSortBy/:sort-by",canActivate:[AuthGuard],component:GameBySortComponent},
{path:"gamesByCategory/:category",canActivate:[AuthGuard],component:GameByCategoryComponent},
{path:"register",component:RegisterComponent},
{path:"home",canActivate:[AuthGuard],component:HomeComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{useHash:true}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
