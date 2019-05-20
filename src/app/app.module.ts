import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { ReviewComponent } from './assignment/review/review.component';
import { TitleComponent } from './assignment/title/title.component';
import { ThumbnailComponent } from './assignment/thumbnail/thumbnail.component';
import { DescriptionComponent } from './assignment/description/description.component';
import { DirectiveComponent } from './super-html/directive/directive.component';
import { InbuiltComponent } from './pipes/inbuilt/inbuilt.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';
import { ConsumeparentComponent } from './consume/consumeparent/consumeparent.component';
import { Consumechild1Component } from './consume/consumechild1/consumechild1.component';
import { Consumechild2Component } from './consume/consumechild2/consumechild2.component';
import { ChildComponent } from './consume/child/child.component';
import { NospecComponent } from './delete/nospec/nospec.component';
import { Nospec1Component } from './delete/nospec1/nospec1.component';
import { Nospec2Component } from './delete/nospec2/nospec2.component';
import { Nospec3Component } from './delete/nospec3/nospec3.component';
import { Nospec4Component } from './delete/nospec4/nospec4.component';
import { Nospec5Component } from './delete/nospec5/nospec5.component';
import { Nospec6Component } from './delete/nospec6/nospec6.component';
import { Nospec7Component } from './delete/nospec7/nospec7.component';
import { Nospec8Component } from './delete/nospec8/nospec8.component';
import { Nospec9Component } from './delete/nospec9/nospec9.component';
import { Nospec10Component } from './delete/nospec10/nospec10.component';
import { Flatcomponent1Component } from './delete/componentnotinfolder/flatcomponent1.component';
import { Flatcomponent2Component } from './delete/componentnotinfolder/flatcomponent2/flatcomponent2.component';
import { Flatcomponent3Component } from './delete/componentnotinfolder/flatcomponent3.component';
import { Flatcomponent4Component } from './delete/componentnotinfolder/flatcomponent4.component';
import { Flatcomponent5Component } from './delete/componentnotinfolder/flatcomponent5.component';
import { Component6Component } from './delete/componentnotinfolder/component6/component6.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { AnimateComponent } from './animation/animate/animate.component';
import { AnimationComponent } from './animate/animation/animation.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    ReviewComponent,
    TitleComponent,
    ThumbnailComponent,
    DescriptionComponent,
    DirectiveComponent,
    InbuiltComponent,
    BadrouteComponent,
    ConsumeparentComponent,
    Consumechild1Component,
    Consumechild2Component,
    ChildComponent,
    NospecComponent,
    Nospec1Component,
    Nospec2Component,
    Nospec3Component,
    Nospec4Component,
    Nospec5Component,
    Nospec6Component,
    Nospec7Component,
    Nospec8Component,
    Nospec9Component,
    Nospec10Component,
    Flatcomponent1Component,
    Flatcomponent2Component,
    Flatcomponent3Component,
    Flatcomponent4Component,
    Flatcomponent5Component,
    Component6Component,
    TemplateformComponent,
    ReactiveformComponent,
    AnimateComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'review',
        pathMatch:'full'
      },
      {
        path:'family',
        component:FamilyComponent,
        children:[
                    {
                      path:'',
                      redirectTo:'mother',
                      pathMatch:'full'
                    },
                    {
                       path:'father',
                       component:FatherComponent 
                    },
                    {
                      path:'mother',
                      component:MotherComponent
                    },
                    {
                      path:'daughter',
                      component:DaughterComponent
                    },
                    {
                      path:'son',
                      component:SonComponent
                    }
                 ]
      },
      {
        path:'review',
        component:ReviewComponent
      },
      {
        path:'directive',
        component:DirectiveComponent
      },
      {
        path:'pipe',
        component:InbuiltComponent
      },
      {
        path:'consume',
        component:ConsumeparentComponent,
        children:[
          {
            path:'child1',
            component:Consumechild1Component
          },
          {
            path:'child2',
            component:Consumechild2Component
          }
        ]
      },
      {
        path:'template',
        component:TemplateformComponent
      },
      {
        path:'reactive',
        component:ReactiveformComponent
      },
      {
        path:'animate',
        component:AnimationComponent
      },
      {
        path:'**',
        component:BadrouteComponent
      }

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
