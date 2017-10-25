import { ServiceModule } from './service/service.module';
import { TableModule } from './table/table.module';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { IUser } from './dto/user';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    TableModule,
    AppRoutingModule,
    ServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
