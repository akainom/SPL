const numbers = [1, 2, 3, 4, 5];
const [y] = numbers; // y будет равен 1
const user = 
{
    name: 'John',
    age: 30
};

const admin = 
{
    admin: true,
    ...user
};
// admin будет равен { admin: true, name: 'John', age: 30 }

let store = 
{
    state: 
    {
        profilePage: 
        {
            posts: 
            [
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'By', likesCount: 1 },
            ]
        },
        dialogs: 
        [
            { id: 1, name: 'Valera' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Viktor' }
        ],
        messages: 
        [
            { id: 1, message: 'hi' },
            { id: 2, message: 'hi hi' },
            { id: 3, message: 'hi hi hi' },
        ],
    },
    sidebar: [],
};

const { state: { profilePage: { posts }, dialogs, messages } } = store;

posts.forEach(
    post => 
    {
        console.log(post.likesCount);
    });

const evenIdDialogs = dialogs.filter(dialog => dialog.id % 2 == 0);

const updatedMessages = messages.map(message => (
{
    ...message,
    message: 'Hello user'
}));

console.log("1");
console.log(evenIdDialogs);
console.log(updatedMessages);
let tasks = 
[
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false },
];

const newTask = { id: 6, title: "NodeJS", isDone: false };

tasks = [...tasks, newTask];

console.log(tasks);

function sumValues(...args) 
{
    return args.reduce((acc, curr) => acc + curr, 0);
}

const values = [1, 2, 3];

const result = sumValues(...values);

console.log(result); // Вывод: 6