import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ReportComponent } from './report/report.component';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadComponent } from './load/load.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchfilterPipe } from './pipe/searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    CreateComponent,
    HeaderComponent,
    HomeComponent,
    LoadComponent,
    SearchfilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
   FormlyModule.forRoot(),
   FormlyBootstrapModule,
   HttpClientModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
