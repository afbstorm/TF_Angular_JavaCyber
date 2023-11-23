import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterPipe } from '../demo/letter-to-number.pipe';



@NgModule({
  declarations: [LetterPipe],
  imports: [
    CommonModule
  ],
  exports: [LetterPipe]
})
export class SharedModule { }
