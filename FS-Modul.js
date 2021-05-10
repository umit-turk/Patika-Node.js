const fs = require('fs');

//dosya okumak

/* fs.readFile('password.txt', 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
    console.log('DOSYA OKUNDU')
}) */

//dosya yazmak
/* fs.writeFile('example.json', '{"name":"umit", "age":25}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('json dosya başarılı bir şekilde oluşturuldu.')

}); */

// veri eklemek

/* fs.appendFile('example.txt', '\n KODLUYORUZ IKINCI YAZI', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('YENI VERI EKLENDI')
}); */

//dosya silmek
/* fs.unlink('example.json',(err)=>{
    if(err) console.log(err);
    console.log('DOSYA SILINDI') 
})
 */
//KLASORLER OLUSTURMAK

/* fs.mkdir('uploads/img', { recursive: true }, (err)=>{
    if(err) console.log(err);
    console.log('Klasorler olusturuldu')
})
 */

// KLASORLER SILMEK

fs.rmdir('uploads', { recursive: true }, (err)=>{
    if(err) console.log(err);
    console.log('Klasorler silindi')
})