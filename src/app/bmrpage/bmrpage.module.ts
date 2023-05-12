import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmrpagePageRoutingModule } from './bmrpage-routing.module';

import { BmrpagePage } from './bmrpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmrpagePageRoutingModule
  ],
  declarations: [BmrpagePage]
})
export class BmrpagePageModule {}
