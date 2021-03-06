import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelInterceptor } from './shared/interceptors/marvel.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterPageComponent } from './characters/character-page/character-page.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicPageComponent } from './comics/comic-page/comic-page.component';
import { ListItemCardComponent } from './shared/components/list-item-card/list-item-card.component';
import { HomeOptionCardComponent } from './home/home-option-card/home-option-card.component';
import { EventsComponent } from './events/events.component';
import { EventsPageComponent } from './events/events-page/events-page.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { SearchComponent } from './shared/components/search/search.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeBr, 'pt_BR');
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    CharactersComponent,
    CharacterPageComponent,
    ComicsComponent,
    ComicPageComponent,
    ListItemCardComponent,
    HomeOptionCardComponent,
    EventsComponent,
    EventsPageComponent,
    LoadingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MarvelInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt_BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
