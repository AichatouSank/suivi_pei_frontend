import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { StatsPrevisionComponent } from './components/stats-prevision/stats-prevision.component';
import { StatsAcquisitionComponent } from './components/stats-acquisition/stats-acquisition.component';
import { StatsStructureComponent } from './components/stats-structure/stats-structure.component';
import { StatsEquipementAcquisComponent } from './components/stats-equipement-acquis/stats-equipement-acquis.component';
import { StatsUtilisateurComponent } from './components/stats-utilisateur/stats-utilisateur.component';
import { StatsCoutTPrevisionComponent } from './components/stats-cout-tprevision/stats-cout-tprevision.component';
import { StatsCoutTAcquisitionComponent } from './components/stats-cout-tacquisition/stats-cout-tacquisition.component';
import { StatsEquipementObsoletesComponent } from './components/stats-equipement-obsoletes/stats-equipement-obsoletes.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrevisionComponent } from './prevision/prevision/prevision.component';
import { DialogModule } from 'primeng/dialog'
import { AddPrevisionComponent } from './prevision/add-prevision/add-prevision.component';
import { RegionComponent } from './region/region/region.component';
import { AddRegionComponent } from './region/add-region/add-region.component';
import { StructureComponent } from './structure/structure/structure.component';
import { AddStructureComponent } from './structure/add-structure/add-structure.component';
import { UtilisateurComponent } from './utilisateur/utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './utilisateur/add-utilisateur/add-utilisateur.component';
import { ObsolescenceComponent } from './obsolescence/obsolescence/obsolescence.component';
import { AddObsolescenceComponent } from './obsolescence/add-obsolescence/add-obsolescence.component';
import { EquipementInformatiqueComponent } from './equipement-informatique/equipement-informatique/equipement-informatique.component';
import { AddEquipementComponent } from './equipement-informatique/add-equipement/add-equipement.component';
import { AcquisitionComponent } from './acquisition/acquisition/acquisition.component';
import { AddAcquisitionComponent } from './acquisition/add-acquisition/add-acquisition.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
       StatsPrevisionComponent,
       StatsAcquisitionComponent,
       StatsStructureComponent,
       StatsEquipementAcquisComponent,
       StatsUtilisateurComponent,
       StatsCoutTPrevisionComponent,
       StatsCoutTAcquisitionComponent,
       StatsEquipementObsoletesComponent,
       HeaderComponent,
       PrevisionComponent,
       AddPrevisionComponent,
       RegionComponent,
       AddRegionComponent,
       StructureComponent,
       AddStructureComponent,
       UtilisateurComponent,
       AddUtilisateurComponent,
       ObsolescenceComponent,
       AddObsolescenceComponent,
       EquipementInformatiqueComponent,
       AddEquipementComponent,
       AcquisitionComponent,
       AddAcquisitionComponent

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule,
    ReactiveFormsModule,
  ],
  exports:[
    HeaderComponent,
  ]
})
export class SharedModule { }
