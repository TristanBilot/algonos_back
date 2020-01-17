const Content = require('../../../models/Content');

const stack = [
    {
        label: "A stack is a data structure which follows the LIFO order (Last In First Out). \
This data structure is widely used beacause of its structure and the constant time of each operation.\nThe three main operations are:\n\
- Push => add an element to the top of the stack\n\
- Pop => delete the top element\n\
- Peek => return the value of the top element\n"
    },
    {
        title: "Linked list implementation"
    },
    {
        image: "https://i.goopics.net/xPJGp.png"
    },
    {
        image: "https://i.goopics.net/ADe2o.png"
    },
    {
        complexity: {
            worst: "O(1)",
            average: "O(1)",
            best: "O(1)"
        }
    },
    {
        title: "Array implementation"
    },
    {
        label: "A stack can also be implemented using an array, the cons are that we need to use a static size for the array so a limited number of elements."
    },
    {
        image: "https://i.goopics.net/0q8Nw.png"
    },
    {
        complexity: {
            worst: "O(1)",
            average: "O(1)",
            best: "O(1)"
        }
    }
    
];

const queue = new Content({
    text: "",
    code: "https://i.goopics.net/vd057.png",
    complexity: {
        worst: 'O(n²)', 
        average: 'O(n)', 
        best: 'O(log(n))'
    }
});

const binaryTree = new Content({
    text: "",
    code: "https://i.goopics.net/vd057.png",
    complexity: {
        worst: 'O(n²)', 
        average: 'O(n)', 
        best: 'O(log(n))'
    }
});

const heap = new Content({
    text: "",
    code: "https://i.goopics.net/vd057.png",
    complexity: {
        worst: 'O(n²)', 
        average: 'O(n)', 
        best: 'O(log(n))'
    }
});

module.exports = {stack, queue, binaryTree, heap};