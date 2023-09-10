import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit{

  public products:any = [];
  public grandTotal !: number;

  constructor(private cartServices: CartService){}


  ngOnInit(): void {
    this.cartServices.getProduct().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartServices.getTotalPrice();
    })
  }

  //method to remove single item from cart
  removeItem(item:any){
    this.cartServices.removeCartItem(item);
  }


  //method to remove all items from cart

  removeAllItems(){
    this.cartServices.removeAllCartItem();
  }
}
