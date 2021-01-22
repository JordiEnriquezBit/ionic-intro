import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path: 'nba',
        loadChildren: () => import('../nba/nba.module').then( m => m.NbaPageModule),
       },
      {
        path: 'album',
        loadChildren: () => import('../album/album.module').then( m => m.AlbumPageModule)
      },
      {
        path: 'bloc-page',
        loadChildren: () => import('../bloc/bloc-page/bloc-page.module').then( m => m.BlocPagePageModule)
      }
    ]
  },
  {path:"",redirectTo:"tabs/album", pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
