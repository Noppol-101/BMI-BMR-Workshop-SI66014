import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmipagePage } from './bmipage.page';

const routes: Routes = [
  {
    path: '',
    component: BmipagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmipagePageRoutingModule {}
