import { Component } from '@angular/core';
import { SshhhComponent } from '../sshhh/sshhh.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ear2',
  standalone: true,
  imports: [SshhhComponent, CommonModule],
  templateUrl: './ear2.component.html',
  styleUrl: './ear2.component.css',
})
export class Ear2Component {
  images: {
    path: string;
    label: string;
    color: string;
    width: string;
    selected: boolean;
  }[] = [
    {
      path: 'https://cdn.shopifycdn.net/s/files/1/0692/5988/6904/files/ELEV_AZU_070_230201.1060.png?v=1678873539',
      label: 'Image 1',
      color: 'white',
      width: '550px',
      selected: true,
    },
    {
      path: 'https://cdn.shopifycdn.net/s/files/1/0692/5988/6904/files/ELEV_AZU_BL_040_230630_v001_1060.png?v=1688527589',
      label: 'Image 2',
      color: 'black',
      width: '550px',
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
    var imgList = document.getElementById('imgList') as HTMLElement;
    var scrollRight = document.getElementById('scroll-right') as HTMLElement;
    var scrollLeft = document.getElementById('scroll-left') as HTMLElement;

    // When a user clicks on the right arrow, the ul will scroll 750px to the right
    scrollRight.addEventListener('click', (event) => {
      imgList.scrollBy(750, 0);
    });

    // When a user clicks on the left arrow, the ul will scroll 750px to the left
    scrollLeft.addEventListener('click', (event) => {
      imgList.scrollBy(-750, 0);
    });

    document.addEventListener('DOMContentLoaded', function () {
      // Select the element with the ID 'image-carousel'
      const imageCarousel = document.getElementById('image-carousel');
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
  }
}
