// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

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

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let expression = userInput[0];

    // create an empty stack
    let stack = new Stack();

    // traverse the expression
    for (let index = 0; index < expression.length; index++){
        if (expression[index] == '(') {
            // push the index into the stack
            stack.push(index);
        } else if (expression[index] == ')') {
            // check if the stack is empty or not
            if (!stack.isEmpty()) {
                // stack is not empty
                stack.pop();
            } else {
                // stack is empty
                expression = expression.slice(0, index) + expression.slice(index + 1,);
                index--;
            }
        }
    }

    while (!stack.isEmpty()) {
        let index = stack.peek();
        // delete the char at the index 'index'
        expression = expression.slice(0, index) + expression.slice(index + 1,);
        // pop the stack
        stack.pop();
    }

    console.log(expression);

  //end-here
});