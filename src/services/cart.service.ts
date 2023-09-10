import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];

  //act as both observables and emits the data, whenever we need to pass the data we can call productList 
  public productList = new BehaviorSubject<any>([]);


  constructor() { }

  getProduct(){
    return this.productList.asObservable();
  }



  addtocart(product:any){
    this.cartItemList.push(product);            //push product inside it 
    this.productList.next(this.cartItemList);   // emitting to itn or passing cartItemlist to the product list
    this.getTotalPrice();
  }

  //get grand total of card item list
  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a:any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

 
  //remove single item from cart
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any) =>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  //remove all item from cart
  removeAllCartItem(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    } 

}

