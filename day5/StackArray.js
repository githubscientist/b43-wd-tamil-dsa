class Stack {
    constructor() {
        // to store the items of the stack
        this.items = [];
        // to point to the topmost value's index in the stack
        // if top is -1, it means that the stack is empty
        this.top = -1; 
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(7);
stack.push(9);
stack.push(11);

stack.pop();
stack.pop();
stack.pop();

// console.log(`Topmost element is: ${stack.peek()}`);
stack.pop();
stack.pop();

console.log(stack);
console.log(`Is Stack Empty: ${stack.isEmpty()}`);