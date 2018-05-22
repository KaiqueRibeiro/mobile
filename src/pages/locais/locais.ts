import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocaisProvider } from '../../providers/locais/locais';
import { GlobalLocalVar } from '../../providers/global_var/local';

import { LinfoPage } from '../linfo/linfo';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-locais',
  templateUrl: 'locais.html',
})
export class LocaisPage {

  places: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider: LocaisProvider,
    private providerLocal: GlobalLocalVar) {

    this.places = this.provider.getAll();
  }
  
  verLocal(ambiente, localizacao, descricao, horario) {
    this.providerLocal.exibeAmbiente(ambiente) 
    this.providerLocal.exibeLocalizacao(localizacao)
    this.providerLocal.exibeDescricao(descricao)
    this.providerLocal.exibeHorario(horario);   
    this.navCtrl.push('LinfoPage');
  }

}
