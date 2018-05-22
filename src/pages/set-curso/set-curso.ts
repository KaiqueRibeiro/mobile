import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GlobalPreferencesVar } from '../../providers/global_var/preferencias';

import { HelpPage } from '../help/help';
import { SetCurso2Page } from '../set-curso2/set-curso2';

@IonicPage()
@Component({
  selector: 'page-set-curso',
  templateUrl: 'set-curso.html',
})
export class SetCursoPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private providerPreferences: GlobalPreferencesVar) {

  }

  defineTurno(val){
    this.providerPreferences.gravaTurno(val);
    this.navCtrl.push('SetCurso2Page');
  }

  ajuda(){
    this.navCtrl.push(HelpPage);
  }

}
