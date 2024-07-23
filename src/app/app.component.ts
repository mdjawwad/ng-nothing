import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Phone2aComponent } from './components/phone2a/phone2a.component';
import { LoginComponent } from "./components/login/login.component";
import { TitleService } from './service/title/title.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Phone2aComponent, FooterComponent, NavbarComponent, HomeComponent,  LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'nothing-ng';
 
  constructor(private router: Router, private titleService: TitleService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Here you can set the title based on the route
        const currentRoute = this.router.routerState.root;
        let title = 'Default Title';

        // Example logic to set title based on route data or path
        if (currentRoute.firstChild) {
          const childRoute = currentRoute.firstChild.snapshot;
          if (childRoute.data['title']) {
            title = childRoute.data['title'];
          } else {
            title = childRoute.url.join(' ');
          }
        }

        this.titleService.setTitle(title);
      }
    });
  }
  
}
