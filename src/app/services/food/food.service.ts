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
             price: 80,
             rating:4.5,
             favorate:true,
             cookTime:"10 min",
             tags:["Burger","Chinese"],
            },
            {
              name:"Noodles", 
              imageUrl: "assets/image2.jpg",
              id:2,
              price: 100,
              rating:4.2,
              tags:["Chinese","Fast Food","Chowmein"],
              cookTime:"20 min",
             },
             {
              name:"Laziz Pazza", 
              imageUrl: "assets/image3.jpg",
              id:2,
              price: 220,
              rating:3.9,
              favorate:true,
              tags:["Pizza","Chinese","Fast Food"],
              cookTime:"40 min",
             },
             {
              name:"Chocolate Cake", 
              imageUrl: "assets/image4.webp",
              id:2,
              price: 299,
              rating:4.2,
              cookTime:"10 min",
              tags:["Cake","Pastry","Desert"],
             },
             {
              name:"Tropical Feta Veggie Sub", 
              imageUrl: "assets/image5.JPG",
              id:2,
              price: 129,
              rating:4.5,
              cookTime:"25 min",
              tags:["Pizza","Chinese","Fast Food"],
             },
          ]
  }
}