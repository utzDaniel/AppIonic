import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { ModalPageModule } from '../modal/modal.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    SharedDirectivesModule,
    ModalPageModule,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule { }
