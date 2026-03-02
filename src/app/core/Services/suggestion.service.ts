import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private suggestionUrl = 'http://localhost:3000/suggestions';  // URL de ton API

  constructor(private http: HttpClient) { }

  // Récupérer toutes les suggestions
  getSuggestionsList(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.suggestionUrl);
  }

  // Récupérer une suggestion par ID
  getSuggestionById(id: number): Observable<Suggestion> {
    return this.http.get<Suggestion>(`${this.suggestionUrl}/${id}`);
  }

  // Mettre à jour le nombre de Likes d'une suggestion
  updateSuggestion(suggestion: Suggestion): Observable<Suggestion> {
    return this.http.put<Suggestion>(`${this.suggestionUrl}/${suggestion.id}`, suggestion);
  }

  // Ajouter une nouvelle suggestion
  addSuggestion(suggestion: Suggestion): Observable<Suggestion> {
    return this.http.post<Suggestion>(this.suggestionUrl, suggestion);
  }

  // Supprimer une suggestion
  deleteSuggestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.suggestionUrl}/${id}`);
  }
}