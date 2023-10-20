import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  drinks: any[] = [];

  constructor(
    private drinksService: DrinksService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listDrinksByFirstLetter();
  }

  listDrinksByFirstLetter() {
    this.drinksService.getData().subscribe((response: any) => {
      this.drinks = Object.values(response);
    });
  }

  onClick(id: number){
    this.router.navigate(['/ingredients', id])
  }
}
