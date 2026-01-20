//Represent a single node in Linked list
class Node{
  constructor(data){
    this.data = data;  // value store in node
    this.next = null;  // pointer to the next node
  }
}

//Queue implementations using singly Linked list(FIFO)
class Queue{
  constructor(){
    this.front = null;  //points to the first element
    this.rear = null;   //points to the last element
    this.size = 0;      //track the number of elements in queue
  }

  //Add an element to end of the Queue
  enQueue(data){
    const newNode = new Node(data);

    //if Queue is empty, both front and rear points to newNode
    if(!this.rear){
      this.front = this.rear =newNode;
    }
    else{
      //Link newNode to the end and move rear point
      this.rear.next = newNode;
      this.rear = newNode;
    }

    //update size after sucessfull insertion
    this.size++;
    return true;
  }

  //Remove and return the element of the queue
  deQueue(){
    //underflow condition
    if(!this.front){
      console.log("Queue is empty");
      return;
    }
    const removed = this.front.data;
    //Move front pointer to next node(FIFO)
    this.front = this.front.next;
    this.size--;

    //If queue become empty, reset rear
    if(!this.front){
      this.rear = null;
    }
    return removed;
  }

  //return the current size of queue
  getSize(){
    return this.size;
  }

  //Return all elements in queue from front to rear
  display(){
    let temp = this.front;
    let q = [];

    //Traverse the linked list without modifying the queue 
    while(temp){
      q.push(temp.data);
      temp=temp.next;
    }
    console.log(q.join('->'));
  }
}

const myQueue = new Queue();
console.log(`Size of queue is ${myQueue.getSize()}`);
myQueue.enQueue(7);
myQueue.enQueue(2);
myQueue.enQueue(9);
myQueue.display();
console.log(`Size of queue is ${myQueue.getSize()}`);
console.log(`Removed element  ${myQueue.deQueue()} from queue`);
myQueue.display();
console.log(`Size of queue is ${myQueue.getSize()}`)
