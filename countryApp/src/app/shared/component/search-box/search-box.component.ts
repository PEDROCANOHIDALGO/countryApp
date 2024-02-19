import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { RouterModule,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-searchBox',
  standalone: true,
  imports: [],
  templateUrl: './searchBox.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';

  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  searchText: string = '';

  onSearchTextChange(event: any) {
    this.searchText = event.target.value;
  }

  onSearch() {
    // Emitir el evento searchTextChange con el valor actual de la caja de búsqueda
    // Esto enviará el texto ingresado al componente padre cuando se hace clic en el botón
    this.searchTextChange.emit(this.searchText);
  }
}