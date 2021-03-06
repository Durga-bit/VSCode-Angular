import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  {path:'web', component:WebComponent },
  {path:'java', component:JavaComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)

  ],
  exports:[RouterModule]

})
export class TechRoutingModule { }
export const routingComponents = [WebComponent,JavaComponent]