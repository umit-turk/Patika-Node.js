//terminal ekranından argüman girebileceğimiz bir çalışma
//iki sayı arasındaki asal sayıları gösteren bir çalışma

const arguments = process.argv.slice(2);

function showPrimeNumbers(lownumber, highnumber){
    for(let i = lownumber; i <= highnumber; i++){
        let isPrime = true;//sanki tüm sayıların tamamını asal sayı gibi düşüneceğim,sonra koşul sağlamayanları eleyeceğiz.
        for (let j = 2; j <= i; j++){ //bir sayının asal sayı olup olmadığını 2 den başlayarak bölmeye çalışacağım
            if(i % j ===0 && j !== i){//i'nin j'ye bölümünden kalan sıfırsa ve j sayısı i sayısına eşit değilse
                isPrime =false;
            }
        }
        if(isPrime){
            console.log(i)
        }
    }
}

showPrimeNumbers(arguments[0]*1, arguments[1]*1);  

//bir ile çarpma sebebimi< bize sitring değer dönüyor ve biz bunları number'a dönüşütrmeliyiz
// ilk iki eleman bize node yi ve çalıştırdığımız dosyayı gösteriyor onları istemiyoruz.
// proses nesnesi node.js'e ait olan global nesnelereden birtanesidir ve bize o anki işlem ile ilgili bilgiler verir.process.argv özelliği neymiş
//process.argv sonunda bize bir array dönüyor.

//node primeNumbers 2 11 3. ve 4. parametre olarak 2 ve 11 yazarsak bize array'in içerisinde dönüyor.

//çalışmaları daha dinmik hale getirmek için küçük ve büyük sayıları biz girmek isteriz.
