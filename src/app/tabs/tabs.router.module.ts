import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page'; 
import { NgModule } from '@angular/core';
import { HomePage } from '../home/home.page';
import { AboutusPage } from '../aboutus/aboutus.page';
import { ContactPage } from '../contact/contact.page';


const routes: Routes = [
    {
        path:'tabs', //default 
        component: TabsPage, //we eventualy upload on localhost/tabs/{profil/uploade}
        children:[
            {
                path:'',
                redirectTo:'/tabs/(home:home)',
                pathMatch:'full',
            },
            {
                path:'home',
                outlet:'home',
                component:HomePage
            },
            {
                path:'aboutus',
                outlet:'aboutus',
                component:AboutusPage
            },
            {
                path:'contact',
                outlet:'contact',
                component:ContactPage
            },
        { path: 'visualiser', loadChildren: '../visualiser/visualiser.module#VisualiserPageModule' },
        { path: 'historique', loadChildren: '../historique/historique.module#HistoriquePageModule' },
        { path: 'profil', loadChildren: '../profil/profil.module#ProfilPageModule' },
        { path: 'aboutus', loadChildren: '../aboutus/aboutus.module#AboutusPageModule' },
        { path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule' },
    ]
    },
    {
        path:'',
        redirectTo:'/tabs/(home:home)',
        pathMatch:'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class TabsRoutingModule { }