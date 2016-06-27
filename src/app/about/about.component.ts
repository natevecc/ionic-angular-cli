import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
  moduleId: module.id,
  templateUrl: 'tabs.component.html'
})
export class AboutComponent {
  constructor(private navController: NavController) {}
}
