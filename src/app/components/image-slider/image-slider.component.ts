import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent implements AfterViewInit {
  sliderValue: number = 50;

  ngAfterViewInit(): void {
    const divisor = document.getElementById('divisor') as HTMLElement;
    const slider = document.getElementById('slider') as HTMLInputElement;

    if (slider) {
      slider.addEventListener('input', () => {
        if (divisor) {
          divisor.style.width = slider.value + '%';
        }
      });
    }
  }
}
