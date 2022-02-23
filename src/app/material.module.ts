import { NgModule } from '@angular/core';
import { MdcButtonModule } from '@angular-mdc/web/button';
import { MdcIconModule } from '@angular-mdc/web/icon';
import { MdcFormFieldModule } from '@angular-mdc/web/form-field';
import { MdcTextFieldModule } from '@angular-mdc/web/textfield';
import { MdcTypographyModule } from '@angular-mdc/web/typography';
import { MdcCardModule } from '@angular-mdc/web/card';
import { MdcIconButtonModule } from '@angular-mdc/web/icon-button';
import { MdcSnackbarModule } from '@angular-mdc/web/snackbar';
import { MdcElevationModule } from '@angular-mdc/web/elevation';
import { MdcRippleModule } from '@angular-mdc/web/ripple';

@NgModule({
  exports: [
    MdcButtonModule,
    MdcIconModule,
    MdcFormFieldModule,
    MdcTextFieldModule,
    MdcTypographyModule,
    MdcCardModule,
    MdcIconButtonModule,
    MdcSnackbarModule,
    MdcElevationModule,
    MdcRippleModule
  ]
})
export class MaterialModule { }