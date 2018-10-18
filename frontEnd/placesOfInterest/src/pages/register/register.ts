import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
// import { HomePage } from '../home/home';
// import { TabsPage } from '../../pages/tabs/tabs';
import { LoginPage } from '../../pages/login/login'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _app: AppProvider) {
  }
  user: any = {
    name:"",
    last:"",
    email:"",
    password:""
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onRegister(){
    console.log("register",this.user)
    this._app.register(this.user)
      .subscribe((response: any) => {
        console.log("hello")
      window.sessionStorage.setItem('token', response.token);
      window.sessionStorage.setItem('userId', response.UserId);
      console.log(" register works",response);
      this.navCtrl.setRoot(LoginPage);
    },
    err=>{ 
      console.log(err.message);    
        })
}


}