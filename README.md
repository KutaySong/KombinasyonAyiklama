( English description below         )
( Project Name: Combination Finder  )


# NE YAPAR ?                                
C(M,N) kombinasyonu için minimum tahminde doğru N'yi bulmaya çalışır.

Örnek:

0.   5  _  3  2  _   (bu seçimi bulmaya çalışsın) 
------------------
1.   _  4  3  2  _   ++  (ilk aldığı geri bildirim: "2 tane tutturdun")
2.   5  4  _  _  1   +   (ikinci deneme: burada 4'ün olmadığı anlaşılıyor)   
3.   _  _  3  2  1   ++ 
4.   5  _  3  2  _   +++ (sonuç bulundu)      


![Alt Text](images/EK1.jpg?raw=true "EkranKesiti")

![Alt Text](images/EK2.jpg?raw=true "EkranKesiti")


## Etkileşim
Kendi istediğiniz bir problemde test etmek isterseniz:

  /src/1hazırlık.js - 26.satır :

    bulunacak= uygunKombinasyonDön()

  şu şekilde değiştiriniz :

    // bulunacak= uygunKombinasyonDön()
    bulunacak= [1,3,4,7]

Ayrıca soru ebatlarını da değiştirebilirsiniz. Öntanımlı olarak C(10,4) arıyor.
Bunları /src/1hazırlık.js - ilk satır : kaçın: 25 kaçlısı: 5 (örnek) değiştirebilirsiniz.


## Harezmik Yöntem
Tahmini önceki tüm tahminlerle karşılaştırıp şu ihtimali araştırır :

(Tahmin edilen rakamlardaki değişim == artılardaki değişim)

Örnek :
-------
1.   1 2 3  + + 
2.   1 2 4  + + +

Burada 4'ün kesinlikle olduğu ve 3'ün kesinlikle olmadığı sonucunu çıkarır.
Bu sonuçları sözlüğüne yazarak , işlemi yineli (recursive) tekrarlar.



# WHAT FOR ?
C(M,N) tries to find the correct N combination in minimum # of trials. 

  Example:

0.   5     3  2      (algorithm is trying to find these numbers)
-----------------
1.      4  3  2      ++  (first response:"You got 2 of them right")
2.   5  4        1   +   (second response: "4" is understood be non-existing)   
3.         3  2  1   ++ 
4.   5     3  2      +++ (Bingo , all the correct numbers)      
  

![Alt Text](images/EK1.jpg?raw=true "EkranKesiti")

![Alt Text](images/EK2.jpg?raw=true "EkranKesiti")


## User IO
If you wish to test it on any other problem, you need to dive in the code :

  /src/1hazırlık.js - 26.line :

    bulunacak= uygunKombinasyonDön()

  should be replaced like this :

    // bulunacak= uygunKombinasyonDön()
    bulunacak= [1,3,4,7]

Additionally if you want to change the margins of the problem set.
The problem is predefined C(10,4), each time selects a new random combination of four.

You may change these parameters from
/src/1hazırlık.js - first line:  (example)
const kaçın= 25; const kaçlısı= 8;


## Algorithm :
Examines the new guess in correlation with all previous guesses.

if (number of difference in guesses == number of difference in plusses)
then inference

For Example :
-------------
//   1 2 3  + + 
//   1 2 4  + + +

Here it is inferred that 4 is rightfully in the selection and 3 is absolutely not.
Writing these inferences to the dictionary, algorithm re-examines recursively.