import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:string;
  pass:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  entrar(){
    let a;
    let context = this;

    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() { 
      if (this.readyState == 4 && this.status == 200) {  
        a = JSON.parse(this.responseText);
        if(a[0].IDLogin == "true"){
          context.navCtrl.setRoot(TabsPage);
        }
      } 
    }; 
    xhttp.open("GET", "http://localhost/GDEM/servicios/app/index.php/conexion", true); 
    xhttp.send();  
  }

}
