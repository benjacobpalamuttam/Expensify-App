// const book = {
//     title: 'Harry Potter',
//     author: 'J.K Rowling',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const coffee = ['coffee(ice)','2.50','62.75','72.25'];

const [drink,,medium='2']=coffee;

console.log(`This is medium ${drink} which costs ${medium}`);