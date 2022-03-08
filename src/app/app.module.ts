import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { QuoteComponent } from './quote/quote.component';
import { ImageLinkComponent } from './image-link/image-link.component';
import { LogsPageComponent } from './logs-page/logs-page.component';
import { WordleComponent } from './wordle/wordle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    QuoteComponent,
    ImageLinkComponent,
    LogsPageComponent,
    WordleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
