const Category = require('../models/Category');
const Course = require('../models/Course');
const cat = require('./categories/categoriesMethods');
const cou = require('./courses/coursesMethods');

/* +++++++++++ Categories stuffs +++++++++++ */

let categories = [
    "Algorithm", 
    "Data structures", 
    "Sorting"
    // "Deep Learning"
];

const createCategories = async () => {
    await cat.insertCategory(categories[0], "https://i.goopics.net/lpwGp.png");
    await cat.insertCategory(categories[1], "https://i.goopics.net/ELAeD.png");
    await cat.insertCategory(categories[2], "https://i.goopics.net/dd87r.png");
    // cat.insertCategory(categories[3], "https://i.goopics.net/QLDxV.png");
}

/* +++++++++++ Courses stuffs +++++++++++ */
const createCourses = async () => {
    let path = './courses/data/';
    let algorithms = require(path + 'algorithms');
    let data_str = require(path + 'data_structures');
    let sorts = require(path + 'sorts');

    var algorithmId = await Category.findOne({name: categories[0]});
    algorithmId = algorithmId._id;

    var data_strId = await Category.findOne({name: categories[1]});
    data_strId = data_strId._id;

    var sortingId = await Category.findOne({name: categories[2]});
    sortingId = sortingId._id;

    let categoriesId = [
        algorithmId,
        data_strId,
        sortingId
    ];

    /* ALGORITHM */
    cou.insertCourse('Fibonnaci', [algorithms.fibo_rec], categoriesId[0]);
    cou.insertCourse('Hanoi Towers', [algorithms.hanoi], categoriesId[0]);
    cou.insertCourse('Binary search', [algorithms.binarySearch], categoriesId[0]);
    cou.insertCourse('Breadth First Search', [algorithms.bfs], categoriesId[0]);
    cou.insertCourse('Depth First Search', [algorithms.dfs], categoriesId[0]);

    /* DATA STRUCTURE */
    cou.insertCourse('Stack', [data_str.stack], categoriesId[1]);
    cou.insertCourse('Queue', [data_str.queue], categoriesId[1]);
    cou.insertCourse('Binary Tree', [data_str.binaryTree], categoriesId[1]);
    cou.insertCourse('Heap', [data_str.heap], categoriesId[1]);

    /* SORTING */
    cou.insertCourse('Bubble sort', [sorts.bubbleSort], categoriesId[2]);
    cou.insertCourse('Heap sort', [sorts.heapSort], categoriesId[2]);
    cou.insertCourse('Selection sort', [sorts.selectionSort], categoriesId[2]);
};

// createCategories();
// createCourses();