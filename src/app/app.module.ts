import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailOneComponent } from './detail-one/detail-one.component';
import { DetailTwoComponent } from './detail-two/detail-two.component';
import { DetailThreeComponent } from './detail-three/detail-three.component';
// import { ListdetailComponent } from './listdetail/listdetail.component';
// import { OneComponent } from './one/one.component';
// import { TwoComponent } from './two/two.component';
// import { ThreeComponent } from './three/three.component';
// import { NotFoundComponent } from './not-found/not-found.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ParamsComponent } from './params/params.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    DetailOneComponent,
    DetailTwoComponent,
    DetailThreeComponent,
    ParamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
