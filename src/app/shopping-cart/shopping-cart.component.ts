import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  implements OnInit{

  productList: any;

  constructor( private api: ApiService, private cartService:CartService  ){}


  ngOnInit():void {

    //api call to get all product list 
    this.api.getAllProducts().subscribe(res=>{
      this.productList = res;
      
      
      this.productList.forEach((a:any)=>{ 
    //adding 2 more elements for table i.e. {Quantity} and {total} since its missing from our fake api list
        Object.assign(a,{quantity:1, total:a.price});     
      });  



    })
  }


  //add product to the cart
  addtocart(products:any){
    this.cartService.addtocart(products);
  }
}
