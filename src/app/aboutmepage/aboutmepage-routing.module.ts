import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmepagePage } from './aboutmepage.page';

const routes: Routes = [
  {
    path: '',
    component: AboutmepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutmepagePageRoutingModule {}
