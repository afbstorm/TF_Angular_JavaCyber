import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterPipe } from '../demo/letter-to-number.pipe';
import { AddEuroSymbolPipe } from '../add-euro-symbol.pipe';



@NgModule({
  declarations: [LetterPipe, AddEuroSymbolPipe],
  imports: [
    CommonModule
  ],
  exports: [LetterPipe, AddEuroSymbolPipe]
})
export class SharedModule { }
