var tanya = true
while (tanya) {

	var player = prompt('pilih:  gajah, semut atau orang')
	var comp = Math.random()
	var hasil = ''

	if (comp <= 0.3) {
		comp = 'gajah'
	}else if (comp >= 0.3 && comp <= 0.7) {
		comp = 'semut'
	}else {
		comp = 'orang'
	}

	if (player == comp) {
		hasil = "SERI"
	}else if (player == 'gajah') {
		hasil = (comp  == 'orang') ? 'MENANG!' : 'KALAH!'
	} else if (player == 'semut') {
		hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!'
	} else if (player == 'orang') {
		hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!'
	} else {
		hasil = 'memasukkan pilihan yang salah'
	}

	alert('Kamu milih '+player+' dan Komputer '+comp+' dan hasilnya kamu '+hasil)

	tanya = confirm('Lagi?')
}

alert('Terima Kasih kamu sudah bermain')