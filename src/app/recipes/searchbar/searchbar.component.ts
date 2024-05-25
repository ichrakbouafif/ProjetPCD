import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit, AfterViewInit {
  @Output() selectedType = new EventEmitter<string>();
  @Output() searchQueryEvent = new EventEmitter<string>(); // New event emitter for emitting search queries
  selectedValue: string = "Tout";
  dropdownBtn!: HTMLElement;
  list!: HTMLElement;
  icon!: HTMLElement;
  span!: HTMLElement;
  input!: HTMLInputElement;
  listItems!: NodeListOf<HTMLElement>;
  searchQuery: string = ''; // Define the searchQuery property

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    console.log('SearchbarComponent initialized');
  }

  ngAfterViewInit(): void {
    this.dropdownBtn = this.el.nativeElement.querySelector("#drop-text");
    this.list = this.el.nativeElement.querySelector("#list");
    this.icon = this.el.nativeElement.querySelector("#icon");
    this.span = this.el.nativeElement.querySelector("#span");
    this.input = this.el.nativeElement.querySelector("#search-input");
    this.listItems = this.el.nativeElement.querySelectorAll(".dropdown-list-item");

    this.renderer.listen(this.dropdownBtn, 'click', () => this.toggleDropdown());

    this.listItems.forEach(item => {
      this.renderer.listen(item, 'click', (e) => this.selectItem(e));
    });
  }

  toggleDropdown(): void {
    if (this.list.classList.contains("show")) {
      this.icon.style.transform = "rotate(0deg)";
    } else {
      this.icon.style.transform = "rotate(180deg)";
    }
    this.list.classList.toggle("show");
  }

  selectItem(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    this.selectedValue = target.innerText;
    console.log('Selected value:', this.selectedValue);
    this.selectedType.emit(this.selectedValue);
    console.log('Event emitted:', this.selectedValue);

    if (target.innerText === "Tout") {
      this.input.placeholder = "Rechercher une recette...";
    } else {
      this.input.placeholder = `Rechercher dans ${target.innerText}...`;
    }
    this.list.classList.remove("show");
    this.icon.style.transform = "rotate(0deg)";
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent): void {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.list.classList.remove("show");
      this.icon.style.transform = "rotate(0deg)";
    }
  }

  // Method to emit the search query
  search(): void {
    this.searchQueryEvent.emit(this.searchQuery);
  }
}