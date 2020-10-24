import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
const myModules = [
  MatCardModule,
  MatButtonModule,
];
@NgModule({
  imports: [...myModules],
  exports: [...myModules],
})
export class MaterialModule {}
