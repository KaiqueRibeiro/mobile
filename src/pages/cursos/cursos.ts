import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GlobalPreferencesVar } from '../../providers/global_var/preferencias';
import { CursosProvider } from '../../providers/cursos/cursos';

import { Observable } from 'rxjs/Observable';

import { CinfoPage } from '../cinfo/cinfo';

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {

  courses: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private providerPreferences: GlobalPreferencesVar,
    private provider: CursosProvider) {

      this.courses = this.provider.getAll();
  }

  selOutro(){
    this.navCtrl.push(CinfoPage);
    
    this.providerPreferences.moreTurno = '0';
    this.providerPreferences.moreCurso = '0';
    this.providerPreferences.moreSemestre = '0';
  }

}
