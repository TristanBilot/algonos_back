const Content = require('../../../models/Content');

const binarySearch = new Content({
    text: "",
    code: "https://i.goopics.net/vd057.png",
    complexity: {
        worst: 'O(n²)', 
        average: 'O(n)', 
        best: 'O(log(n))'
    }
});

const bfs = new Content({
    text: "",
    code: "https://i.goopics.net/vd057.png",
    complexity: {
        worst: 'O(n²)', 
        average: 'O(n)', 
        best: 'O(log(n))'
    }
});

const dfs = new Content({
    text: "",
    code: "https://i.goopics.net/vd057.png",
    complexity: {
        worst: 'O(n²)', 
        average: 'O(n)', 
        best: 'O(log(n))'
    }
});

module.exports = {binarySearch, bfs, dfs};