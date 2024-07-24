import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CamaraViewComponent } from '../camara-view/camara-view.component';
import { Phone2aAllInComponent } from '../phone2a-all-in/phone2a-all-in.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { ZoomOutComponent } from '../zoom-out/zoom-out.component';
import { ImgGridComponent } from '../img-grid/img-grid.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone2a',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink,
    CamaraViewComponent,
    CommonModule,
    ImgGridComponent,
    Phone2aAllInComponent,
    ImageSliderComponent,
    ZoomOutComponent,
  ],
  templateUrl: './phone2a.component.html',
  styleUrl: './phone2a.component.css',
})
export class Phone2aComponent {
  // autoplay video
   

  // product image change
  images: {
    path: string;
    label: string;
    color: string;
    width: string;
    selected: boolean;
  }[] = [
    {
      path: 'https://at.nothing.tech/cdn/shop/products/milk-2.png?v=1709369790',
      label: 'Image 1',
      color: 'white',
      width: '900px',
      selected: true,
    },
    {
      path: 'https://in.nothing.tech/cdn/shop/files/black-1.png?v=1714201997',
      label: 'Image 2',
      color: 'black',
      width: '900px',
      selected: false,
    },
    {
      path: 'https://in.nothing.tech/cdn/shop/files/1_GlyphON.png?v=1716976380',
      label: 'Image 3',
      color: '#535A5E',
      width: '900px',
      selected: false,
    },
  ];
  currentImage: { path: string; width: string } = this.images[0];
  setImage(image: { path: string; width: string; selected: boolean }): void {
    this.images.forEach((img) => (img.selected = false));
    image.selected = true;
    this.currentImage = image;
  }

  ngOnInit(): void {
    // functions calls

    this.hideAnimatedDiv();

    // functions calls

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
    carousel();
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
