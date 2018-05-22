import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { CursosProvider } from '../../providers/cursos/cursos';
import { GlobalPreferencesVar } from '../../providers/global_var/preferencias';

import { Observable } from 'rxjs/Observable';

import { CursosPage } from '../cursos/cursos';

@IonicPage()
@Component({
  selector: 'page-cmore',
  templateUrl: 'cmore.html',
})
export class CmorePage {

  courses: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private provider: CursosProvider,
    private providerPreferences: GlobalPreferencesVar) {
  
      this.courses = this.provider.getAll();

    }

  goToHome(){
    
    this.providerPreferences.moreTurno = '0';
    this.providerPreferences.moreCurso = '0';
    this.providerPreferences.moreSemestre = '0';

    this.navCtrl.push(CursosPage)
    .then(()=>{
      this.viewCtrl.dismiss();
    });
  }

}
