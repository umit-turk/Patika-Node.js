/* console.log('1. görev');
console.log('2. görev');
console.log('3. görev'); */

/* const func1 = () => {
    console.log('func1 tamamlandı');
}
const func2 = () => {
    console.log('func2 tamamlandı');
}
func2();
func1(); */

/* const func1 = () => {
    console.log('func1 tamamlandı');
    func2();
}
func2 = () => {
    console.log('func2 tamamlandı');
    func3()
}
func3 = () => {
    console.log('func3 tamamlandı');
}
func1() */

/* const func1 = () => {
    console.log('func1 tamamlandı');
    func3();
}
func2 = () => {
    console.log('func2 tamamlandı');
    
}
func3 = () => {
    console.log('func3 tamamlandı');
    func2()
}
func1() */
// javascript'in kendisi her zaman senkron olarak çalışır
// javascript single thread 
// javascript kodunu manipüle ederek sanki dışarıdan asenkron çalışıyormuş gibi durur.

/* 
let x = 5;
console.log('1.gelen veri', x);

setTimeout(() => {
    x = x + 5;
    console.log('2. gelen veri',x);
}, 3000);


x = x + 5;
console.log('3. gelen veri',x);
 */

/* 
const books = [
    {name: 'book 1', author: 'Yazar 1'},
    {name: 'book 2', author: 'Yazar 2'},
    {name: 'book 3', author: 'Yazar 3'}
];

const listBooks = () => {
    books.map(book=>{
        console.log(book.name)
    })
};


const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

addBook({name: 'book 4', author: 'Yazar 4'}, listBooks); */

////////////////////////////////////////

//aynı anda başka bir işlemin yapılmasını istiyorum demek callback ile.

function writeName(name, callback){
    callback(name);
}
function writer(word){
    console.log(word)
}
writeName("Umit", writer);//writeName fonk çalıştırılırken writer fonk callback işlevi görüyor.

//callback fonk başka bir fonk içinde argüman olarak kullanılabilir.
//aynı zamanda writeName yüksek seviyeli fonktur.