import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HealthcarePage } from '../healthcare/hc';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HealthcarePage;
  tab2Root = AboutPage;

  constructor() {

  }
}
