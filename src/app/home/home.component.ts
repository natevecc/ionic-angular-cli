import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  constructor(private navController: NavController) {}
}
