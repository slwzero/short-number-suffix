import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShortNumberSuffixPipe } from './pipes/short-number-suffix.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortNumberSuffixPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
