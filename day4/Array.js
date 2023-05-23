class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next ? next : null;
    }
}

class Array {
    constructor() {
        this.head = null;
    }

    toString() {
        let nodes = [];

        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    push(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let thead = this.head;

            while (thead.next != null) {
                thead = thead.next;
            }

            thead.next = newNode;
        }
    }

    whileEach(func) {
        let thead = this.head;
        let index = 0;
        let nodes = [];

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        thead = this.head;
        while (thead != null) {
            func(thead.data, index++, nodes);
            thead = thead.next;
        }
    }
}

module.exports = Array;