import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './components/widgets/project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { LinksPageComponent } from './components/pages/links-page/links-page.component';
import { LinkComponent } from './components/widgets/link/link.component';
import { SidebarComponent } from './components/widgets/sidebar/sidebar.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmailService } from './services/email.service';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ProjectComponent,
    LinksPageComponent,
    LinkComponent,
    SidebarComponent,
    ProjectsPageComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    FlexLayoutModule 
  ],
  providers: [EmailService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
