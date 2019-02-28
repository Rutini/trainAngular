import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Response} from './models/Response';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  isLoginClicked = false;
  isRegisterClicked = false;
  newUSer: User;
  userData;
  isLogged = !!localStorage.getItem('token');
  loggedUser;

  ngOnInit() {
    this.subscribeToUser();
  }

  subscribeToUser(): void {
    this.userService.loggedUser
      .subscribe(value => {
        this.loggedUser = value;
      });
  }

  loginClick(): void {
    this.isLoginClicked = !this.isLoginClicked;
    this.isRegisterClicked = false;
  }

  registerClick(): void {
    this.isLoginClicked = false;
    this.isRegisterClicked = !this.isRegisterClicked;
  }

  sendNewUser(name, email, password) {
    this.newUSer = {
      name,
      email,
      password,
      credentials: 3
    };
    this.userService.registerUser(this.newUSer)
      .subscribe((response: Response) => {
        if (response.success) {
          console.log(response.message);
          this.isLoginClicked = true;
          this.isRegisterClicked = false;
        }
      });
  }

  sendLoginDataUser(email, password) {
    this.userData = {
      email,
      password
    };

    this.userService.loginUser(this.userData)
      .subscribe((response: Response) => {
        if (response.success) {
          localStorage.setItem('token', response.message);
          this.userService.getLoggedUser()
            .subscribe((res: Response) => {
              if (res.success) {
                this.userService.loggedUser.next(res.message);
                this.isLogged = true;
                this.subscribeToUser();
                this.isLoginClicked = false;
                this.isRegisterClicked = false;
              }
            });
        }
      });
  }

  sighOut(): void {
    localStorage.removeItem('token');
    this.userService.loggedUser.next({});
    this.isLogged = false;
    this.isLoginClicked = false;
    this.isRegisterClicked = false;
    this.loggedUser.name = 'Гість';
  }

  cancel(): void {
    this.isLogged = false;
    this.isLoginClicked = false;
    this.isRegisterClicked = false;
  }

}
