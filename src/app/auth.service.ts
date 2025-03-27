import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: any;
  private userSub = new BehaviorSubject<any>(null);
  private adminSub = new BehaviorSubject<boolean>(false);
  private moderatorSub = new BehaviorSubject<boolean>(false);
  private loggedUserSub = new BehaviorSubject<boolean>(false);
  private loggedUserSubject = new BehaviorSubject<firebase.User | null>(null);
  private apiUrl="http://127.0.0.1:5001/candyshop-67a32/us-central1/api/"

  constructor(private angularfireauth:AngularFireAuth, private router:Router,private http:HttpClient) {
    this.angularfireauth.authState.subscribe(
      (user:any)=>{
        if (user){
          this.loggedUser=user?._delegate
          console.log("User", user)
          user.getIdToken().then(
            (token: any) => {
              this.loggedUser.accessToken = token
              const headers = new HttpHeaders().set('Authorization', token)
              this.http.get(this.apiUrl + "getClaims/" + user.uid, { headers }).subscribe(
                {
                  next: (claims) => {
                    console.log("Claims", claims)
                    this.loggedUser.claims = claims
                    this.userSub.next(this.loggedUser)
                    this.adminSub.next(this.loggedUser.claims.admin)
                    this.loggedUserSub.next(true)
                    this.userSub.next(this.loggedUser)
                    this.moderatorSub.next(this.loggedUser.claims.moderator)
                    this.loggedUserSub.next(true)
                    console.log("User: ", this.loggedUser)
                  },
                  error: (error) => {
                    console.log(error)
                    this.loggedUser = null
                    this.userSub.next(null)
                    this.adminSub.next(false)
                    this.moderatorSub.next(false)
                    this.loggedUserSub.next(false)
                  }
                }
              )
          })
          .catch(
          (error:any)=>console.error(error)
          )
        }
        else {
          this.loggedUser=null
          this.userSub.next(null)
          this.adminSub.next(false)
          this.moderatorSub.next(false)
          this.loggedUserSub.next(false)
        }
      }
    )

this.angularfireauth.authState.subscribe(user => {
  this.loggedUserSubject.next(user);
});
}
isLoggedIn(): boolean {
  return !!this.angularfireauth.currentUser;
} 
getIsAdmin(){
  return this.adminSub
}
getIsModerator(){
  return this.moderatorSub
}
getIsLoggedUser() {
  return this.loggedUserSub;
}
getLoggedUser() {
  return this.userSub;
}
getUsers() {
  if (this.loggedUser.accessToken) {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.loggedUser.accessToken
    );
    return this.http.get(this.apiUrl + 'users', { headers });
  }
  return null;
}
setUserClaims(uid: any, claims: any) {
  if (this.loggedUser.accessToken) {
    let body = {
      claims: claims,
      uid: uid,
    };
    const headers = new HttpHeaders().set(
      'Authorization',
      this.loggedUser.accessToken
    );
    return this.http.post(this.apiUrl + 'setCustomClaims', body, { headers });
  }
  return null;
}

  register(email: string, password: string) {
    return this.angularfireauth.createUserWithEmailAndPassword(email, password).then(()=>this.logout())
        .then(()=>this.router.navigate(['login']))
    .catch(error => {
      console.error("Regisztrációs hiba:", error);
      throw error;
    });
  }
  logout(): Promise<void> {
    return this.angularfireauth.signOut().then(() => {
      this.loggedUserSubject.next(null);
    });
  }
  login(email: string, password: string): Promise<any> {
    return this.angularfireauth.signInWithEmailAndPassword(email, password)
      .then(cred => {
        if (cred.user) {
          this.loggedUserSubject.next(cred.user);
          return { success: true };
        }
        return { success: false, message: 'Az email cím jelszó páros nem megfelelő' };
      })
    }
    loginWithGoogle(): Promise<void> {
      return this.angularfireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(cred => {
        if (cred.user) {
          this.loggedUserSubject.next(cred.user);
        }
      }).then(()=>{
        this.router.navigate(['/candies'])
      })
    }
    getCurrentUser(): Observable<any> {
      return this.loggedUserSubject.asObservable().pipe(
        map(user => user ? { 
          uid: user.uid, 
          email: user.email, 
          displayName: user.displayName || 'Névtelen' 
        } : null)
      );
    }
}
