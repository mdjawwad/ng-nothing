import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';

@Component({
  selector: 'app-camara-view',
  standalone: true,
  imports: [],
  templateUrl: './camara-view.component.html',
  styleUrl: './camara-view.component.css',
})
export class CamaraViewComponent {
  ngOnInit(): void {
 

    fromEvent(window, 'scroll')
      .pipe(
        map(() => window.pageYOffset),
        map((scroll: number) => ({
          backgroundSize: `${100 + scroll / 5}%`,
          top: `${-(scroll / 10)}%`,
        }))
      )
      .subscribe((styles) => {
        const zoomElement = document.querySelector('.zoom') as HTMLElement;
        if (zoomElement) {
          Object.assign(zoomElement.style, styles);
        }
      });
     
  }
}
