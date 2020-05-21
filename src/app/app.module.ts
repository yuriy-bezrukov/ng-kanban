import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { ColumnComponent } from './column/column.component';
import { CardComponent } from './card/card.component';
// import { LoginModule } from './login/login.module';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { AddCardComponent } from './add-card/add-card.component';
import { CadrListService } from './cadr-list.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCardComponent } from './update-card/update-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    CardComponent,
    AddCardComponent,
    UpdateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, // two-way binding for Input -> [(ngModel)]
    FormsModule, // two-way binding for Input -> [(ngModel)]
  ],
  providers: [
    CadrListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
