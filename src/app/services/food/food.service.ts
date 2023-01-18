import { Injectable } from '@angular/core';
import  {foodInfomation}  from 'src/app/shared/models/foodInformation';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodImages():foodInfomation[] {   // this is a method which will help to show all the images on home page
          return [
            {
             name:"Peri Peri burger", 
             imageUrl: "assets/image1.JPG",
             id:1,
             price: 500,
             rating:4.5
            },
            {
              name:"noodles", 
              imageUrl: "assets/image2.jpg",
              id:2,
              price: 500,
              rating:4
             },
             {
              name:"Laziz Pazza", 
              imageUrl: "assets/image3.jpg",
              id:2,
              price: 500,
              rating:4
             },
             {
              name:"Chocolate Cake", 
              imageUrl: "assets/image4.webp",
              id:2,
              price: 500,
              rating:4.2,
             },
             {
              name:"Tropical Feta Veggie Sub", 
              imageUrl: "assets/image5.JPG",
              id:2,
              price: 500,
              rating:4.5,
             },
          ]
  }
}