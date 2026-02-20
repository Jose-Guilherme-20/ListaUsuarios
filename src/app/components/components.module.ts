import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { UserAddComponent } from './user-add/user-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAddButtonComponent } from './user-add-button/user-add-button.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UserListComponent,
    UserAddComponent,
    UserAddButtonComponent,
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    CommonModule,
    PipesModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    UserListComponent,
    UserAddComponent,
    UserAddButtonComponent,
  ],
})
export class ComponentsModule {}
