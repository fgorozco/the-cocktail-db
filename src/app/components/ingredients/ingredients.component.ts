import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients: any[] = [];
  ingredients2: any[] = [
    {
      ingredient: '6 Egg Yolk',
      picture: '../../../assets/6 Egg Yolk.png'
    },
    {
      ingredient: '14 cup Sugar',
      picture: '../../../assets/14 cup Sugar.png'
    },
    {
      ingredient: '2 cups Milk',
      picture: '../../../assets/2 cups Milk.png'
    },
    {
      ingredient: '12 cup Light rum',
      picture: '../../../assets/12 cup Light rum.png'
    },
    {
      ingredient: '12 cup Bourbon',
      picture: '../../../assets/12 cup Bourbon.png'
    },
    {
      ingredient: '1 tsp Vanilla extract',
      picture: '../../../assets/1 tsp Vanilla extract.png'
    },
  ];

  id: number = 0;


  constructor(
    private ingredientsService: IngredientsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Utiliza el observable paramMap para obtener el valor de "id" de la ruta.
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.id = +idParam;
        // Ahora, "this.id" contiene el valor del ID desde la ruta.
        console.log('ID:', this.id);
      } else {
        // El parámetro "id" es nulo, manejar el caso según lo necesario.
        console.log('El parámetro ID es nulo.');
        // Puedes redirigir o mostrar un mensaje de error, por ejemplo.
      }
    });

    //Servicio que trae la respuesta de la API
    this.ingredientsService.getData(this.id).subscribe((response: any) => {
      this.ingredients = Object.values(response); //Se convierte en un array iterable
      this.router.navigate(['/ingredients', response.idDrink]); //Se pasa el ID de la ruta y navega
    });
  }

  //Función para cambiar el color del background de cada ingrediente
  getColor(index: number): string {
    if (index === 0 || index === 3) {
      return '#DFBED8';
    } else if (index === 1 || index === 4) {
      return '#C5DBA1';
    } else {
      return  '#DBB6A1';
    }
  }
}
