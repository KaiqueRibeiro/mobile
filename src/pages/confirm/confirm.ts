import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GlobalPreferencesVar } from '../../providers/global_var/preferencias';
import { OfflineData } from '../../providers/global_var/offline_data';

import { Observable } from 'rxjs/Observable';

import { TabsPage } from '../../pages/tabs/tabs';
import { SetCursoPage } from '../../pages/set-curso/set-curso';

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private providerPreferences: GlobalPreferencesVar,
    private providerOffline: OfflineData) {
  }

  Corrige() {
    this.navCtrl.push(SetCursoPage);
  }

  next() {
    this.providerOffline.Status = TabsPage;
    this.navCtrl.push(TabsPage);
  }


}
