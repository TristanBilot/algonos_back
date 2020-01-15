const Content = require('../../../models/Content');

const fibo_rec = [
    {
        label: "In mathematics, fibonacci numbers are a sequence such that each element is the sum of the two previous numbers: \n\nFib(n) = Fib(n - 1) + Fib(n - 2)\n\nThis algorithm can be solved in a recursive way."
    },
    {
        image: "https://i.goopics.net/Zk27b.png"
    },
    {
        image: "https://i.goopics.net/Zk27b.png"
    },
    {
        label: "second label"
    },
    {
        complexity: {
            worst: 'O(2ⁿ)', 
            average: 'O(2ⁿ)',
            best: 'O(2ⁿ)'
        }
    }
];

const fibo_iter = {
    text: "Here is an example of the iterative algorithm.",
    code: "https://i.goopics.net/xPNkE.png",
    complexity: {
        worst: 'O(n)', 
        average: 'O(n)', 
        best: 'O(n))'
    }
};

const binarySearch = {
    text: "",
    code: "https://i.goopics.net/vd057.png",
    complexity: {
        worst: 'O(n²)', 
        average: 'O(n)', 
        best: 'O(log(n))'
    }
};

const bfs = {
    text: "",
    code: "https://i.goopics.net/vd057.png",
    complexity: {
        worst: 'O(n²)', 
        average: 'O(n)', 
        best: 'O(log(n))'
    }
};

const dfs = {
    text: "",
    code: "https://i.goopics.net/vd057.png",
    complexity: {
        worst: 'O(n²)', 
        average: 'O(n)', 
        best: 'O(log(n))'
    }
};

module.exports = {binarySearch, bfs, dfs, fibo_iter, fibo_rec};