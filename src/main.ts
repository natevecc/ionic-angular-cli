// import { bootstrap } from '@angular/platform-browser-dynamic';
import { ionicBootstrap } from 'ionic-angular';

import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

ionicBootstrap(AppComponent, [], {
  tabbarPlacement: 'bottom'
});

