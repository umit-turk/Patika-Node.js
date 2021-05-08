function getData(data) { //burada amacımız verileri almak
    return new Promise((resolve, reject) => {
        console.log('veriler alınmaya çalışılıyor..')

        if (data) {
            resolve('veriler alındı')//eğer başarılı olursa veriler alınacak.
        } else {
            reject('veriler alınmadı')//başarılı olmassa veriler alınamadı yazacak
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log('veriler düzenleniyor..')

        if (receivedData) {
            resolve('verilen düzenlendi')
        } else {
            reject('veriler düzenlenmedi')
        }
    })
}

/* getData(true)
.then(result => {
    console.log(result);
    return cleanData(true)
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error)
}) */

////////////////////////////


// Async - Await
// Öncelikle tüm yapıyı bir fonk ile kapsamalıyız
//şimdi bu fonksiyonunu içine await yapısı yerleştireceğim beklemesi gereken işlemi yazacağız
//async-await yapısında try-catch bloğu kullanıyoruz.
// bir işlemden sonra başka bir işlem yapıldığı zaman genelde async-await kullanılır.
async function processData() {

    try {

        const receivedData = await getData(true); //aşşağıdaki işlemlere geçmek için önce getData'yı tamamlamamız lazım.await anahtarı işlem tamamlanana kadar bekle demek
        console.log(receivedData);
        const cleanedData = await cleanData(true); // veriler temizlenene kadar bekle.
        console.log(cleanedData);
    } catch (error) {
        console.log(error)
    }
}

processData();



////////////////////////////////////////////////////


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
        books.push(newBook);
        resolve(books);
       // reject('BIR HATA OLUSTU');
    });

    return promise1;
};

async function showBooks() {

    try {
        await addBook({ name: "Kitap 7", author: "Yazar 7" })
        listBooks();
    } catch (error) {
        console.log(error)
    }
}
showBooks()

