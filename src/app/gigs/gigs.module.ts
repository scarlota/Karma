import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GigsPage } from './gigs.page';

export class AppComponent  {
  show = 'show posted'

  showPending = true;
  showPosted = false;

  toggle(){
  this.showPending = !this.showPending;
  this.showPosted = !this.showPosted;
  if(this.showPending){
   this.show = 'show pending'
  } 
  
  if(!this.showPosted){
   this.show = 'show posted'
   }
   }
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: GigsPage }])
  ],
  declarations: [GigsPage]
})
export class GigsPageModule {}
