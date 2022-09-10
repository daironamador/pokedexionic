import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { FeetPipe } from 'src/app/pipes/metrics/feet.pipe';
import { PundPipe } from 'src/app/pipes/metrics/pund.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
  ],
  declarations: [DetailPage,
    FeetPipe, PundPipe]
})
export class DetailPageModule {}
