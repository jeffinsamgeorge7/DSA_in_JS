class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    } 
}
class Linkedlist{
    constructor(newNode){
        this.head=null;
    }
    append(data){                                     //insert data at end
        let newNode = new Node(data);

        if(this.head === null){           //if head is null       
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while(temp.next !== null){
            temp=temp.next;
        }
        temp.next=newNode
    }  
    unshift(data){                                //insert data at begining
        let newNode = new Node(data);

        if(this.head ===null){
            this.head = newNode;
            return
        }
        newNode.next = this.head;
        this.head= newNode;
    }
    position(data,pos){                          //insert data at position
        let newNode = new Node(data)
        if(pos === 0){
            this.unshift(data)
        }
        let temp =this.head;
        let count = 0;

        while(temp !== null && count<pos-1){
            temp=temp.next;
            count++
        }
        if(temp === null){
            console.log("Position is out of range");
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }
    printList(){
        let temp=this.head; 
        let result='';
        while(temp !== null){
           // console.log(temp.data);
            result += temp.data;
            if(temp.next !== null) result +="->"
            temp=temp.next
        }
        console.log(result)
    }
}

let link = new Linkedlist();
link.append(1);
link.append(7);
link.append(5);
link.printList()
console.log("Insertion at Begining");
link.unshift(11);
link.printList()
console.log("Insertion at Postion 1");
link.position(15,1);
link.printList()
console.log("Insertion at End");
link.append(17);
link.printList()
