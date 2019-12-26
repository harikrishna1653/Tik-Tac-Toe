import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSnackBarModule } from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
// Angular Material

// import {
//   MatInputModule,
//   MatFormFieldModule,
//   MatButtonModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatCardModule,
//   MatSelectModule,
//   MatListModule,
//   MatSidenavModule,
//   MatGridListModule,
//   MatCheckboxModule
// } from '@angular/material';

// const materialModules = [  
//   MatInputModule,
//   MatFormFieldModule,
//   MatButtonModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatIconModule,
//   MatCardModule,
//   MatSelectModule,
//   MatListModule,
//   MatSidenavModule,
//   MatGridListModule,
//   MatCheckboxModule
// ]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatGridListModule ,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule
    // materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
