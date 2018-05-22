import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SetCursoPage } from '../../pages/set-curso/set-curso';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  configurar() {
    this.navCtrl.push('SetCursoPage');
  }

}
