import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { DetailOneComponent } from './detail-one/detail-one.component';
import { DetailTwoComponent } from './detail-two/detail-two.component';
import { DetailThreeComponent } from './detail-three/detail-three.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'one',
    pathMatch: 'full'
  },
  {
    path: 'one',
    component: OneComponent,
    // data: {
    //   breadcrumb: '这是一个面包屑的字段'
    // }
  },
  {
    path: 'two',
    component: TwoComponent,
    data: {
      breadcrumb: '展示走马灯效果'
    }
  },
  {
    path: 'three',
    component: ThreeComponent
  },
  {
    path: 'one/1',
    component: DetailOneComponent,
    data: {
      breadcrumb: '包小图1简介'
    }
  },
  {
    path: 'one/2',
    component: DetailTwoComponent,
    data: {
      breadcrumb: '包小图2简介'
    }
  },
  {
    path: 'one/3',
    component: DetailThreeComponent,
    data: {
      breadcrumb: '包小图3简介'
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, NgZorroAntdModule],
  declarations: [
    OneComponent,
    TwoComponent,
    ThreeComponent,
    NotFoundComponent,
    ListdetailComponent
  ],
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ],
  exports: [RouterModule, BrowserModule, CommonModule, NgZorroAntdModule]
})
export class AppRoutingModule { }
