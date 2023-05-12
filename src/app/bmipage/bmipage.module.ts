import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmipagePageRoutingModule } from './bmipage-routing.module';

import { BmipagePage } from './bmipage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmipagePageRoutingModule
  ],
  declarations: [BmipagePage]
})
export class BmipagePageModule {}
