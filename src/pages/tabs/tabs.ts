import { Component } from '@angular/core';

import { EventosPage } from '../eventos/eventos';
import { CursosPage } from '../cursos/cursos';
import { LocaisPage } from '../locais/locais';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EventosPage;
  tab2Root = CursosPage;
  tab3Root = LocaisPage;
  tab4Root = InfoPage;

  constructor() {

  }
}
