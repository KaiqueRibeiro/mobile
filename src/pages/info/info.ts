import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

import { GlobalPreferencesVar } from '../../providers/global_var/preferencias';

import { HelpPage } from '../help/help';
import { SetCursoPage } from '../set-curso/set-curso';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public app: App,
    private providerPreferences: GlobalPreferencesVar) {

  }

  exibe() {
    this.navCtrl.push(HelpPage);
  }

  alterar(){
    this.providerPreferences.myTurno = '0';
    this.providerPreferences.myCurso = '0';
    this.providerPreferences.mySemestre = '0';

    this.app.getRootNav().setRoot(SetCursoPage);
  }

}
