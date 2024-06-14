import { Controller } from "@hotwired/stimulus"

//let btParlonsmove;
let btAccueilmove;
let btnFeesmove;
let btnServicesmove
let btnShowcasemove;

export default class extends Controller {
  connect() {
    //console.log("Mouse move controller connected!")
    //btParlonsmove = 0;
    btAccueilmove = 0;
    btnFeesmove = 0;
    btnServicesmove = 0;
    btnShowcasemove = 0;
  }

  move() {
    //if (btParlonsmove == 0) {
    //  const btn1 = document.getElementById("btn-move")
    //  console.log(btn1);
    //  new HoverButton(btn1)
    //  btParlonsmove = 1;
    //}
    if (btAccueilmove == 0) {
      const btn2 = document.getElementById("btn-Welcome-move")
      console.log(btn2);
      new HoverButton(btn2)
      btAccueilmove = 1;
    }
    if (btnShowcasemove == 0) {
      const btn3 = document.getElementById("btn-Showcase-move")
      console.log(btn3);
      new HoverButton(btn3)
      btnShowcasemove = 1;
    }
    if (btnServicesmove == 0) {
      const btn4 = document.getElementById("btn-Services-move")
      console.log(btn4);
      new HoverButton(btn4)
      btnServicesmove = 1;
    }
    if (btnFeesmove == 0) {
      const btn5 = document.getElementById("btn-Fees-move")
      console.log(btn5);
      new HoverButton(btn5)
      btnFeesmove = 1;
    }
  }
}

class HoverButton {
  constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
    console.log(el, 'constructor');
  }

  attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
    //console.log(this, 'attachEventsListener');
  }

  calculatePosition() {
    //console.log("Calculate position")
    gsap.set(this.el, {x: 0,y: 0,scale: 1});
    const box = this.el.getBoundingClientRect();
    this.x = box.left + (box.width * 0.5);
    this.y = box.top + (box.height * 0.5);
    this.width = box.width;
    this.height = box.height;
    //console.log(this.x, this.y, this.width, this.height);
  }

  onMouseMove(e) {
    let hover = false;
    let hoverArea = (this.hover ? 0.9 : 0.2);
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt( x*x + y*y );
    //console.log(distance);
    //if (distance < (this.width * hoverArea)) {
    if ((Math.abs(x) <= this.width*0.5) & (Math.abs(y) <= this.height*0.5)) {
       hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
        //console.log(x,y);
    }

    if(!hover && this.hover) {
      this.onLeave();
      this.hover = false;
      //console.log('leave');
    }
  }

  onHover(x, y) {
    //console.log(this.el);
    gsap.to(this.el,  {x: 1*(x - this.x) * 0.6,y: 1*(y - this.y) * 0.6,scale: 1,ease: 'power2.out',duration: 0.7});
    this.el.style.zIndex = 10;
  }

  onLeave() {
    gsap.to(this.el, {x: 0,y: 0,scale: 1,ease: 'elastic.out(1.2, 0.4)',duration: 0.7});
    this.el.style.zIndex = 1;
  }
}
