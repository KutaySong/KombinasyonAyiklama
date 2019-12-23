

const buldunMu= () => Object.values(tahminSözlüğü).reduce((top,deger) => (deger==1 && top++ , top),0) == kaçlısı

function birOlanlar(sözlük=tahminSözlüğü) {
    let değerler = Object.values(sözlük)
    let olanlar = []
    for (let i=1; i<=kaçın; i++) {
        if (değerler[i-1]==1)
        olanlar.push(i)
    }
    return olanlar
}

function birSıfırOlmayanlar(sözlük=tahminSözlüğü) {
    let değerler = Object.values(sözlük)
    let olmayanlar = []
    for (let i=1; i<=kaçın; i++) {
        if (değerler[i-1]!=0 && değerler[i-1]!=1)
        olmayanlar.push(i)
    }
    return olmayanlar
}

function birSıfırOlanlar(sözlük=tahminSözlüğü) {
    let değerler = Object.values(sözlük)
    let olanlar = []
    for (let i=1; i<=kaçın; i++) {
        if (değerler[i-1]==0 || değerler[i-1]==1)
        olanlar.push(i)
    }
    return olanlar
}