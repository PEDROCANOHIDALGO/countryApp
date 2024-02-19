import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';
import {CountryService} from '../../services/country.service'
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
@Component({ 
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent,CountryTableComponent,CommonModule],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  countries:Country[]=[];

  constructor(private countryService: CountryService){ }

  handleSearchTextChange(searchText: string) {
    console.log("Texto de búsqueda:", searchText);
    this.getByCapital(searchText);
  }
  getByCapital(capital:string){
    this.countryService.getByCapital(capital).subscribe(countries=>this.countries=countries);
  }
}