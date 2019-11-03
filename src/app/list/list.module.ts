import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPage as ListPage } from './list.page';

import { Service } from './service';
import { SERVICES } from './mock-services';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ListPage }])
  ],
  declarations: [ListPage]
})
export class ListPageModule {

}
