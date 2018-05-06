import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover'

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

<<<<<<< HEAD
  postList = [];

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public remoteService: RemoteService) {
      this.getPosts();
=======
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  getPosts(){
    this.remoteService.getPosts().subscribe((data)=>{
        this.postList = data;
    });
}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }
}
