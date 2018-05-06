import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover'
import { RemoteService } from '../../providers/remote-service/remote-service'

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  postList = [];

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public remoteService: RemoteService) {
      this.getPosts();
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
