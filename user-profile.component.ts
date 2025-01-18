import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements AfterViewInit {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://via.placeholder.com/300x200'
  };

  orders = [
    { title: 'Product 1', image: 'https://via.placeholder.com/300x200' },
    { title: 'Product 2', image: 'https://via.placeholder.com/300x200' },
    { title: 'Product 3', image: 'https://via.placeholder.com/300x200' },
    { title: 'Product 1', image: 'https://via.placeholder.com/300x200' },
    { title: 'Product 2', image: 'https://via.placeholder.com/300x200' },
    { title: 'Product 3', image: 'https://via.placeholder.com/300x200' },
    { title: 'Product 1', image: 'https://via.placeholder.com/300x200' },
    { title: 'Product 2', image: 'https://via.placeholder.com/300x200' },
    { title: 'Product 3', image: 'https://via.placeholder.com/300x200' },
    // Add more items if needed
  ];

  wishlist = [
    { title: 'Wishlist Item 1', image: 'https://via.placeholder.com/300x200' },
    { title: 'Wishlist Item 2', image: 'https://via.placeholder.com/300x200' },
    // Add more items if needed
  ];

  // Use `!` to assert that these will be initialized by Angular
  @ViewChild('ordersRow') ordersRow!: ElementRef;
  @ViewChild('wishlistRow') wishlistRow!: ElementRef;

  ngAfterViewInit() {
    // This ensures that the DOM elements are available after the component's view has been initialized
    // No need to access `nativeElement` inside the constructor; it's safe after `ngAfterViewInit`
  }

  scrollLeft(section: string) {
    const container = section === 'orders' ? this.ordersRow.nativeElement : this.wishlistRow.nativeElement;
    if (container) {
      container.scrollLeft -= 250; // Scroll 250px to the left
    }
  }

  scrollRight(section: string) {
    const container = section === 'orders' ? this.ordersRow.nativeElement : this.wishlistRow.nativeElement;
    if (container) {
      container.scrollLeft += 250; // Scroll 250px to the right
    }
  }

  constructor() { }
}
