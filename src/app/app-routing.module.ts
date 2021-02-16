import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { BackpowerComponent } from './modules/backpower/backpower.component';
import { BrokersureComponent } from './modules/brokersure/brokersure.component';
import { BsysintegrateComponent } from './modules/bsysintegrate/bsysintegrate.component';
import { BusintelComponent } from './modules/busintel/busintel.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { CorebankingsysComponent } from './modules/corebankingsys/corebankingsys.component';
import { DigitisationComponent } from './modules/digitisation/digitisation.component';
import { FinstarComponent } from './modules/finstar/finstar.component';
import { HomeComponent } from './modules/home/home.component';
import { InsfrastructureComponent } from './modules/insfrastructure/insfrastructure.component';
import { ItConsultancyComponent } from './modules/it-consultancy/it-consultancy.component';
import { Ms365packComponent } from './modules/ms365pack/ms365pack.component';
import { MsazureComponent } from './modules/msazure/msazure.component';
import { MsbiComponent } from './modules/msbi/msbi.component';
import { MsdynamicsComponent } from './modules/msdynamics/msdynamics.component';
import { MsosComponent } from './modules/msos/msos.component';
import { OfficeprodComponent } from './modules/officeprod/officeprod.component';
import { PartnersComponent } from './modules/partners/partners.component';
import { ReturnsubsolComponent } from './modules/returnsubsol/returnsubsol.component';


const routes: Routes = [
  {path:'', component:DefaultComponent,
children:[
  {path:'',component:HomeComponent},
  {path:'about-us', component:AboutusComponent},
  {path:'it-consultancy', component: ItConsultancyComponent},
  {path:'partners', component: PartnersComponent},
  {path:'brokersure', component:BrokersureComponent},
  {path:'return-submission-solution', component:ReturnsubsolComponent},
  {path:'ms-365-packs', component:Ms365packComponent},
  {path:'ms-dynamics', component:MsdynamicsComponent},
  {path:'ms-azure', component:MsazureComponent},
  {path:'business-intelligence', component:BusintelComponent},
  {path:'office-productivity', component: OfficeprodComponent},
  {path:'infrastructure', component: InsfrastructureComponent},
  {path:'finstar', component:FinstarComponent},
  {path:'ms-power-BI', component:MsbiComponent},
  {path:'ms-operating-system', component:MsosComponent},
  {path:'backpower', component:BackpowerComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'business-sys-integration', component:BsysintegrateComponent},
  {path:'digisation', component:DigitisationComponent},
  {path:'corebanking-sys', component:CorebankingsysComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
