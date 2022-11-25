import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ROUTES, RoutesRecognized } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookViewComponent } from './book-view/book-view.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { IssueBooksComponent } from './issue-books/issue-books.component';

const myRoute : Routes=[
  {
    path:"",
    component:LoginPageComponent
  },
  {
    path:"signup",
    component:SignUpPageComponent
  },
  {
    path:"login",
    component:AdminLoginPageComponent
  },
  {
    path:"bookentry",
    component:BookEntryComponent
  },
  {
    path:"view",
    component:BookViewComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  },
  {
    path:"edit",
    component:EditComponent
  },
  {
    path:"issue",
    component:IssueBooksComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    AdminLoginPageComponent,
    BookEntryComponent,
    BookViewComponent,
    NavbarComponent,

    SearchComponent,
      DeleteComponent,
      EditComponent,
      IssueBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
