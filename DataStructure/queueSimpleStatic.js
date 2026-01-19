class Queue{
  constructor(maxSize){
    this.maxSize = maxSize;
    this.queue = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(item){
    if(this.rear === this.maxSize-1){
      console.log("Queue is Full");
      return false;
    }
    else{
      if(this.front === -1){
        this.front = 0;
      }
      this.rear++;
      this.queue[this.rear] = item;
      return true;
    }
  }

  dequeue(){
    if(this.front === -1 || this.front > this.rear){
      console.log("Queue is empty");
      return false;
    }
    const removed = this.queue[this.front];
    this.queue[this.front] = undefined;
    this.front++;

    if(this.front>this.rear){
      this.front=this.rear= -1;
    }
    return removed;
  }

  display(){
    if(this.front === -1){
      console.log("Queue is empty");
      return;
    }
    else{
      console.log("The Queue ");
      for(let i= this.front;i<=this.rear;i++)
        console.log(this.queue[i]);
    }
  }
}

const myQueue = new Queue(7);
myQueue.enqueue(2);
myQueue.enqueue(15);
myQueue.display();
myQueue.enqueue(44);
myQueue.enqueue(25);
myQueue.display();
myQueue.dequeue();
myQueue.display();
myQueue.dequeue();
myQueue.display();
