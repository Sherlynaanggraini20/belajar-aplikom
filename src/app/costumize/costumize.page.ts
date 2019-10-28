import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'costumize.page.html',
  styleUrls: ['costumize.page.scss']
  
})
export class CostumizePage {
  //public rice: string;
  //public warteg: string;
  public _dataK: any={};
  constructor(public loadingCtrl: LoadingController) { }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      message: "Please wait...",
      duration: 3000
    });
   
}
}


