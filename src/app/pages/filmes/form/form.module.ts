import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class FormModule { }
