class Node {
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){

    }
    pop(){

    }
    shift(){

    }
    unshift(val){

    }
    get(index){

    }
    set(index, val){

    }
    insert(index, val){

    }
    remove(index){

    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.value)
            current = current.next
        }
        console.log(arr);
    }
}