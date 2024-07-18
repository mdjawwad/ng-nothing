import { Component } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent {
   ngOnInit(): void {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
   
    document.addEventListener('DOMContentLoaded', () => {
      const compSliders = document.querySelectorAll('.comparison-slider');
      if (compSliders.length > 0) {
        compSliders.forEach((slider) => {
          const compSlider = slider.querySelectorAll(
            '.comp-slider'
          ) as NodeListOf<HTMLElement>;

          window.addEventListener('resize', () => {
            compSlider.forEach((slider) => {
              const compSliderWidth = slider.offsetWidth + 'px';
              const imgElement = slider.querySelector(
                '.resize img'
              ) as HTMLElement | null;
              if (imgElement) {
                imgElement.style.width = compSliderWidth;
              }
            });
          });

          this.initializeDrag(slider);
        });
      }
    });
  }

  initializeDrag(container: Element) {
    const dragElement = container.querySelector('.divider') as HTMLElement;
    const resizeElement = container.querySelector('.resize') as HTMLElement;
    const containerElement = container as HTMLElement;

    if (dragElement && resizeElement && containerElement) {
      let touched = false;

      window.addEventListener('touchstart', () => {
        touched = true;
      });

      window.addEventListener('touchend', () => {
        touched = false;
      });

      dragElement.addEventListener('mousedown', (e: any) => {
        e.preventDefault();
        dragElement.classList.add('draggable');
        resizeElement.classList.add('resizable');

        const startX = e.pageX || (e as TouchEvent).touches[0].pageX;
        const dragWidth = dragElement.offsetWidth;
        const posX = dragElement.offsetLeft + dragWidth - startX;
        const containerOffset = containerElement.offsetLeft;
        const containerWidth = containerElement.offsetWidth;
        const minLeft = containerOffset + 5;
        const maxLeft = containerOffset + containerWidth - dragWidth - 5;

        document.addEventListener('mousemove', (e: any) => {
          if (!touched) {
            e.preventDefault();
          }

          const moveX = e.pageX || (e as TouchEvent).touches[0].pageX;
          let leftValue = moveX + posX - dragWidth;

          if (leftValue < minLeft) {
            leftValue = minLeft;
          } else if (leftValue > maxLeft) {
            leftValue = maxLeft;
          }

          const widthValue =
            ((leftValue + dragWidth / 8 - containerOffset) * 100) /
              containerWidth +
            '%';

          dragElement.style.left = widthValue;
          resizeElement.style.width = widthValue;
        });

        document.addEventListener('mouseup', () => {
          dragElement.classList.remove('draggable');
          resizeElement.classList.remove('resizable');
        });
      });

      document.addEventListener('mouseup', () => {
        dragElement.classList.remove('draggable');
        resizeElement.classList.remove('resizable');
      });
    }
  }
}
