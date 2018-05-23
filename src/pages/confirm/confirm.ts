import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

import { GlobalPreferencesVar } from '../../providers/global_var/preferencias';
import { OfflineData } from '../../providers/global_var/offline_data';

import { Observable } from 'rxjs/Observable';

import { TabsPage } from '../../pages/tabs/tabs';
import { SetCursoPage } from '../../pages/set-curso/set-curso';
import { EventosPage } from '../eventos/eventos';

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private toast: ToastController,
    private providerPreferences: GlobalPreferencesVar,
    private providerOffline: OfflineData) {
  }

  Corrige() {
    this.navCtrl.push(SetCursoPage);
  }

  next() {
    if(this.providerPreferences.myTurno != '0' && this.providerPreferences.myCurso != '0' && this.providerPreferences.mySemestre != '0'){
    this.providerOffline.Status = TabsPage;
    this.navCtrl.push(TabsPage)
    .then(()=>{
      this.viewCtrl.dismiss();
    });
  }else {
    this.toast.create({ message: 'Todos os dados são obrigatórios. Clique em "Voltar e corrigir" e tente novamente.', duration: 3000 }).present();
  }
  }


}
