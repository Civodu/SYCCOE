import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsRoutingModule } from './tabs.router.module'
import { TabsComponent } from './tabs.component'
import { AboutusPageModule } from '../aboutus/aboutus.module';
import { ContactPageModule } from '../contact/contact.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    TabsRoutingModule,
    AboutusPageModule,
    ContactPageModule,
    
  ],
  declarations: [TabsPage,TabsComponent]
})
export class TabsPageModule {}
