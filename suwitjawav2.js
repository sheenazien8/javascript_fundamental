function getPilihanKomputer() {
	var comp = Math.random()

	if (comp <= 0.3) return 'gajah'
	else if (comp >= 0.3 && comp <= 0.7) return 'semut'
	return 'orang'
}

function getHasil (komp,player) {
	if (player == komp) return "SERI"
	if (player == 'gajah') return (komp  == 'orang') ? 'MENANG!' : 'KALAH!'
	if (player == 'semut') return (komp == 'gajah') ? 'MENANG!' : 'KALAH!'
	if (player == 'orang') return (komp == 'semut') ? 'MENANG!' : 'KALAH!'
	return 'memasukkan pilihan yang salah'
}

function putar() {
	const imgKomputer = document.querySelector('.img-komputer')
	const gambar = ['gajah', 'orang', 'semut']
	let i = 0
	// mengambil waktu ketika fungsi ini dipanggil
	const waktuMulai = new Date().getTime()
	console.log(waktuMulai)
	// mengatur perutaran gambar
	setInterval(function () {
		// waktu saat pengulangan dimulai dikurangi waktu ketika fungsi diambil
		if (new Date().getTime() - waktuMulai > 1000) {
			// jika waktu pengulangan sudah lebih dari seribu maka hapus set interval
			clearInterval
			return
		}
		imgKomputer.setAttribute('src','img/'+gambar[i++]+'.png')
		if (i == gambar.length) {
			i = 0
		}
	}, 100)
}

const pilihan = document.querySelectorAll('li img')

pilihan.forEach( function(pil) {
	pil.addEventListener('click',function(){
		const komputer = getPilihanKomputer()
		const player = pil.className
		const hasil = getHasil(komputer,player)
		
		putar()
		// mengatur fungsi baru dijalankan ketika sudah 1 detik fungsi putar dijalankan
		setTimeout(function () {
			// mengubah gambar komputer menjadi pilihan komputer
			const imgKomputer = document.querySelector('.img-komputer')
			imgKomputer.setAttribute('src', 'img/'+komputer+'.png')
			// mengambil hasil 
			const info = document.querySelector('.info')
			info.innerHTML = hasil
		},1000)
	})
});







// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click',function () {
// 	const komputer = getPilihanKomputer()
// 	const player = pGajah.className
// 	const hasil = getHasil(komputer,player)

// 	// mengubah gambar komputer menjadi pilihan komputer
// 	const imgKomputer = document.querySelector('.img-komputer')
// 	imgKomputer.setAttribute('src', 'img/'+komputer+'.png')

// 	// mengambil hasil 

// 	const info = document.querySelector('.info')
// 	info.innerHTML = hasil
// })	

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click',function () {
// 	const komputer = getPilihanKomputer()
// 	const player = pOrang.className
// 	const hasil = getHasil(komputer,player)

// 	// mengubah gambar komputer menjadi pilihan komputer
// 	const imgKomputer = document.querySelector('.img-komputer')
// 	imgKomputer.setAttribute('src', 'img/'+komputer+'.png')

// 	// mengambil hasil 

// 	const info = document.querySelector('.info')
// 	info.innerHTML = hasil
// })	

// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click',function () {
// 	const komputer = getPilihanKomputer()
// 	const player = pSemut.className
// 	const hasil = getHasil(komputer,player)

// 	// mengubah gambar komputer menjadi pilihan komputer
// 	const imgKomputer = document.querySelector('.img-komputer')
// 	imgKomputer.setAttribute('src', 'img/'+komputer+'.png')

// 	// mengambil hasil 

// 	const info = document.querySelector('.info')
// 	info.innerHTML = hasil
// })	