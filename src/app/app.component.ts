import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GlobalPreferencesVar } from '../providers/global_var/preferencias';
import { OfflineData } from '../providers/global_var/offline_data';

import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';

@Component({
  templateUrl: 'app.html'
})
//DEFINE A PÁGINA DE ROOT
export class MyApp {

  rootPage: any;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private providerPreferences: GlobalPreferencesVar,
    private offlineProvider: OfflineData) {

    this.rootPage = this.offlineProvider.Status;

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
