import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  isLoginView: boolean = false;

  signupOBJ: any = {
    username: '',
    email: '',
    password: '',
  };

  loginObj: any = {
    email: '',
    password: '',
  };
  // // constructor(private nav: NavbarComponent) {}
  ngOnInit(): void {
    const loginAccount: string = 'Account - Nothing India';

    (document.querySelector('title') as HTMLElement).textContent = loginAccount;
  }

  onSignup() {
    const localData = localStorage.getItem('newUser');
    if (localData != null) {
      const localArray = JSON.parse(localData);
      localArray.push(this.signupOBJ);
      localStorage.setItem('newUser', JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.signupOBJ);
      localStorage.setItem('newUser', JSON.stringify(localArray));
    }

    this.router.navigateByUrl('home');
  }

  onLogin() {
    const localData = localStorage.getItem('newUser');
    if (localData != null) {
      const users = JSON.parse(localData);
      const isUserFound = users.find(
        (m: any) =>
          m.email === this.loginObj.email &&
          m.password === this.loginObj.password
      );
    
      if (isUserFound != undefined) {
        this.router.navigateByUrl('home');

        // const profile = this.nav.profile as unknown as HTMLElement
        // profile.style.display = 'none';
      } else {
        alert('Credentials might be Wrong!!');
      }
    }
  }
}
