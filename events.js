const p4 = document.querySelector('.p1')

function ubahWarna() {
	p4.style.backgroundColor = 'lightblue'
}

const p2 = document.querySelector('.p2')

p2.onclick = ubahWarna

const p3 = document.querySelector('section#b p')

p3.addEventListener('click', function () {
	// select parent
	const ul = document.querySelector('section#b ul')
	// bikin elemen baru
	const liBaru = document.createElement('li')
	const teksLiBaru = document.createTextNode('Ini li Baru')

	// kita rangkai
	liBaru.appendChild(teksLiBaru)
	ul.appendChild(liBaru)

})

const p4 = document.querySelector('section#b p')
// event handler -> yang dijalankan cuma yang terakhir
p4.onclick = function(){
	p4.style.backgroundColor = 'red'
}

p4.onclick = function(){
	p4.style.color = 'blue'
}

// even listener -> semua dijalankan
p4.addEventListener('click',function(){
	p4.style.backgroundColor = 'red'
})

p4.addEventListener('click',function(){
	p4.style.color = 'blue'
})