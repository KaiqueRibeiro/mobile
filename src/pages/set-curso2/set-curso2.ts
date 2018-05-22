import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { CursosProvider } from '../../providers/cursos/cursos';
import { GlobalPreferencesVar } from '../../providers/global_var/preferencias';

import { Observable } from 'rxjs/Observable';

import { SetCurso3Page } from '../set-curso3/set-curso3';
import { HelpPage } from '../help/help';


@IonicPage()
@Component({
  selector: 'page-set-curso2',
  templateUrl: 'set-curso2.html',
})
export class SetCurso2Page {

  courses: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider: CursosProvider,
    private providerPreferences: GlobalPreferencesVar,
    private toast: ToastController) {

    this.courses = this.provider.getAll();

  }

  ajuda(){
    this.navCtrl.push(HelpPage);
  }

  goToBack() {
    this.navCtrl.push('SetCursoPage');
  }

  ready1(curso) {
    this.providerPreferences.gravaCurso(curso);
  }

  next() {
    if (this.providerPreferences.myCurso != undefined) {
      this.navCtrl.push('SetCurso3Page')
    } else {
      this.toast.create({ message: 'Por favor, selecione um curso.', duration: 3000 }).present();
    }
  }

}
