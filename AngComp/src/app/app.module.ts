import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { ProductComponent } from './product/product.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { RobertComponent } from './robert/robert.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { SortPipePipe } from './sort-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { CalculatorComponent } from './calculator/calculator.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TempDrivenComponent } from './temp-driven/temp-driven.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { CoursesortPipe } from './pipes/coursesort.pipe';
import { CoursesearchPipe } from './pipes/coursesearch.pipe';
import {TechRoutingModule} from './tech-routing/tech-routing.module';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Employee1Component } from './employee1/employee1.component';
import { Employee2Component } from './employee2/employee2.component';
import { CustomSearchPipe } from './pipes/custom-search.pipe';
import { ColorDirectiveDirective } from './color-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    StructDirectivesComponent,
    ProductComponent,
    MyUpperCasePipe,
    RobertComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    EventBindingComponent,
    SortPipePipe,
    ChildComponent,
    ParentComponent,
    CalculatorComponent,
    FirstComponent,
    SecondComponent,
    TempDrivenComponent,
    JavaComponent,
    WebComponent,
    CoursesortPipe,
    CoursesearchPipe,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    Employee1Component,
    Employee2Component,
    CustomSearchPipe,
    ColorDirectiveDirective,

    

  ],
  imports: [
    BrowserModule,FormsModule,  HttpClientModule,Ng2SearchPipeModule,TechRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
