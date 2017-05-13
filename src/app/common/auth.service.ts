import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";
import {myConfig} from "./auth.config";
import {Router} from "@angular/router";

// Avoid name not found warnings
declare var Auth0: any;

@Injectable()
export class Auth {

  //Store profile object in auth class
  userProfile: Object;

  // Configure Auth0
  auth0 = new Auth0({
    domain: myConfig.domain,
    clientID: myConfig.clientID,
    callbackOnLocationHash: true,
    callbackURL: myConfig.callbackURL,
  });

  constructor(private router: Router) {
    let result = this.auth0.parseHash(window.location.hash);

    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    if (result && result.idToken) {
      localStorage.setItem('id_token', result.idToken);

      // Fetch profile information
      this.auth0.getProfile(result.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
      this.router.navigate(['/home']);
    }
    else if (result && result.error) {
      alert('error: ' + result.error);
    }
  }

  public handleAuthentication(): void {
    this.auth0.parseHash({_idTokenVerification: false}, (err, authResult) => {
      if (err) {
        alert(`Error: ${err.errorDescription}`)
      }
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.router.navigate(['/home']);
      }
    });
  }

  public login(username: string, password: string): void {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username,
      password
    }, err => {
      if (err) return alert(err.description);
    });
  }

  public signup(email, password): void {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, err => {
      if (err) return alert(err.description);
    });
  }

  public loginWithGoogle(): void {
    this.auth0.login({
      connection: 'google-oauth2'
    }, function (err) {
      if (err) {
        alert('something went wrong: ' + err.message);
      }
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the id_token is expired or not
    return tokenNotExpired('id_token');
  }

  public logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }
}
