import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmrpage',
  templateUrl: './bmrpage.page.html',
  styleUrls: ['./bmrpage.page.scss'],
})
export class BmrpagePage implements OnInit {

  Weight!:number;
  Height!:number;
  Sex:string = 'male';
  Bmi:number = 0;
  BmrMale:number = 0;
  BmrFemale:number = 0;
  Age!:number;
  Bmrkcal:number = 0;
  public alertButton = ['OK'];


  constructor() { }

  ngOnInit() { }

  Cal(){
    if(this.Sex == 'male'){
      this.CalculateBmrMale()
    }
    else if(this.Sex == 'female'){
      this.CalculateBmrFemale()
    }
  }

  CalculateBmrMale(){
    this.BmrMale = (this.Weight*10) + (6.25*this.Height) - ((5*this.Age)+5)
    console.log(this.BmrMale)
      this.Bmrkcal = this.BmrMale
    
  };

  CalculateBmrFemale(){
    this.BmrFemale = (this.Weight*10) + (6.25*this.Height) - ((5*this.Age)-16)
    console.log(this.BmrFemale)
    this.Bmrkcal = this.BmrFemale
  }
  
}
