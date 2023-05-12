import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmipage',
  templateUrl: './bmipage.page.html',
  styleUrls: ['./bmipage.page.scss'],
})
export class BmipagePage implements OnInit {
  
  Weight!:number;
  Height!:number;
  Bmi:number = 0;
  BmiLevel!:string;
  public alertButton = ['OK'];

  constructor() { }

  ngOnInit() {
  }

  Calculate(){
    console.log('Weight:',this.Weight);
    console.log('Height:',this.Height);
    this.Bmi = this.Weight/((this.Height/100.00)*(this.Height/100.00))
    console.log('BMI:',this.Bmi);
  }

  BmiCalculate(){
    this.Bmi = parseFloat((this.Weight / ((this.Height / 100.00) * (this.Height / 100.00))).toFixed(2));
    if(this.Bmi < 18.5){
      this.BmiLevel = 'Underweight'
    }
    else if(this.Bmi >= 18.5 && this.Bmi <= 24.9){
      this.BmiLevel = 'Normal'
    }
    else if(this.Bmi > 24.9 && this.Bmi <= 29.9){
      this.BmiLevel = 'Overweight'
    }
    else if(this.Bmi > 29.9 && this.Bmi <= 34.9){
      this.BmiLevel = 'Obese'
    }
    else if(this.Bmi > 34.9){
      this.BmiLevel = 'Extremely Obese'
    }
    console.log('BMI:',this.Bmi);
    console.log('BmiLevel:',this.BmiLevel);
  }
}
