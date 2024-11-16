export interface Taco {
  id: number;
  name: string;
  price: number;
  noOnions?: boolean;
  noCilantro?: boolean;
  quantity?: number;
}

export interface Order {
  tacos: Taco[];
  orderId: number;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
<div class ="order-form-container">
  <form class = "order-form" #tacoOrderForm="ngForm" (ngSubmit)="addToOrder();">
    <h1>Complete the form below to place a new order.</h1>

  <fieldset>
    <legend>My Order</legend>
    <label for="tacoType">Taco Type</label>
    <select name ="taoType" id="tacoType" [(ngModel)]="selectedTacoId" ngModel>
      @for (taco of tacos; track taco){
        <option value = "{{taco.id}}">{{taco.name}}</option>
      }
    </select>

    <label for="qty"> Quantity</label>
    <input type="text" id="qty" name="qty" class="qty-input" [(ngModel)]="quantity" ngModel>
    <div class= "customization-section">
      <label>Customize</label>

        <div class="customization-option">
          <input type= "checkbox" id="noOnions" name= "noOnions" [(ngModel)] ="noOnions"ngModel>
        </div>

        <div class= "customization-option">
          <input type="checkbox" id="noCilantro" name="noCilantro" [(ngModel)]="noCilantro" ngModel>
        </div>
    </div>
    <input type="submit" value = "Add to Order"/>
  </fieldset>
  </form>


  <div class= "order-summary">
    <h1>Order Summary</h1>
      @if(order.tacos.length>0){
        <ul>
        @for (taco of order.tacos; track taco){
          <li>
            <strong>{{taco.quantity}}x{{taco.name}}</strong>
            <br/>
            Pricer per taco:{{taco.price |currency: 'USD':'symbol':'1.2-2'}}
            <br/>
            @if(taco.noOnions){
              No onions
            <br/>
            }
            @if(taco.noCilantro){
              No cilantro
              <br/>
            }
          </li>
        }
        </ul>
        <p><strong>Total:</strong>{{getTotal()|currency:'USD':'symbol':'1.2-2'}}</p>
      }@else {
        <p>No tacos added to order yet</p>
      }
    </div>
</div>
  `,
  styles: [
    `
    .order-form-container{
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .order-form{
      flex:1;
      margin-right: 20px;
    }

    .order-summary{
      flex:1;
    }

    fieldset{
      margin-bottom: 20px;
    }

    label, select, qty-input{
      display: block;
      margin-bottom: 5px
    }

    .qty-input, select, input[type ="submit]{
      padding: 8px;
      box-sizing: border-box;
    }

    select{
      width:100%;
    }

    .qty-input{
      width: 20%;
    }

    input[type= "submit"]{
      float: right;
    }

    .customization-section{
      margin-top: 10px;
    }

    .customization-option{
      display:flex;
      align-items:center;
      margin-bottom: 5px;
    }

    input[type="checkbox"]{
      margin-right:5px;
    }

    .order-summary li{
      margin-bottom:10px;
      padding: 5px;
    }
    `
  ]
})
export class OrderComponent {
  tacos:Taco[];
  order:Order;
  selectedTacoId: number;
  quantity: number;
  NoOnions: boolean = false;
  NoCilantro:boolean = false;
  orderTotal: number;

  constructor(){
    this.tacos=[
      {id:1,name: "Carnitas Taco", price: 3.25},
      {id:2 ,name: "Queso Birria Taco", price: 3.50},
      {id:3,name: "Al Pastor Taco", price: 3.25},
      {id:4,name: "Tacos de Lengua", price: 3.50},
      {id:5,name: "Chicken Taco", price: 3.25},
      {id:6,name: "Fish Taco", price: 3.25},
      {id:7,name: "Veggie Taco", price: 3.25},
      {id:8,name: "Chicharron Taco", price: 3.25},
      {id:9,name: "Potato Taco", price: 3.25},
      {id:10,name: "Chorizo Taco", price: 3.25}
    ];

    this.order={tacos:[], orderId:0};
    this.selectedTacoId=this.tacos[0].id;
    this.quantity=1;
    this.orderTotal=0;
  }
}
