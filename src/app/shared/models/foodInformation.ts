export class foodInfomation {  // it is a class whose name is foodInforamtion.
    name!: string;
    imageUrl!: string;
    id!: number;
    price!: number;
    favorate: boolean = false; // if we assigned the value then we do not have to write ! sign
    star!: number;
    tags!: string[];
    cookTime!: string;
}