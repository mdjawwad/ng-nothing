import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cable-cc',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cable-cc.component.html',
  styleUrl: './cable-cc.component.css',
})
export class CableCCComponent implements OnInit {
  images: string[] = [
    '//in.nothing.tech/cdn/shop/files/BA_ALAK_440_2560x2040_07c9ba72-1a94-491e-a49b-73d0f07ee2d6_2160x.jpg?v=1688801434',
    '//in.nothing.tech/cdn/shop/files/BA_ALAK_450_2560x2040_e8e65bd0-d21d-44a4-b52a-1ffd827b0754_2160x.jpg?v=1688801434',
    '//in.nothing.tech/cdn/shop/files/BA_ALAK_230_2560x2040_368be8bc-235b-4b3d-8c72-3725e0f04f18_2160x.jpg?v=1688801433',
    '//in.nothing.tech/cdn/shop/files/BA_ALAK_235_2560x2040_c1fcb6c2-6a96-47cf-b366-ed990ce3a509_2160x.jpg?v=1688801433',
    '//in.nothing.tech/cdn/shop/files/BA_ALAK_220_2560x2040_81279891-9fc3-4dc7-9948-2000fe89d288_2160x.jpg?v=1688801433',
  ];
  currentIndex: number = 0;

  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  constructor() {}

  ngOnInit(): void {}

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
