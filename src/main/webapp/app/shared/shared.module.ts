import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PiitrackSharedLibsModule, PiitrackSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PiitrackSharedLibsModule, PiitrackSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PiitrackSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PiitrackSharedModule {
  static forRoot() {
    return {
      ngModule: PiitrackSharedModule
    };
  }
}
