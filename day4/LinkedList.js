/*
    Arrays
        - Data Structure (Built-In)
        - Indexing: first element stored at the first index 0
        - all the other elements are stored in the consecutive memory locationss
        - accessing: numbers[index] -> element index+1 (Random Access)
        - Insertion - last element: O(1), first element: O(n)
        - Deletion: O(1), O(n)
        - Methods: push, pop, unshift, shift, forEach, ...
*/

// let numbers = new Array();

// // numbers.push(1, 2, 3, 4, 5, 6, 7);
// numbers.push(8);
// numbers.push(7);
// numbers.pop();
// numbers.unshift(10);
// numbers.shift();

// console.log(numbers);

// numbers.forEach((value, index, array) => {
//     console.log(value, index, array, array[index]);
// });

/*
    Linked List
        - Types:
            1. Singly Linked List
            2. Doubly Linked List
            3. Circularly Linked List
        - Data Structure
        - Abstract Data Type: User defined data type - user defines its behaviour, data, operations
        - Non-Consecutive memory
        - Singly Linked List: Chain of nodes from different memory locations linked to one another
        - Every node has a structure of two fields:
            1. data : actual data we want to store inside the memory
            2. address: address of the next node in the memory
        - head pointer: points to the start node of the linked list
        - head: null - signifies that the linked list is empty
        - tail node is the node whose next/address field points to the value null
        - Accessing: Linear Access
        - Insertion: insert at the head - O(1), insert at the tail - O(n)/O(1)
        - Deletion: O(1), O(n)
*/

// Implementation
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        // create a new node
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head == null) {
            this.head = newNode;
        } else {
            // if the list is not empty
            newNode.next = this.head;

            this.head = newNode;
        }
    }

    insertTail(data) {
        // create a newNode
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head == null) {
            this.head = newNode;
        } else {
            // list is not empty
            let thead = this.head;

            while (thead.next != null) {
                thead = thead.next;
            }

            // thead.next = null
            // thead currently pointing to the tail node
            thead.next = newNode;
        }
    }

    printList() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        console.log(nodes);
    }

    length() {
        
    }

    deleteHead() {
        
    }

    deleteTail() {
        
    }
}

let list = new LinkedList();

list.insertHead(5);
list.insertHead(4);
list.insertTail(6);

list.printList();

/*
    list = LinkedList {
        head: Node {
            data: 5,
            next: null
        }
    }
*/