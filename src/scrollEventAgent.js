export default class ScrollEventAgent {
  constructor() {
    this.events = [];
    this.scrollPos = 0;
  }

  addEvent(callback){
    this.events.push(callback);
  }

  removeEventListener(callback){
    for(let i in this.events) {
      if (this.events[i] === callback) {
        this.events.splice(i, 1);
        return;
      }
    }
  }

  scroll(delta) {
    if (delta > 0) {
      this.scrollPos++;
    } else if (this.scrollPos > 0) {
      this.scrollPos--;
    }
    for(let elem of this.events) {
      elem.call(this, delta, this.scrollPos);
    }
    console.log(this.scrollPos);
  }
}