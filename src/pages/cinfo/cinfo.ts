import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

import { CursosProvider } from '../../providers/cursos/cursos';
import { GlobalPreferencesVar } from '../../providers/global_var/preferencias';

import { Observable } from 'rxjs/Observable';

import { CmorePage } from '../cmore/cmore';
import { CursosPage } from '../cursos/cursos';

@IonicPage()
@Component({
  selector: 'page-cinfo',
  templateUrl: 'cinfo.html',
})
export class CinfoPage {

  courses: Observable<any>;
  isEnable1: string;
  isEnable2: string;
  isEnable3: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private toast: ToastController,
    private provider: CursosProvider,
    private providerPreferences: GlobalPreferencesVar) {

    this.courses = this.provider.getAll();
    this.isEnable1 = 'false';
    this.isEnable2 = 'false';
    this.isEnable3 = 'false';
  }

  proc1(turno) {
    this.providerPreferences.gravamoreTurno(turno);
    this.isEnable1 = 'true';
  }

  proc2(curso) {
    this.providerPreferences.gravamoreCurso(curso);
    this.isEnable2 = 'true';
  }
  
  proc3(semestre) {
    this.providerPreferences.gravamoreSemestre(semestre);
    this.isEnable3 = 'true';
  }

  corrige(){
    
    this.navCtrl.push(CinfoPage).then(() => {
      this.viewCtrl.dismiss();
    }) ;
    
    this.providerPreferences.moreTurno = '0';
    this.providerPreferences.moreCurso = '0';
    this.providerPreferences.moreSemestre = '0';

  }

  toHome(){

    this.viewCtrl.dismiss();

    this.providerPreferences.moreTurno = '0';
    this.providerPreferences.moreCurso = '0';
    this.providerPreferences.moreSemestre = '0';
  }

  next() {
    if (this.providerPreferences.moreTurno != '0' && this.providerPreferences.moreCurso != '0' && this.providerPreferences.moreSemestre != '0') {
      this.navCtrl.push(CmorePage)
    } else {
      this.toast.create({ message: 'Por favor, preencha todos os campos acima.', duration: 3000 }).present();
    }
  }
}
