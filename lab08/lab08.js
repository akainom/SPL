let user = {
    name: 'Masha',
    age: 21
};

let numbers = [1, 2, 3];

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
];

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8 },
            { programming: true, mark: 4 }
        ]
    }
};

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD'
                }
            },
            { 
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            }
        ]
    }
};

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Petrov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1}
                    ]
                }
            },
            { 
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Ivanov',
                    degree: 'PhD',
                    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1}
                    ]
                }
            }
        ]
    }
};

// Original and copy outputs
console.log('Original user:', user);
let userCopy = {...user};
console.log('Copied user:', userCopy);

console.log('Original numbers:', numbers);
let numbersCopy = [];
for (let i = 0; i < numbers.length; i++) {
    numbersCopy[i] = numbers[i];
}
console.log('Copied numbers:', numbersCopy);

console.log('Original user1:', user1);
let user1Copy = {...user1, location: {...user1.location}};
console.log('Copied user1:', user1Copy);

console.log('Original user2:', user2);
let user2Copy = {...user2, skills: []};
for (let i = 0; i < user2.skills.length; i++) {
    user2Copy.skills[i] = user2.skills[i];
}
console.log('Copied user2:', user2Copy);

console.log('Original array:', array);
let arrayCopy = [];
for (let i = 0; i < array.length; i++) {
    arrayCopy[i] = {...array[i]};
}
console.log('Copied array:', arrayCopy);

console.log('Original user4:', user4);
let user4Copy = {...user4, studies: {...user4.studies, exams: {...user4.studies.exams}}};
console.log('Copied user4:', user4Copy);

console.log('Original user5:', user5.studies.exams[0], user5.studies.exams[1]);
let user5Copy = {...user5, studies: {...user5.studies, exams: []}};
user5Copy.studies.exams[0] = user5.studies.exams[0];
user5Copy.studies.exams[1] = user5.studies.exams[1];
user5Copy.studies.exams[1].mark = 10;

console.log('Copied user5:', user5Copy.studies.exams[0], user5Copy.studies.exams[1]);

console.log('Original user6:', user6);
let user6Copy = {...user6, studies: {...user6.studies, exams: []}};
for (let i = 0; i < user6.studies.exams.length; i++) {
    user6Copy.studies.exams[i] = {
        ...user6.studies.exams[i],
        professor: {...user6.studies.exams[i].professor}
    };
}
console.log('Copied user6:', user6Copy);

console.log('Original user7:', user7);
let user7Copy = {...user7, studies: {...user7.studies, exams: []}};
for (let i = 0; i < user7.studies.exams.length; i++) {
    user7Copy.studies.exams[i] = {
        ...user7.studies.exams[i],
        professor: {
            ...user7.studies.exams[i].professor,
            articles: []
        }
    };
    for (let j = 0; j < user7.studies.exams[i].professor.articles.length; j++) {
        user7Copy.studies.exams[i].professor.articles[j] = {...user7.studies.exams[i].professor.articles[j]};
    }
}
console.log('Copied user7:', user7Copy);

user5Copy.studies.department.group = 12;
user5Copy.studies.exams[1].mark = 10;
user6Copy.studies.exams[1].professor.name = 'New Professor Name';
let cssArticle = user7Copy.studies.exams.find(exam => exam.professor.name === 'Petr Ivanov').professor.articles.find(article => article.title === 'About CSS');
if (cssArticle) {
    cssArticle.pagesNumber = 3;
}
console.log("Modified copies : ");
console.log("Modified user5 :", user5Copy,user5Copy.studies.exams[1].mark);
console.log("Modified user6 :", user6Copy.studies.exams[1].professor.name);
console.log("Modified user7 :", user7Copy.studies.exams[1].professor.articles[1].pagesNumber);

// Store example
let store = {
    state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi', likesCount: 12}, {id: 2, message: 'By', likesCount: 0}]
        },
        dialogsPage: {
            dialogs: [{id: 1, name: 'Valera'}, {id: 2, name: 'Andrey'}, {id: 3, name: 'Sasha'}, {id: 4, name: 'Viktor'}],
            messages: [{id: 1, message: 'hi'}, {id: 2, message: 'hi'}, {id: 3, message: 'hi hi hi'}],
            sidebar: []
        }
    }
};

for (let i = 0; i < store.state.dialogsPage.messages.length; i++) {
    store.state.dialogsPage.messages[i].message = 'Hello';
}

// Log the store state after modifications
console.log('Updated store state:', store);