import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ProgressbarComponent } from './shared/progressbar/progressbar.component';
import { CardComponent } from './shared/card/card.component';
import { CardtittleComponent } from './shared/card/cardTittle/cardtittle.component';
import { CardbodyaccountComponent } from './shared/card/cardBodyAccount/cardbodyaccount.component';
import { CardbodysituationComponent } from './shared/card/cardBodySituation/cardbodysituation.component';
import { AccountFoundComponent } from './components/account-found/account-found.component';
import { AccountNotFoundComponent } from './components/account-not-found/account-not-found.component';
const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    ProgressbarComponent,
    CardComponent,
    CardtittleComponent,
    CardbodyaccountComponent,
    CardbodysituationComponent,
    AccountFoundComponent,
    AccountNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
