import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

import { StartPage } from '../../pages/start/start';
import { TabsPage } from '../../pages/tabs/tabs';

import 'rxjs/add/operator/map';
import { Tabs } from 'ionic-angular';

@Injectable()
export class OfflineData {

    //Status: string = 'StartPage';
    Status: any = StartPage;

    constructor(private storage: Storage,
        private datepipe: DatePipe) {
    }

    public changeVar() {
        this.Status = TabsPage;
    }

}