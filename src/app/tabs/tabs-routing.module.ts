import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../list/list.module').then(m => m.ListPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'gigs/:gid',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gigs/gigs.module').then(m => m.GigsPageModule)
          }
        ]
      },
      {
        path: 'gigs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../gigs/gigs.module').then(m => m.GigsPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'maps',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../maps/maps.module').then(m => m.MapsPageModule)
          }
        ]
      },
      {
        path: 'create',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../createGig/create_gig.module').then(m => m.CreateGigPageModule)
          }
        ]
      },
   {
    path: 'service-detail/:id',
    children: [
      {
        path: '',
        loadChildren: () =>
            import('../service-detail/service-detail.module').then(m => m.ServiceDetailModule)
      }
    ]
    },
      {
        path: '',
        redirectTo: '/app/tabs/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/tabs/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
