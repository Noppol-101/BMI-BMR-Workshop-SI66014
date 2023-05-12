import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'bmipage',
        loadChildren: () => import('../bmipage/bmipage.module').then( m => m.BmipagePageModule)
      },
      {
        path: 'bmrpage',
        loadChildren: () => import('../bmrpage/bmrpage.module').then( m => m.BmrpagePageModule)
      },
      {
        path: 'aboutmepage',
        loadChildren: () => import('../aboutmepage/aboutmepage.module').then( m => m.AboutmepagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/bmipage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/bmipage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
