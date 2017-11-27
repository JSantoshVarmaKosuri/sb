import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';

import { SbMainModule } from './app/SBMainModule/sb.main.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SbMainModule)
  .catch(err => console.log(err));
