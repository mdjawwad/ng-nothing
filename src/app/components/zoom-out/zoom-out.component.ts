import { Component } from '@angular/core';

@Component({
  selector: 'app-zoom-out',
  standalone: true,
  imports: [],
  templateUrl: './zoom-out.component.html',
  styleUrl: './zoom-out.component.css',
})
export class ZoomOutComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    let currentZoom = 1;
    let minZoom = 1;
    let maxZoom = 5;
    let stepSize = 0.05;

    const container: HTMLElement | null =
      document.getElementById('image-container');

    container?.addEventListener('wheel', (event: WheelEvent) => {
      // Zoom in or out based on the scroll direction
      const direction: number = event.deltaY > 0 ? -1 : 1;
      zoomImage(direction);
    });
    function zoomImage(direction: number): void {
      let newZoom: number = currentZoom + direction * stepSize;

      // Limit the zoom level to the minimum and maximum values
      if (newZoom < minZoom || newZoom > maxZoom) {
        return;
      }

      currentZoom = newZoom;

      // Update the CSS transform of the image to scale it
      let image: HTMLElement | null = document.querySelector(
        '#image-container img'
      );
      if (image) {
        image.style.transform = 'scale(' + currentZoom + ')';
      }
    }
  }
}
