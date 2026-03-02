import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm!: FormGroup;

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      title: [
        '',
        [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Z][a-zA-Z]*$')]
      ],
      description: [
        '',
        [Validators.required, Validators.minLength(30)]
      ],
      category: ['', [Validators.required]],
      date: [{ value: new Date(), disabled: true }],
      status: [{ value: 'en attente', disabled: true }],
      nbLikes: [0]  // nbLikes est par défaut 0 et ne fait pas partie du formulaire
    });
  }

  get title() { return this.suggestionForm.get('title'); }
  get description() { return this.suggestionForm.get('description'); }
  get category() { return this.suggestionForm.get('category'); }

  onSubmit(): void {
    if (this.suggestionForm.valid) {
      // Ajoute la suggestion à la liste (ceci est un exemple simple, tu peux adapter selon ton store ou ta logique)
      const newSuggestion = this.suggestionForm.value;
      console.log('Suggestion soumise:', newSuggestion);
      // Redirige vers la liste des suggestions après la soumission
      this.router.navigate(['/suggestions']);
    }
  }
}