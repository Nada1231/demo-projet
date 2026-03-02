import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Ajout de ReactiveFormsModule si ce n'est pas déjà fait

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';  // Bien déclarer ici

@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionDetailsComponent,
    SuggestionFormComponent  // Déclarer SuggestionFormComponent ici
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    ReactiveFormsModule  // Pour utiliser les formulaires réactifs
  ]
})
export class SuggestionsModule { }