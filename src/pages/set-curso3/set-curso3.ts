import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { CursosProvider } from '../../providers/cursos/cursos';
import { GlobalPreferencesVar } from '../../providers/global_var/preferencias';

import { Observable } from 'rxjs/Observable';

import { ConfirmPage } from '../confirm/confirm';
import { HelpPage } from '../help/help';

@IonicPage()
@Component({
  selector: 'page-set-curso3',
  templateUrl: 'set-curso3.html',
})
export class SetCurso3Page {

  courses: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider: CursosProvider,
    private providerPreferences: GlobalPreferencesVar,
    private toast: ToastController) {

    this.courses = this.provider.getAllbyS();

  }

  ajuda(){
    this.navCtrl.push(HelpPage);
  }

  ready(semestre) {
    this.providerPreferences.gravaSemestre(semestre);
  }

  next() {
    if (this.providerPreferences.mySemestre != undefined) {
      this.navCtrl.push('ConfirmPage');
    }else{
      this.toast.create({ message: 'Por favor, selecione um semestre.', duration: 3000 }).present();
      }
  }

}
