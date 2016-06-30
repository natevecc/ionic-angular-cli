import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
  moduleId: module.id,
  templateUrl: 'about.component.html'
})
export class AboutComponent {
  constructor(private navController: NavController) {}
}
