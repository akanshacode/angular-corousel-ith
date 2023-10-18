import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
   {
    image:'https://images.unsplash.com/photo-1648457257285-cfbc3781cc54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935',
    title:'Title 1',
    description:'Description 1'
   },
   {
    image:'https://images.unsplash.com/photo-1633643092028-b66187af7d47?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&w=500',
    title:'Title 2',
    description:'Description 2'
   },
   {
    image:'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fHw%3D&w=500',
    title:'Title 3',
    description:'Description 3'
   },
   {
    image:'https://images.unsplash.com/photo-1668090956134-7eb5fc42733c?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fHw%3D&w=500',
    title:'Title 4',
    description:'Description 4'
   },
   {
    image:'https://images.unsplash.com/photo-1648457257285-cfbc3781cc54?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935',
    title:'Title 5',
    description:'Description 5'
   }
  ];
  currentSlide: number = 1;
  noOfCards: number = 1; // Number of cards to display in the middle

  prevSlide() {
    this.currentSlide -= Number(this.noOfCards);
    if (this.currentSlide < 1) {
      this.currentSlide = 1;
    }
  }

  getArray(){
    return this.items.slice(Number(this.currentSlide)-1, Number(this.currentSlide)-1 + Number(this.noOfCards))
  }
  
  // nextSlide() {
  //   console.log(this.currentSlide)
  //   console.log(Number(this.noOfCards))
  //   this.currentSlide = Number(this.currentSlide)+Number(this.noOfCards);
  //   console.log(this.currentSlide,Number(this.noOfCards))
   
  // }
  nextSlide() {
    const maxPossibleSlide = this.items.length - Number(this.noOfCards) + 1;
  
    this.currentSlide = Number(this.currentSlide) + Number(this.noOfCards);
  
    if (this.currentSlide > maxPossibleSlide) {
      this.currentSlide = maxPossibleSlide;
    }
  }
  

  changeDropDown() {
    this.currentSlide = 1;
  }
  
}
