import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';

import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  handleSearchTextChange(searchText: string) {
    console.log('Texto de búsqueda:', searchText);
    this.getByRegion(searchText);
  }

  getByRegion(country: string): void {
    this.countryService.getByRegion(country)
  .subscribe(newCountries => this.countries = [...this.countries, ...newCountries]);
  }
}