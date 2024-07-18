import { Component } from '@angular/core';
import { SshhhComponent } from "../sshhh/sshhh.component";

@Component({
  selector: 'app-ear2',
  standalone: true,
  imports: [SshhhComponent],
  templateUrl: './ear2.component.html',
  styleUrl: './ear2.component.css'
})
export class Ear2Component {

  
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
    
    })
    
    document.addEventListener('DOMContentLoaded', () => {
      // Hide all big images except the first one
      const bigImages = document.querySelectorAll<HTMLImageElement>('.earbods img');
      bigImages.forEach((img, index) => {
          if (index !== 0) (img as HTMLImageElement).style.display = 'none';
      });
  
      // Add event listeners to small images
      const smallImages = document.querySelectorAll<HTMLImageElement>('.small-images div');
      smallImages.forEach((div, index) => {
          div.addEventListener('click', () => {
              bigImages.forEach((bigImg, bigIndex) => {
                  (bigImg as HTMLImageElement).style.display = (bigIndex === index) ? 'block' : 'none';
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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

}
