// js de bir işlemin sonucunu temsil eden bir js nesnesidir.
//promisimiz ya olumlu sonuç dönüyor ya da olumsuz.

/*
const promise1 = new Promise((resolve, reject) => {
    resolve('veriler alındı');
    reject('bağlantı hatası');
});

/* console.log(promise1); */
/*
promise1
    .then(value => {
        console.log(value)
    }).catch(error => {
        console.log(error)
    }); */

//biz bir kere resolve dedikten sonra ve sorun çözüldükten sonra promise statesi değişmez.




///////////////////////////////
///callbacktan promise çevirme

const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
  ];
  
  const listBooks = () => {
    books.map((book) => {
      console.log(book.name);
    });
  };
  
  const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
      //books.push(newBook);
      reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  addBook({ name: "Kitap 4", author: "Yazar 4" })
    .then(() => {
      console.log("YENI LISTE");
      listBooks();
    })
    .catch((error) => {
      console.log(error);
    });
  
  listBooks();