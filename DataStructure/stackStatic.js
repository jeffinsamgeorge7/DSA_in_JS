class Stack{
  constructor(maxSize){
    if(!Number.isInteger(maxSize) || maxSize <= 0){
      console.log("The size should be postitive integer");
      return null;
    }
    this.maxSize = maxSize;
    this.stack = new Array(maxSize); //pre allocate array
    this.top = -1;  //stack is empty
  }
  
  //Check stack is empty
  isEmpty(){
    return this.top === -1;
  }

  //Check stack is Full
  isFull(){
    return this.top === this.maxSize - 1 ;
  }

  //Insert(push) the data
  push(item){
    if(this.isFull()){
      console.log("Stack is Overflow");
      return null;
    }
    this.top++;
    this.stack[this.top] = item;
    return true;
  }
  //Delete(pop) the data
  pop(){
    if(this.isEmpty()){
      console.log("Stack is Underflow");
      return null;
    }
    const value = this.stack[this.top];
    this.stack[this.top] = undefined;
    this.top--;
    return value;
  }
  //Peek value
  peek(){
    if(this.isEmpty()){
      console.log("Stack is Underflow");
      return null;
    }
    return this.stack[this.top];
  }
  //Display
  display(){
    if(this.isEmpty()){
      console.log("Stack is Underflow");
      return null;
    }
    for(let i=this.top;i>=0;i--){
      console.log(this.stack[i]);
    }
  }

}

const mystack = new Stack(7);
mystack.push(2);
mystack.push(15);
mystack.push(10);
mystack.display();
console.log(`The deleted element is ${mystack.pop()}`);
mystack.display();

