import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  drinks: any[] = [];

  constructor(private drinksService: DrinksService) { }

  ngOnInit(): void {
    this.listDrinksByFirstLetter();
  }

  listDrinksByFirstLetter() {
    this.drinksService.getData().subscribe((data: any) => {
      this.drinks = Object.values(data);
      console.log(this.drinks)
    });
  }
}
