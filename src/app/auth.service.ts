import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUserSubject = new BehaviorSubject<firebase.User | null>(null);

  constructor(private angularfireauth:AngularFireAuth, private router:Router,private http:HttpClient) { }

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
