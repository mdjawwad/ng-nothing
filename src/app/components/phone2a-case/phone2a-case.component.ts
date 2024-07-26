import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone2a-case',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone2a-case.component.html',
  styleUrl: './phone2a-case.component.css',
})
export class Phone2aCaseComponent implements OnInit {
  images: string[] = [
    '//in.nothing.tech/cdn/shop/files/case-black_2160x.jpg?v=1709365918',
    ' //in.nothing.tech/cdn/shop/files/case-milk_2160x.jpg?v=1709365917',
    '//in.nothing.tech/cdn/shop/files/case-white_2160x.jpg?v=1709365917',
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
