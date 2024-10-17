import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        if (res.userId != null) {
          const user = {
            id: res.userId,
            role: res.userRole
          };
          StorageService.saveUser(user);
          StorageService.saveToken(res.jwt);

          // Redirige en fonction du rôle de l'utilisateur
          if (res.userRole === 'ROLE_ADMIN') {
            this.router.navigateByUrl('/manage-acces');
          } else if (res.userRole === 'ROLE_USER') {
            this.router.navigateByUrl('/stage');
          } else if (res.userRole === 'ROLE_DEV') {
            this.router.navigateByUrl('/user/dev');
          } else {
            this.snackBar.open(
              'Rôle inconnu', 'Fermer',
              { duration: 5000, panelClass: 'error-snackbar' }
            );
          }
        } else {
          this.snackBar.open(
            'Mauvais identifiants', 'Fermer',
            { duration: 5000, panelClass: 'error-snackbar' }
          );
        }
      },
      (err) => {
        this.snackBar.open(
          'Erreur lors de la connexion', 'Fermer',
          { duration: 5000, panelClass: 'error-snackbar' }
        );
      }
    );
  }
}
