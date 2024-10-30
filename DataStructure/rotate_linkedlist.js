class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class linkedlist{
    constructor(newnode){
        this.head=null;
    }
    append(data){
        let newnode = new Node(data)

        if(this.head === null){
            this.head = newnode;
            return
        }
        let temp = this.head;
        while(temp.next !== null){
            temp=temp.next;
        }
        temp.next=newnode;
    }
    length(){
        let temp=this.head;
        let length=0;
        while(temp !==null){
            temp=temp.next;
            length ++
        }
        return length;
    }
    printdata(){
        let temp = this.head;
        let result ='';
        while(temp !== null){
            result += temp.data;
            if(temp.next !== null) result +="->"
            temp=temp.next
        }
        console.log(result)
    }
    rotate(){
        if(!this.head || !this.head.next) return;
        let temp=this.head;
         while(temp.next.next !==null){
            temp=temp.next
         }
         let lastnode=temp.next;
         temp.next=null;
         lastnode.next=this.head;
         this.head=lastnode;   
    }
    
};
let link= new linkedlist();
let datas=[1,2,7,3,4,5];
for(let i =0;i<datas.length;i++){
    link.append(datas[i]);
}
link.printdata();
console.log("The length is",link.length());
link.rotate();
link.rotate();
link.printdata();
