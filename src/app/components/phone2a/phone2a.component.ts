import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CamaraViewComponent } from '../camara-view/camara-view.component';
import { Phone2aAllInComponent } from '../phone2a-all-in/phone2a-all-in.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { ZoomOutComponent } from '../zoom-out/zoom-out.component';
import { ImgGridComponent } from '../img-grid/img-grid.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phone2a',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink,
    CamaraViewComponent,
    ImgGridComponent,
    Phone2aAllInComponent,
    ImageSliderComponent,
    ZoomOutComponent,
  ],
  templateUrl: './phone2a.component.html',
  styleUrl: './phone2a.component.css',
})
export class Phone2aComponent {
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      // Hide all big images except the first one
      const bigImages =
        document.querySelectorAll<HTMLImageElement>('.phonsImg img');
      bigImages.forEach((img, index) => {
        if (index !== 0) (img as HTMLImageElement).style.display = 'none';
      });

      // Add event listeners to small images
      const smallImages =
        document.querySelectorAll<HTMLImageElement>('.colors div');
      smallImages.forEach((div, index) => {
        div.addEventListener('click', () => {
          bigImages.forEach((bigImg, bigIndex) => {
            (bigImg as HTMLImageElement).style.display =
              bigIndex === index ? 'block' : 'none';
          });
        });
      });
    });

    let shop: number = window.pageYOffset;

    window.onscroll = () => {
      const currentScroll: number = window.pageYOffset;
      if (shop > currentScroll) {
        document.getElementById('shopbar')!.style.bottom = '0';
      } else {
        document.getElementById('shopbar')!.style.bottom = '-80px';
      }
      shop = currentScroll;
    };

    let myIndex: number = 0;

    carousel();
    function carousel(): void {
      let i: number;
      const x = document.getElementsByClassName(
        'des1'
      ) as HTMLCollectionOf<HTMLElement>;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }
      x[myIndex - 1].style.display = 'block';

      setTimeout(carousel, 3000);
    }
  }

  hideAnimatedDiv(): void {
    const videoTitle = document.getElementById('go-title') as HTMLElement;
    const videodes = document.getElementById('video-text') as HTMLElement;

    videoTitle.style.display = 'block';
    videodes.style.display = 'none';

    setTimeout(() => {
      videoTitle.style.display = 'none';
      videodes.style.display = 'block';
    }, 6000);
  }
}
function carousel() {
  throw new Error('Function not implemented.');
}
