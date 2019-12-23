

function tahminGerçekOlabilirMi (tahmin) {
    let olasıTahminSözlüğü = kopi(tahminSözlüğü)
    tahmin.map(t1 => olasıTahminSözlüğü[t1]= 1)
    
    if (!sözlükTahminlerleÖrtüşüyorMu(olasıTahminSözlüğü)) return false
    else if (yineliTahmindenÇıkarımEkleme(olasıTahminSözlüğü)) return true
    else return false
}


function sözlükTahminlerleÖrtüşüyorMu(sözlük=tahminSözlüğü) {
    for (let tah=0; tah<tahminler.length-1; tah++) {
        let birAdedi= tahminler[tah].reduce((top,a)=> (sözlük[a]==1 && top++ , top), 0)
        let belirsizAdedi= tahminler[tah].reduce((top,a)=> (sözlük[a]==0.5 && top++ , top), 0)

        if (birAdedi+belirsizAdedi<cevaplar[tah] || birAdedi>cevaplar[tah])
        return false
    }
    return true
}


function yineliTahmindenÇıkarımEkleme(sözlük=tahminSözlüğü) {
    let bilibili= birSıfırOlanlar(sözlük) 
    let birşeyDahaKeşfedildi = true
    while (birşeyDahaKeşfedildi) {
        birşeyDahaKeşfedildi = false
        for (let tah=0; tah<tahminler.length-1; tah++) {
            const tavşanlar= farkınıAl(tahminler[tah],bilibili)   
            if (tavşanlar.length==1) {
                const işaretlenecek= tavşanlar[0] 
                const eldeki= tahminler[tah].reduce((top,a)=> (sözlük[a]==1 && top++ , top), 0)
                if (cevaplar[tah]==eldeki)        { sözlük[işaretlenecek]= 0; bilibili.push(işaretlenecek) }
                else if (cevaplar[tah]-eldeki==1) { sözlük[işaretlenecek]= 1; bilibili.push(işaretlenecek) }
                
                if (sözlükTahminlerleÖrtüşüyorMu(sözlük)) {
                    birşeyDahaKeşfedildi = true
                    break
                } else return false
            }
        }
    }
    return true
}