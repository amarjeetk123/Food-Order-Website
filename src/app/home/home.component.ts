import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foodInfomation } from '../shared/models/foodInformation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images:foodInfomation [] = [] ;

  constructor(private foodimages:FoodService){
    // console.log(foodimages.getAllFoodImages())

    this.images = foodimages.getAllFoodImages()
  }
}
