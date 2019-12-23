
let tahminler= []
let cevaplar= []
let skorlar= []

function draw() {     // ESAS DONGU
    const yeniTahmin= tahminHazırla()
    const yeniCevap=  sor(yeniTahmin)
    ekranaYaz(yeniTahmin,yeniCevap)
    tahminler.push(yeniTahmin)
    cevaplar.push(yeniCevap)
    if (yeniCevap==kaçlısı) { noLoop(), skorlar.push(tahminler.length) 
        if (skorlar.length==1)  console.log(tahminler.length) 
    }
}


const kopi = (anam) => JSON.parse(JSON.stringify(anam))

const bekle = (ms=0) => new Promise(resolve => setTimeout(resolve, ms))

const sor = (tahmin) => tahmin.reduce((top,tah) => (bulunacak.includes(tah) && top++ , top), 0)

const aynılarıBul = (a1,a2) => a1.reduce((aynı,a) => (a2.includes(a) && aynı.push(a), aynı), [])

const farkınıAl = (a1,a2) => a1.reduce((farklı,a) => (!a2.includes(a) && farklı.push(a), farklı), [])


function uygunKombinasyonDön(array=[]) {
    let seçilecekHavuzu= []
    if (array.length>0) {
        let arzulanan= kopi(array)
        if (arzulanan.length<=kaçlısı) {
            const birler= birOlanlar()
            const fark= kaçlısı-birler.length
            arzulanan = birler.concat(kombinasyonDön(arzulanan,fark))
        } 
        seçilecekHavuzu= arzulanan
    } else
    for (let ii=1; ii<=kaçın; ii++) seçilecekHavuzu.push(ii)
    
    if (seçilecekHavuzu.length<kaçlısı) debugger
    
    return kombinasyonDön(seçilecekHavuzu,kaçlısı)
}

function kombinasyonDön (elenmiş,tane) {
    let tahmin= []
    while (tahmin.length<tane) {
        const pikaçu= elenmiş.splice(floor(random(elenmiş.length)),1)[0]
        tahmin.push(pikaçu)
    }
    return tahmin.sort()
}

function tahminlerdeVarMı (yeniTahmin) {
    
    return tahminler.some(eskiTahmin => yeniTahmin.every(yT => eskiTahmin.includes(yT)))
    
}