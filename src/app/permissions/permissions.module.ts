import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatCheckboxModule} from '@angular/material/checkbox';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PermissionsRoutingModule } from './permissions-routing.module';

import { AddGroupsComponent } from './pages/add-groups/add-groups.component';
import { PermissionsComponent } from './pages/permissions.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { PermissionManagementComponent } from './pages/permission-management/permission-management.component';


@NgModule({
  declarations: [AddGroupsComponent, PermissionsComponent, PermissionManagementComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule,
    PermissionsRoutingModule,
    MatTableModule
  ]
})
export class PermissionsModule { }
