import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmrpagePage } from './bmrpage.page';

const routes: Routes = [
  {
    path: '',
    component: BmrpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmrpagePageRoutingModule {}
