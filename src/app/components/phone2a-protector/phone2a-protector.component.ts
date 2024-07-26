import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone2a-protector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone2a-protector.component.html',
  styleUrl: './phone2a-protector.component.css',
})
export class Phone2aProtectorComponent implements OnInit {
  images: string[] = [
    ' //in.nothing.tech/cdn/shop/files/screen-protector-white_a0d4d148-1b2a-4b27-90b4-706e8a5d3536_2160x.jpg?v=1709365918',
    ' //in.nothing.tech/cdn/shop/files/screen-protector-black_5bdfba1d-7831-45d9-9330-1e7d7efd7f36_2160x.jpg?v=1709365918',
    ' //in.nothing.tech/cdn/shop/files/screen-protector-milk_8f7a2bcd-c1f8-4b8c-ab41-7270103a54ff_2160x.jpg?v=1709365918',
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
