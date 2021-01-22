import { CommentPagePage } from './comment-page/comment-page.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlocPagePageRoutingModule } from './bloc-page-routing.module';

import { BlocPagePage } from './bloc-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlocPagePageRoutingModule
  ],
  declarations: [BlocPagePage,CommentPagePage]
})
export class BlocPagePageModule {}
