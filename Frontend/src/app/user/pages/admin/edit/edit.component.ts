import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  userId: number;

  constructor(
    private formBuilder: FormBuilder,
    private userService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupération de l'ID de l'utilisateur à partir de l'URL
    this.userId = this.route.snapshot.params['id'];

    // Initialisation du formulaire avec des validations
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Ajoutez d'autres champs si nécessaire
    });

    // Chargez les données de l'utilisateur ici si vous avez besoin de préremplir les champs du formulaire
    // Par exemple : this.loadUserDetails(this.userId);
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.userService.updateUser(this.userId, this.editForm.value).subscribe({
        next: (response) => {
          console.log('Utilisateur mis à jour avec succès');
          this.router.navigate(['/user/list']);  // Redirection après la mise à jour
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour de l\'utilisateur', err);
        }
      });
    }
  }
}
