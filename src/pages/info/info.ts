import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
<<<<<<< HEAD
import { PopoverComponent } from '../../components/popover/popover'
import { RemoteService } from '../../providers/remote-service/remote-service'
=======
import { PopoverComponent } from '../../components/popover/popover';

>>>>>>> funcionando

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
    // http://localhost/conexiondb/index.php/conexion
    
  }

  ionViewDidLoad(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("demo").innerHTML =
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "http://localhost/conexiondb/index.php/conexion", true);
    xhttp.send();
    /*
    this.http.get('https://jsonplaceholder.typicode.com/posts', {}, {'Content-Type': 'application/json'})
    .then(data => {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
    })
    .catch(error => {
      console.log(error);
    });
    */
>>>>>>> funcionando
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