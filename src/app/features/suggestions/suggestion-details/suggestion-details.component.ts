import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html'
})
export class SuggestionDetailsComponent implements OnInit {

  suggestionId!: number;

  suggestions: Suggestion[] = [
    { id: 1, title: 'Organiser une journée team building', description: '...', category: 'Événements', date: new Date(), status: 'acceptee', nbLikes: 10 },
    { id: 2, title: 'Améliorer le système de réservation', description: '...', category: 'Technologie', date: new Date(), status: 'refusee', nbLikes: 0 }
  ];

  suggestion?: Suggestion;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.suggestionId = Number(this.route.snapshot.paramMap.get('id'));
    this.suggestion = this.suggestions.find(s => s.id === this.suggestionId);
  }
}
