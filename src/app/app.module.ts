import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import{AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDQ2fuAdXOQg5Nj-CZ4UrliKof8BNcSMVI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
