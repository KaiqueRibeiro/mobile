import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocaisProvider } from '../../providers/locais/locais';
import { GlobalLocalVar } from '../../providers/global_var/local';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-linfo',
  templateUrl: 'linfo.html',
})
export class LinfoPage {

  places: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider: LocaisProvider,
    private providerLocal: GlobalLocalVar ) {

  }

}
