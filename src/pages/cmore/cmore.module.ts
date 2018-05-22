import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CmorePage } from './cmore';

@NgModule({
  declarations: [
    CmorePage,
  ],
  imports: [
    IonicPageModule.forChild(CmorePage),
  ],
})
export class CmorePageModule {}
