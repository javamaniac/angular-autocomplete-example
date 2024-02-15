import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { countries } from '../countries';

import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-simple-autocomplete-prime',
  standalone: true,
  templateUrl: './simple-autocomplete.component-prime.html',
  styleUrl: './simple-autocomplete.component-prime.css',
  imports: [
    FormsModule,
    // PrimeNG
    AutoCompleteModule,
    RippleModule,
    StyleClassModule,
  ],
})
export class SimpleAutocompleteComponentPrime {
  myControl = new FormControl('');
  suggestions: any[] = [...countries];

  items: any[] | undefined;
  selectedItem: any;

  search(event: AutoCompleteCompleteEvent) {    
    this.suggestions = [...countries].filter((suggestion) =>
      suggestion.toLowerCase().includes(event.query.toLowerCase())      
    );
  }
}
