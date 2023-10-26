import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  centerFocused = false;
  centeredArray: any = []
  
  items = [
    {
      image: 'https://images.unsplash.com/photo-1648457257285-cfbc3781cc54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935',
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      image: 'https://images.unsplash.com/photo-1633643092028-b66187af7d47?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&w=500',
      title: 'Title 2',
      description: 'Description 2',
    },
    {
      image: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fHw%3D&w=500',
      title: 'Title 3',
      description: 'Description 3',
    },
    {
      image: 'https://images.unsplash.com/photo-1668090956134-7eb5fc42733c?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fHw%3D&w=500',
      title: 'Title 4',
      description: 'Description 4',
    },
    {
      image: 'https://images.unsplash.com/photo-1648457257285-cfbc3781cc54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935',
      title: 'Title 5',
      description: 'Description 5',
    },
    {
      image: 'https://images.unsplash.com/photo-1648457257285-cfbc3781cc54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935',
      title: 'Title 6',
      description: 'Description 6',
    },
    {
      image: 'https://images.unsplash.com/photo-1648457257285-cfbc3781cc54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935',
      title: 'Title 7',
      description: 'Description 7',
    },
    {
      image: 'https://images.unsplash.com/photo-1648457257285-cfbc3781cc54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935',
      title: 'Title 8',
      description: 'Description 8',
    },
    {
      image: 'https://images.unsplash.com/photo-1648457257285-cfbc3781cc54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935',
      title: 'Title 9',
      description: 'Description 9',
    },
    {
      image: 'https://images.unsplash.com/photo-1648457257285-cfbc3781cc54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935',
      title: 'Title 10',
      description: 'Description 10',
    }
  ];

  currentSlide: number = 1;
  noOfCards: number = 1;


  getArray() {
    if ((!this.centerFocused) || Number(this.noOfCards) === 1) {

      return this.items.slice(Number(this.currentSlide) - 1, Number(this.currentSlide) - 1 + Number(this.noOfCards));

    } else {

      return this.centeredArray;
    }
  }


  prevSlide() {
    console.log(this.currentSlide)
    if ((!this.centerFocused) || Number(this.noOfCards) === 1) {

      this.currentSlide -= Number(this.noOfCards);
      if (this.currentSlide < 1) {
        this.currentSlide = 1;
      }
    } else {
      if (Number(this.noOfCards) === 2) {
        console.log(this.currentSlide)
        let len = this.centeredArray?.length;
        this.centeredArray.length = 1
        this.centeredArray.push(this.items[this.currentSlide - len])
        this.centeredArray.reverse()
        this.currentSlide--

      }  else if (Number(this.noOfCards) === 3 || Number(this.noOfCards) === 4) {
        this.currentSlide--;
        if (this.currentSlide < 1) {
          this.currentSlide = this.items.length;
        }
    
        let len = this.centeredArray?.length;
        this.centeredArray.pop();
        if (this.currentSlide - len - 1 >= 0) {
          this.centeredArray.unshift(this.items[this.currentSlide  - 1]);
        } else {
          this.centeredArray.unshift(this.items[this.currentSlide  - 1]);
        }
        console.log(this.centeredArray)
        console.log(this.currentSlide)
      } else {
        return;
      }
    }}




  nextSlide() {
    console.log(this.noOfCards)
    if ((!this.centerFocused) || Number(this.noOfCards) == 1) {
      const maxPossibleSlide = this.items.length - Number(this.noOfCards) + 1;
      this.currentSlide = Number(this.currentSlide) + Number(this.noOfCards);
      if (this.currentSlide > maxPossibleSlide) {
        this.currentSlide = maxPossibleSlide;
      }
    } else {
      if (Number(this.noOfCards) === 2) {
        let len = this.centeredArray?.length;
        this.centeredArray.reverse()
        this.centeredArray.pop()
        if(this.items[len - 1 + this.currentSlide]){

          this.centeredArray.push(this.items[len - 1 + this.currentSlide])
        }else{
          this.centeredArray.push(this.items[0])

        }
        this.currentSlide++;
      } else if (Number(this.noOfCards) === 3 || Number(this.noOfCards) === 4) {
        this.currentSlide++;
        if (this.currentSlide > this.items.length) {
          this.currentSlide = 1;
        }
      
        let len = this.centeredArray?.length;
        this.centeredArray.shift();
        if (this.currentSlide + len - 1 <= this.items.length) {
          this.centeredArray.push(this.items[this.currentSlide + len - 2]);
        } else {
          this.centeredArray.push(this.items[this.currentSlide + len - 2 - this.items.length]);
        }
        console.log(this.centeredArray,this.currentSlide)
      }else {
        return;
      }
      
    } 
  }

  toggleCenterFocus(e) {
    this.centerFocused = e.target.checked;
    this.currentSlide = 1;
    if (this.centerFocused && Number(this.noOfCards) !== 1) {

      this.centeredArray = []
      this.centeredArray = this.items?.slice(0, Number(this.noOfCards))
    }

  }

  changeDropDown() {
    this.currentSlide = 1;
    if (this.centerFocused && Number(this.noOfCards) !== 1) {

      this.centeredArray = []
      this.centeredArray = this.items?.slice(0, Number(this.noOfCards))
    }

  }

}
