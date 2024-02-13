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
    // MatFormFieldModule,
    // MatInputModule,
    // MatAutocompleteModule,
    // ReactiveFormsModule,
    // AsyncPipe,

    // PrimeNG
    AutoCompleteModule,
    RippleModule,
    StyleClassModule,
  ],
})
export class SimpleAutocompleteComponentPrime { //implements OnInit {

  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] = [...countries];

  search(event: AutoCompleteCompleteEvent) {    
      //this.suggestions = [...Array(200).keys()].map(item => event.query + '-' + item);
      //console.log(this.suggestions, countries)
      this.suggestions = [...countries].filter((suggestion) =>
      suggestion.toLowerCase().includes(event.query.toLowerCase())      
    );
  }

  // onFocus() {
  //   // Simulez une entrée utilisateur pour ouvrir le panneau de suggestions.
  //   // Vous pouvez passer une chaîne vide si vous souhaitez afficher toutes les suggestions,
  //   // ou un caractère spécifique pour filtrer les suggestions initialement affichées.
  //   //this.search({query: ''});
  //   this.suggestions = [...countries]
  // }

  onFocus(autoComplete: any) {
    // Solution temporaire pour forcer l'ouverture du panneau
    // Ceci est une approche non officielle et pourrait ne pas être fiable
    autoComplete.show()
    // setTimeout(() => autoComplete.show(), 100);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    
    const res = [...countries].filter((suggestion) =>
      suggestion.toLowerCase().includes(filterValue)      
    );
    // console.log('res', res)
    return res
  }

  myControl = new FormControl('');
  /*
  
  options: string[] = countries;
  // filteredOptions?: Observable<string[]>;
  // selectedCountry?: string;

  ///
  items: any[] | undefined;

  selectedCountry: any;

  suggestions: any[] = ['ww', 'qqq'];

  search(event: AutoCompleteCompleteEvent) {
    console.log(this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item))
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);

  }
  ///

  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value || ''))
    // );
  }

  // search(event: any) {
  //   // console.log('search', event.query)
  //   this.filteredOptions = of(this._filter(event.query));
  //   // console.log('this.filteredOptions', this.filteredOptions)
  // }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    
    const res = this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)      
    );
    console.log('res', res)
    return res
  }
  */
}
