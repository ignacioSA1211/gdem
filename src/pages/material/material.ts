import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';

@Component({
  selector: 'page-material',
  templateUrl: 'material.html'
})
export class MaterialPage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }
}
