import { Component } from '@angular/core';

import { MapsPage } from '../maps/maps';
import { MaterialPage } from '../material/material';
import { InfoPage } from '../info/info';
import { CalendaryPage } from '../calendary/calendary';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  infoTab = InfoPage;
  mapsTab = MapsPage;
  materialTab = MaterialPage;
  calendaryTab = CalendaryPage;

  constructor() {

  }
}
