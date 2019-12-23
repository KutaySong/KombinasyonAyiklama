
const kaçın= 10; const kaçlısı= 4;
let bulunacak= []


function setup() {    //katmanları olustur
  createCanvas(innerWidth-30, innerHeight-40);
  background(0);
  colorMode(HSB);
  fill("darkblue")
  textSize(80);
  text ("Open Console: F12", 100, 100)
  setTimeout(()=> background(0),10000)
  frameRate(60)
  soruHazırla();
}

function soruHazırla(ekranaYazsan= true) {
  tahminler= []
  cevaplar= []
  tahminSözlüğüHazırla()
  if (kaçın<kaçlısı) {
    console.log("Veriler Yanlış",kaçlısı,kaçın,"den büyük olamaz")
    return
  }
  bulunacak= uygunKombinasyonDön()
  if(ekranaYazsan) {
    ekranaYaz(bulunacak,kaçlısı)
    başlıkYaz();
    çızgıAt()
  }
}

function tahminSözlüğüHazırla () {  // olasılık havuzuna çevirilebilir ilerde
  for (let ii=1; ii<=kaçın; ii++) {
    tahminSözlüğü[ii]= 0.5
  }
}

function ekranaYaz(liste,artısayısı) {
  if (skorlar.length) return
  let string= ""
  for (let ii=1; ii<=kaçın; ii++) {
    if (liste.indexOf(ii)<0) string += "   "
    else if (ii<10) 
    string += ii + "  "
    else
    string += ii + " "
  }
  string += " "
  while (artısayısı--)
  string += "+"
  console.log(string)
}

function başlıkYaz() {
  let string= ""
  for (let ii=1; ii<=kaçın; ii++) {
    if (ii<10)
    string += ii + "  "
    else
    string += ii + " "
  }
  console.log (string)
}

function çızgıAt() {
  console.log("--------------------------K U T A Y  S O N G U L-----------------------------")
}