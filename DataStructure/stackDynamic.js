class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.size = 0
  }

  push(data){
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++
    return true;
  }

  pop(){
    if(!this.top){
      console.log("Stack is Empty!");
    }
    const value  = this.top.data;
    this.top = this.top.next;
    this.size--;
    return value;
  }

  peek(){
  if(!this.top){
    console.log("Stack is Underflow!");
  }
  return this.top.data;
  }

  display(){
    if(!this.top){
      console.log("Stack is Underflow");
      return ;
    }
    else{
      let current = this.top;
      while(current){
        console.log(current.data);
        current = current.next;
      }
    }
  }
}

const mystack = new Stack();
mystack.push(7);
mystack.push(5);
mystack.push(20);
mystack.push(1);
mystack.push(21);
mystack.display();
console.log("Peek value is ",mystack.peek());
console.log("Deleted element",mystack.pop());
console.log("Peek value is ",mystack.peek());
mystack.display()
