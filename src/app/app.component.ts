import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from 'ionic-native'

import { TabsComponent } from './tabs/tabs.component'

@Component({
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  rootPage: any

  constructor(private platform: Platform) {
    this.rootPage = TabsComponent

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault()
    })
  }
}
