import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TvShowComponent } from "./tv-show/tv-show.component";
import { TvShowService } from "./tv-show.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { HttpClientModule } from "@angular/common/http";
import { ShowSearchComponent } from "./show-search/show-search.component";

@NgModule({
  declarations: [AppComponent, TvShowComponent, ShowSearchComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TvShowService],
  bootstrap: [AppComponent]
})
export class AppModule {}
