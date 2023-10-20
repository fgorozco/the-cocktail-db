import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { DrinkOfTheMomentComponent } from './components/drink-of-the-moment/drink-of-the-moment.component';
import { FooterComponent } from './common/footer/footer.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { SearchByNameComponent } from './common/search-by-name/search-by-name.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DrinkOfTheMomentComponent,
    DrinksComponent,
    HomeComponent,
    IngredientsComponent,
    InstructionsComponent,
    SearchByNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
