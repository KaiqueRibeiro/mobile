/*  INSTALAÇÃO DOS MÓDULOS DO FIREBASE
    npm install firebase angularfire2 --save
*/

//  IMPRTAÇÕES PADRÕES DO SISTEMA
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//  IMPORTAÇÃO DAS PÁGINAS

import { HelpPage } from '../pages/help/help';
import { HelpPageModule } from '../pages/help/help.module';

import { EventosPage } from '../pages/eventos/eventos';
import { EventosPageModule } from '../pages/eventos/eventos.module';

import { CursosPage } from '../pages/cursos/cursos';
import { CinfoPage } from '../pages/cinfo/cinfo';
import { CinfoPageModule } from '../pages/cinfo/cinfo.module';
import { CmorePage } from '../pages/cmore/cmore';

import { LocaisPage } from '../pages/locais/locais';
import { LocaisPageModule } from '../pages/locais/locais.module';
import { LinfoPage } from '../pages/linfo/linfo';
import { LinfoPageModule } from '../pages/linfo/linfo.module';

import { InfoPage } from '../pages/info/info';

//  IMPORTAÇÃO DA PÁGINA DE PREFERÊNCIAS
import { StartPage } from '../pages/start/start';
import { StartPageModule } from '../pages/start/start.module';

//  IMPORTAÇÃO DA PÁGINA DE ESCOLHA DE CURSO
import { SetCursoPage } from '../pages/set-curso/set-curso';
import { SetCursoPageModule } from '../pages/set-curso/set-curso.module';

import { SetCurso2Page } from '../pages/set-curso2/set-curso2';
import { SetCurso2PageModule } from '../pages/set-curso2/set-curso2.module';

import { SetCurso3Page } from '../pages/set-curso3/set-curso3';
import { SetCurso3PageModule } from '../pages/set-curso3/set-curso3.module';

//  IMPORTAÇÃO DA PÁGINA DE CONFIRMAÇÃO
import { ConfirmPage } from '../pages/confirm/confirm';

//  IMPORTAÇÃO DA BARRA INFERIOR
import { TabsPage } from '../pages/tabs/tabs';

//  IMPORTAÇÃO DA SPLASH SCREEN E DA STATUS BAR
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//  IMPORTAÇÃO DO MÓDULO DO BANCO DE DADOS
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

//  IDENTIFICAÇÃO EXCLUSIVA DO BANCO DE DADOS
const firebaseConfig = {
  apiKey: "AIzaSyDhqijPVnyH4dHbP8YDKC4ZOM4L9_juCNk",
    authDomain: "uniinfo-database-full.firebaseapp.com",
    databaseURL: "https://uniinfo-database-full.firebaseio.com",
    projectId: "uniinfo-database-full",
    storageBucket: "uniinfo-database-full.appspot.com",
    messagingSenderId: "613710825075"
};

//  IMPORTAÇÃO DO PROVIDER DE DADOS OFFLINE
import { OfflineData } from '../providers/global_var/offline_data';
import { DatePipe } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';

//  IMPORTAÇÃO DOS PROVIDERS DO BANCO DE DADOS
import { CursosProvider } from '../providers/cursos/cursos';
import { EventosProvider } from '../providers/eventos/eventos';
import { LocaisProvider } from '../providers/locais/locais';

//  IMPRTAÇÃO DOS PROVIDER DE VARIÁVEIS GLOBAIS
import { GlobalLocalVar } from '../providers/global_var/local';
import { GlobalCursoVar } from '../providers/global_var/curso';

//  IMPORTAÇÃO DO PROVIDER DE VARIÁVEIS GLOBAIS DE PREFERÊNCIAS
import { GlobalPreferencesVar } from '../providers/global_var/preferencias';
import { ConfirmPageModule } from '../pages/confirm/confirm.module';

//  DECLARAÇÃO DOS RECURSOS E PÁGINAS
@NgModule({
  declarations: [
    MyApp,

    InfoPage,
    CursosPage,
    CmorePage,

    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: ''
        }
      }
    }),
    IonicStorageModule.forRoot(),
    //  PÁGINAS ACESSADAS POR MAIS DE UM EVENTO

    HelpPageModule,

    CinfoPageModule,
    LinfoPageModule,

    StartPageModule,
    SetCursoPageModule,
    SetCurso2PageModule,
    SetCurso3PageModule,
    ConfirmPageModule,
    EventosPageModule,
    LocaisPageModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    TabsPage,

    HelpPage,

    StartPage,
    SetCursoPage,
    SetCurso2Page,
    SetCurso3Page,
    ConfirmPage,

    EventosPage,

    CursosPage,
    CinfoPage,
    CmorePage,
    
    InfoPage,
    LinfoPage
  ],

  //  DECLARAÇÃO DOS PROVIDERS
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    CursosProvider,
    EventosProvider,
    LocaisProvider,

    GlobalLocalVar,
    GlobalCursoVar,
    GlobalPreferencesVar,

    OfflineData,
    DatePipe
  ]
})
export class AppModule {

}
