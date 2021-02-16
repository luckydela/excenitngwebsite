import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from 'src/app/modules/aboutus/aboutus.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItConsultancyComponent } from 'src/app/modules/it-consultancy/it-consultancy.component';
import { PartnersComponent } from 'src/app/modules/partners/partners.component';
import { BrokersureComponent } from 'src/app/modules/brokersure/brokersure.component';
import { ReturnsubsolComponent } from 'src/app/modules/returnsubsol/returnsubsol.component';
import { Ms365packComponent } from 'src/app/modules/ms365pack/ms365pack.component';
import { MsazureComponent } from 'src/app/modules/msazure/msazure.component';
import { MsdynamicsComponent } from 'src/app/modules/msdynamics/msdynamics.component';
import { BusintelComponent } from 'src/app/modules/busintel/busintel.component';
import { OfficeprodComponent } from 'src/app/modules/officeprod/officeprod.component';
import { InsfrastructureComponent } from 'src/app/modules/insfrastructure/insfrastructure.component';
import { FinstarComponent } from 'src/app/modules/finstar/finstar.component';
import { MsbiComponent } from 'src/app/modules/msbi/msbi.component';
import { BackpowerComponent } from 'src/app/modules/backpower/backpower.component';
import { MsosComponent } from 'src/app/modules/msos/msos.component';
import { ContactUsComponent } from 'src/app/modules/contact-us/contact-us.component';
import { BsysintegrateComponent } from 'src/app/modules/bsysintegrate/bsysintegrate.component';
import { DigitisationComponent } from 'src/app/modules/digitisation/digitisation.component';
import { CorebankingsysComponent } from 'src/app/modules/corebankingsys/corebankingsys.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutusComponent,
    ItConsultancyComponent,
    PartnersComponent,
    BrokersureComponent,
    ReturnsubsolComponent,
    Ms365packComponent,
    MsazureComponent,
    MsdynamicsComponent,
    BusintelComponent,
    OfficeprodComponent,
    InsfrastructureComponent,
    FinstarComponent,
    MsbiComponent,
    BackpowerComponent,
    MsosComponent,
    ContactUsComponent,
    BsysintegrateComponent,
    DigitisationComponent,
    CorebankingsysComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
