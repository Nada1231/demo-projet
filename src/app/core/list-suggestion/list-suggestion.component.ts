import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../Services/suggestion.service'; // Assure-toi que le service est bien importé
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit {

  suggestions: Suggestion[] = [];
  favorites: Suggestion[] = [];
  searchText: string = '';

  constructor(private suggestionService: SuggestionService) { }

  ngOnInit(): void {
    // Appel du service pour récupérer les suggestions depuis l'API
    this.suggestionService.getSuggestionsList().subscribe((data: Suggestion[]) => {
      this.suggestions = data;
    });
  }

  likeSuggestion(s: Suggestion) {
    s.nbLikes++;
    // Met à jour les données sur le serveur
    this.suggestionService.updateSuggestion(s).subscribe();
  }

  addToFavorites(s: Suggestion) {
    // Vérifie si la suggestion est déjà dans les favoris
    if (!this.favorites.some(fav => fav.id === s.id)) {
      this.favorites.push(s);
    }
  }

  get filteredSuggestions(): Suggestion[] {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}