import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodImages():string[] {   // this is a method which will help to show all the images on home page
          return [
            'assets/image1.JPG',
            'assets/image2.jpg',
          ]
  }
}
