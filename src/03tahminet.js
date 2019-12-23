

let tahminSözlüğü= {}

function tahminHazırla() {
    if (tahminler.length) sonSonucuSindir()
    if (buldunMu()) return birOlanlar()
    else {
        const flular= birSıfırOlmayanlar()   
        let denenecek= uygunKombinasyonDön(flular)
        let i= 200
        while(i--) {
            if (tahminlerdeVarMı(denenecek))
            denenecek= uygunKombinasyonDön(flular)
            if (!tahminGerçekOlabilirMi(denenecek))
            denenecek= uygunKombinasyonDön(flular)
            else break
        }
        return denenecek
    }
}

function sonSonucuSindir() {
    const sonTahmin = tahminler[tahminler.length-1]
    const sonSonuç = cevaplar[tahminler.length-1]
    if (!sonSonuç) bunlarıHepSıfırla(sonTahmin)
    sonTahmindeTekBelirsizVarsa(sonTahmin,sonSonuç)
    // n farklıları tespit
    for (let i=0; i<tahminler.length-1; i++) {
        const ortaklar= aynılarıBul(sonTahmin,tahminler[i])
        if (kaçlısı-ortaklar.length==abs(cevaplar[i]-sonSonuç)) { // kritik nokta 
            if (cevaplar[i]>sonSonuç) {
                farkınıAl(sonTahmin,tahminler[i]).map(a => tahminSözlüğü[a]= 0 )
                farkınıAl(tahminler[i],sonTahmin).map(a => tahminSözlüğü[a]= 1 )
            } else if (cevaplar[i]<sonSonuç) {
                farkınıAl(sonTahmin,tahminler[i]).map(a => tahminSözlüğü[a]= 1 )
                farkınıAl(tahminler[i],sonTahmin).map(a => tahminSözlüğü[a]= 0 )
            }
            if (!yineliTahmindenÇıkarımEkleme())
            console.log("Problemde hata var")
        }
    }
}

const bunlarıHepSıfırla = (array) => (array.map(a => tahminSözlüğü[a]=0) , yeniBirşeyKeşfedildi())

function sonTahmindeTekBelirsizVarsa (sonTahmin,sonSonuç) {
    const belirsizler= sonTahmin.filter(m => tahminSözlüğü[m]!=0 && tahminSözlüğü[m]!=1)
    if (belirsizler.length==1) {
        const işaretlenecek= belirsizler[0] 
        const eldeki= sonTahmin.reduce((top,a)=> (tahminSözlüğü[a]==1 && top++ , top), 0)
        if (sonSonuç==eldeki) tahminSözlüğü[işaretlenecek]= 0
        else if (sonSonuç-eldeki==1) tahminSözlüğü[işaretlenecek]= 1
    }
}

function yeniBirşeyKeşfedildi() {
    let bilibili= birSıfırOlanlar() 
    let birşeyDahaKeşfedildi = true
    while (birşeyDahaKeşfedildi) {
        birşeyDahaKeşfedildi = false
        for (let tah=0; tah<tahminler.length-1; tah++) {
            const tavşanlar= farkınıAl(tahminler[tah],bilibili)   
            if (tavşanlar.length==1) {
                const işaretlenecek= tavşanlar[0] 
                const eldeki= tahminler[tah].reduce((top,a)=> (tahminSözlüğü[a]==1 && top++ , top), 0)
                if (cevaplar[tah]==eldeki) {
                    tahminSözlüğü[işaretlenecek]= 0
                    bilibili.push(işaretlenecek)
                } 
                else if (cevaplar[tah]-eldeki==1) {
                    tahminSözlüğü[işaretlenecek]= 1
                    bilibili.push(işaretlenecek)
                } 
                birşeyDahaKeşfedildi = true
                break
            }
        }
    }
}
