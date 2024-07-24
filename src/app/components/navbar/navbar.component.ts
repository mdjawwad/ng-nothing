import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
// import { Document, HTMLElement } from 'docu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
 
 
  ngOnInit(): void {
 
// Toggle to show and hide navbar menu
const navbarMenu = document.getElementById("menu") as HTMLElement;
const burgerMenu = document.getElementById("burger") as HTMLElement;

burgerMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
  burgerMenu.classList.toggle("is-active");
});

// Toggle to show and hide dropdown menu
const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((item) => {
  const dropdownToggle = item.querySelector(".dropdown-toggle") as HTMLElement;
 
 
  dropdownToggle.addEventListener("click", () => {
    const dropdownShow = document.querySelector(".dropdown-show");
    toggleDropdownItem(item);

    // Remove 'dropdown-show' class from other dropdown
    if (dropdownShow && dropdownShow != item) {
      toggleDropdownItem(dropdownShow);
    }
  });
});

// Function to display the dropdown menu
const toggleDropdownItem = (item:any) => {
  const dropdownContent = item.querySelector(".dropdown-content");

  // Remove other dropdown that have 'dropdown-show' class
  if (item.classList.contains("dropdown-show")) {
    dropdownContent.removeAttribute("style");
    item.classList.remove("dropdown-show");
  } else {
    // Added max-height on active 'dropdown-show' class
    dropdownContent.style.height = dropdownContent.scrollHeight + "px";
    item.classList.add("dropdown-show");
  }
};

// Fixed dropdown menu on window resizing
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    document.querySelectorAll(".dropdown-content").forEach((item) => {
      item.removeAttribute("style");
    });
    dropdown.forEach((item) => {
      item.classList.remove("dropdown-show");
    });
  }
});

// Fixed navbar menu on window resizing
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
      burgerMenu.classList.remove("is-active");
    }
  }
});





///

    let prevScrollpos: number = window.pageYOffset;

    window.onscroll = () => {
      const currentScrollPos: number = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('header')!.style.top = '0';
      } else {
        document.getElementById('header')!.style.top = '-70px';
      }
      prevScrollpos = currentScrollPos;
    };

   
  }

  
 

}
