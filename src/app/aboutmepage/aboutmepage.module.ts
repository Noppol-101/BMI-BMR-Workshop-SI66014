import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutmepagePageRoutingModule } from './aboutmepage-routing.module';

import { AboutmepagePage } from './aboutmepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutmepagePageRoutingModule
  ],
  declarations: [AboutmepagePage]
})
export class AboutmepagePageModule {}
