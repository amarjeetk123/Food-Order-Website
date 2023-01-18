import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images:string[] = [] ;

  constructor(private foodimages:FoodService){
    // console.log(foodimages.getAllFoodImages())

    this.images = foodimages.getAllFoodImages()
  }
}
