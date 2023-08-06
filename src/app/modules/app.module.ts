import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../shared/app-routing.module';
import { AppComponent } from '../components/app.component';
import { LoginComponent } from '../components/login.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../components/home.component';
import {MatTabsModule} from '@angular/material/tabs';

import { ListaConcorrentiComponent } from '../components/lista-concorrenti.component';
import { ConcorrentiComponent } from '../components/concorrenti.component';
import { ConcorrenteComponent } from '../components/concorrente.component';
import { ConcorrenteService } from '../services/concorrente.service';
import { AuthGuard } from '../auth.guard';

const modules = [
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
	  MatTabsModule,

	  HttpClientModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListaConcorrentiComponent,
    ConcorrentiComponent,
    ConcorrenteComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ...modules,
  ],

  exports: [...modules],
  
  providers: [ConcorrenteService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
