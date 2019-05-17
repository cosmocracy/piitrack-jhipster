import { NgModule } from '@angular/core';

import { PiitrackSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [PiitrackSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [PiitrackSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PiitrackSharedCommonModule {}
