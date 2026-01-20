class Queue{
  constructor(maxSize){
    this.maxSize = maxSize;
    this.queue = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
  }

  //Insert element(LIFO)
  enqueue(element){
    if(this.front === (this.rear+1)%this.maxSize){
      console.log("Queue is empty");
      return;
    }

    //Insert element at rear
    if(this.front === -1){
      this.front=0;
    }
    //move rear circularly
    this.rear = (this.rear+1)%this.maxSize;
    this.queue[this.rear] = element;
  }

  //Delete element at front
  dequeue(){
    if(this.front === -1){
      console.log("Queue is empty!");
      return;
    }
    const removed = this.queue[this.front];
    this.queue[this.front] = undefined;

    //Queue become empty after removal
    if(this.front === this.rear){
      this.front = this.rear = -1;
    }
    // move front circularly
    else{
      this.front = (this.front+1)%this.maxSize;
    }
    return removed;
  }

  //display queue elements
  display(){
    if(this.front === -1){
      console.log("Queue is empty");
      return;
    }
    let i=this.front;
    while(true){
      console.log(this.queue[i]);

      if(i === this.rear) break;
      i = (i+1)%this.maxSize;
    }
  }
}

const myqueue = new Queue(10);
myqueue.enqueue(2);
myqueue.enqueue(5);
myqueue.enqueue(7);
myqueue.display();
console.log("Removed item element is ",myqueue.dequeue());
myqueue.display();
