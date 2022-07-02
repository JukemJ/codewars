const data1 = "What do you remember? When I looked at his streaky glasses, I wanted " +
         "to leave him. And before that? He stole those cherries for me at midnight. We were walking " +
         "in the rain and I loved him. And before that? I saw him coming " +
         "toward me that time at the picnic, edgy, foreign."

const data2 = "Some say the world will end in fire, Some say in ice. From what I've tasted of desire " +
         "I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate" +
         " To say that for destruction ice Is also great And would suffice."

const data1Sol =
"\vctg?.nadr d gdbW\n\v,i    lnis tl eh\n\v mtIAakietboaara\n\veeo nnigsoe st?t\n\vd wsddnh lfls   \n\vgaaa  gtfeoeehWd\n" +
"\vytrwbI .o rasiho\n\v, d e i rtev,se \n\v t hflnW h e  ny\n\vfhmioo emot Is o\n\voeemrvt eshh tIu\n\vr   eehw eaiwr  \n" +
"\veptc deea tmaelr\n\viihot  rtc?.naoe\n\vgcamhhre h  tkom\n\vnntiaia meHAeyke\n\v.i ntmiwirend em"

const data2Sol =
"fa  h ttrheI ilS\nitifakw   s'irdo\nc cotnihftivce m\neAereocaihree,we\n.n   wedroe . i \n\vdIdT , es t Sls\n\v seoe t.eIaFola\n" +
"\vw s nIo   srm y\n\voatso  Bwhtoee \n\vulrautpuhoem nt\n\vlsuyghetold sdh\n\vdoc hir  d wa e\n\v  tt niif ohyi \n\vsgihoksfawfa nw\n" +
"\vuroaf h vi ti o\n\vfent I iotd nfr"

function code(s) {
    let size = Number.isInteger(Math.sqrt(s.length)) ? Math.sqrt(s.length) : Math.floor(Math.sqrt(s.length) + 1) ** 2
    while(s.length < size) s+= String.fromCharCode(11)
    //console.log(s)
    let arr = []
    for(let i = 0; i < s.length; i+= Math.sqrt(size)) arr.push(s.slice(i,i+Math.sqrt(size)))
    return rot90Clock(arr.join('\n'))
}
  
function decode(s) {
    let ans = rot90Counter(s).split('\n').join('')
    let stop = ans.indexOf(String.fromCharCode(11))
    return (ans.slice(0,stop))
}

function rot90Clock(strng) {
    return diag1Sym(strng).split('\n').map(x=>x.split('').reverse().join('')).join('\n')
  }
function diag1Sym(strng) {
let ans = []
let squaredString = strng.split('\n')//.map(x=>Array.from(x))
for(let i = 0; i < squaredString.length; i++){
    let temp = []
    for(let j = 0; j <squaredString.length; j++){
    temp.push(squaredString[j][i])
    }
    ans.push(temp.join(''))
}
return ans.join('\n')
}
function diag2Sym(strng) {
    let ans = []
    let squaredString = strng.split('\n')//.map(x=>Array.from(x))
    for(let i = squaredString.length - 1; i >= 0; i--){
        let temp = []
        for(let j = squaredString.length - 1; j >= 0; j--){
            temp.push(squaredString[j][i])
        }
        ans.push(temp.join(''))
        }
    return ans.join('\n')
}

function rot90Counter(strng) {
    return diag2Sym(strng).split('\n').map(x=>x.split('').reverse().join('')).join('\n')
}



console.log(decode(data1Sol))
console.log('ajUuqRyHopc bnrsqauj vVkYvF BpGMUq GHKysUy SqqHfEvDuo vcsgYKoFwdTc LrsuQj hnLKAhvOynk ObetwOFhUDIi GjzKYA PbDiMUYjsB KFoXPMGJH DoKlFTs PBVkUiiPgzRV EpxIIHnnswnH qTEJJBLjw gnPPej LyrJScmewTgt cURnvURi PoMbSn wigdQjeljNi xmGDNjJkYu oaRjYyzYqF ATOJYqo sanvzWBjmX EbljJHDmh GGGvgFesQpi ngPDZgUNZjF etWWGbvWiH TgaYzuuRwp XMIxqaDAEvX evGiIPEYX LgZkBxyf rMPRoULOkaR BuydH rzojqpVNI eorigHHlFXd uRsCDvS iPHvnItNe cgmpjWNdybOR KyjgBFj eVzBWdoG HMagiFauhh YLljJCHQBok QxnSbzjvefQ jGGjSyTNbzc qQmfAi zIurp lnJlWtcXVG Ipxux wlWdKiW FvJuAfQztgoB kfNMS kHUBcROnB xQuKYG SgLHCtXhdw cxmgOqz jCybyz rahCmlLx SDURFrHgIr bfVmQza IQZrfTW Silwnw aFDQSu AKEULjES cALudGlYybwz amHao YPNei rZvXeLpjixd iWUAS qIYsSRrEJC xdlEMZUwlO aknkUZJPMmUE NwTfdV SNRkXKReBPY RXCRJWvG DQnLUlLan jWQawTlRgMD dMmGMXTDedgY MuFMgvhn rqQSFfxs zKswAwhJ oNwlrr XrodiLra JNhHxlmuH SKrUkhTJ ffwkwIYCkiI NvswXn RrIZMjMehz bIPBIbQRWz NwgjImnqnOJ TMBKhv WMcSsoqpJo vMMlqqEMqjQ Nvpljrfvb iypIqfCFeEO mgjZO SAgjCJYVj TrySe lSOvJRQSFA jiXqwlXvb WYIlF sJYUK uehofHl cqToe uGmqPxiuZN ZmWYJa VWrUtsnzgS GylYgLUK NpNnKSUw CNrgE IrduW iNlJq XScyOwTCSdsp ELmRIQCn OsoyRqrkV rlbIGocwfgY ZTBvO zkqYSNELO jwMpp VXOmVs SBhefqx emcqYsasSt UUHeXWVs YeibKvdV regGh AjNsH bUBitsApLlE puDxxgWpL UbTbFkU ttBKKlTATHB LwzeGlO HpwrtoEg PBQXF JWTUTltfWzDx JPjZQLRRlFko xSOSzM ejpSvaKHUM FIwxH LpzeIzapFgEd qgriG lAVcS nYSEDa bdyrwPZSi lcaNZZGDYq jNUxYsYevm yLiVkEX noTtQs SNnryQHEAlQT RinHJ xSUwICLX mKPMPQCEaHB FnSxYebXU zLaXU ECzkhTr XWZrPiO RMHbhpknJdRE YjXhhQncI sLcSxZpyvTKc TLNmJn kmSFZVI fgNQlgy XhwNRiHUWcH CKgixATgjw uLITugScvBs URqOqUpu clqBgfreYi UidlsBEYpo pBYpjFI YddwQo ZEXJeJXSYQi wJdtfByCxn mUSkINmGhPhq aspAD HRdDEIrlJC UYXpAFNhShCE zYQEVrcThPI OhpURvLroeoW xNhKZuEqpb DQdXuv uNujLLRyUZg TdheeWskdzvv FwkAi MSMDXHdEpzW tpuMVFG DsCiLHkqjsd JXApde UfzBGAMK JsxPXXs OzcIS wrtGEBbW MlowStP bGVadwW dqjisRKGqnp kaCAONiVlY jcccRgFNDv uYNyRUAHCZcb EbsynQo ZraRp JcsHKokP IwNMKZCw JBOtyi JZkvziZLoSf.' == 'ajUuqRyHopc nrsqauj vVkYF BpGMq GHKysUy SqHfEvDu vcsgYKoFwdT LrsuQj hnLKhvOynkObetwOFhUDIiGjzKYAPbDiMUYjsB KoXPMGJ DoKlFTs PBVUiiPgzRV EpxIHnnswH qTEJJBLjw nPPej yrJScmewTgt URnvURi PoMbn wigdjeljNi xmGDNJkYu oRjYyzYqF ATOYqo savzWBjmX EbljHDmh GGGvgFeQpi ngDZgUNZjF etWGbvWiHTgaYzuuRwp XIxqaDAvX evGiIPEYXLgZkBxyf rMPoULOka BuydH rzojqVNI eoigHHlFXd uRsDvS iPHvnItN cgmpjNdybOR KyjgBj eVzBdoG HMagiFauh YLljCHQBok QxnSbjvefQ jGGjSyNbzc qmfAi zIurp lJlWtcXG Ipxux wlWdiW FvJAfQztgoB kfNS kHUBcROnB QuKYG gLHCtXhdw cxgOqz jybyz rahCmlL SDURFrHgIr fVmQzaIQZrfTW Silww aFDQu AKEULjES cLudGlYbwz amHao YPei rZvXeLpjid iWUA qIYsSRrEJC dlEMZUlO aknkUZJPMUE NwTbdV SNRvkXKReBUY RXCRqJWvG DonLUlLac jWQawATlRgMD dMmGMX DedgY  MuFMgvFn rqQSHFfxs zkswAwhJIoNwlrrn Xrodigra JNhLxlmuH cSKrUkhSJ ffwkQIYCkiIj NvswXa RrIZMJjMehz nIPBIbQJWz NwgsjImnqnPJ TMBKWv WMcS soqpJoMvMMlqqEMqjQ N vpljrfRb iypIRqfCFeEp mgjZOrSAgjCJCYVj TreSe lSOWJRQSFAF jiXqwWXvb WYhIlF sJJUK uehzfHl cqTToe uGQqPxiuZn ZmWYJVa VWrUKsnzgS uylYgLUMK NpNnxSUw CNSrgE IrmuW iNlCq XScyxOwTCSdbp ELmR QCn OsnoyRqrkS rlbIGAcwfgY yZTBvO NkqYSNExLO jwMSp VXOmxs SBhewfqx emmqYsasSf UUHeXPWVs YeQbKvdV nregGh  jNsH bTBitsAphLlE puKxxgWpL UbTbFkLU ttBKHlTATHBTLwzeGlwO HpwrnoEg PBbQXF JWRUTltfWODx JPjhZQLRRl ko xSOEzM ejpvSvaKHUO FIwxH LpzeIzyapFgEdvqgriG llAVcS YYSEDa odyrwPZmSi lcaNZZGDYqtjNUxYsGYevm yKiVkEX dnoTtQsJSNnryQsEAlQT IRinHJ VSUwICLo mKPMPzQCEaHBpFnSxYeVXU zLacXU ECzthTr XWiZrPiO AMHbhpkUJdRE YDjXhhQn I sLcSKZpyvTK c TLNmtn kmSFTVI fgNzQlgy XFwNRiHUSWcH CKMixATgj  uLITu gScvBsnURqOqUbu clqBNgfreYi UidlsBLEYpo p YpjFI HddwQo xZEXJeJXSYQi w dtfByCbxn mUSkINmGhPRq aspAnD HRdDcIrlJC xUYXpAFJhShCE ZYQEVrchThPI OgpURvLrweoW xN hKZuEqpb DQdX v uNujBLLRyUZY TdheeXWskdzvJ FwkAikMSMDXHhdEpzW EpuMVFGNDsCiLHzkqjsd hXApde oUfzBGApK JsxPuXs OzcgIS wrtvEBbW M owStP tbGVadw  dqjisJKGqnp MkaCAONXVlY jcGccRgFNlv uYNyWUAHCZcRb EbsyiQo ZraDp JcsHRKokP InNMKZCwRJBOtyiw JZkvz ZLoSf.')