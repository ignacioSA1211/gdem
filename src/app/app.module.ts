import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { MapsPage } from '../pages/maps/maps';
import { MaterialPage } from '../pages/material/material';
import { InfoPage } from '../pages/info/info';
import { CalendaryPage } from '../pages/calendary/calendary';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopoverComponent } from '../components/popover/popover';
import { RemoteService } from '../providers/remote-service/remote-service';


@NgModule({
  declarations: [
    MyApp,
    CalendaryPage,
    InfoPage,
    MaterialPage,
    MapsPage,
    TabsPage,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendaryPage,
    InfoPage,
    MaterialPage,
    MapsPage,
    TabsPage,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteService
  ]
})
export class AppModule {}
