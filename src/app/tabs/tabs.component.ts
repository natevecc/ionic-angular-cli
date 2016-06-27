import { Component } from '@angular/core'

import { HomeComponent } from '../home/home.component'
import { AboutComponent } from '../about/about.component'
import { ContactComponent } from '../contact/contact.component'

@Component({
  moduleId: module.id,
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {
  private tab1Root: any
  private tab2Root: any
  private tab3Root: any

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomeComponent
    this.tab2Root = AboutComponent
    this.tab3Root = ContactComponent
  }
}
