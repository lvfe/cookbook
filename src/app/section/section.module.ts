import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { GridsterModule } from 'angular-gridster2';
import { HttpClientModule } from '@angular/common/http';
import { SectionService } from './section.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    GridsterModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: SectionComponent }])
  ],
  providers: [SectionService],
  declarations: [SectionComponent]
})
export class SectionModule {}
