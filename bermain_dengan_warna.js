const tbl = document.getElementById('tbl-ubh-wrna')
// const body = document.getElementsByTagName('body')[0]

tbl.addEventListener('click',function() {
	// document.body.style.backgroundColor = 'lightblue'
	// document.body.setAttribute('class', 'biru-muda')
	document.body.classList.toggle('biru-muda')
})


const tblAcak = document.createElement('button')
const textAcak = document.createTextNode('Acak Warna')
tblAcak.appendChild(textAcak)

tblAcak.setAttribute('type','button')

tbl.after(tblAcak)

tblAcak.addEventListener('click',function() {
	// rumus menghitung random sampai angka 255
	const r = Math.round(Math.random() * 255 + 1)
	const g = Math.round(Math.random() * 255 + 1)
	const b = Math.round(Math.random() * 255 + 1)
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

const red = document.querySelector('input[name=red]')
const green = document.querySelector('input[name=green]')
const blue = document.querySelector('input[name=blue]')

red.addEventListener('input',function() {
	const r = red.value
	const g = green.value
	const b = blue.value
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

green.addEventListener('input',function() {
	const r = red.value
	const g = green.value
	const b = blue.value
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

blue.addEventListener('input',function() {
	const r = red.value
	const g = green.value
	const b = blue.value
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

document.body.addEventListener('mousemove',function(event) {
	const xPos = Math.round((event.clientX / window.innerWidth) * 255)
	const yPos = Math.round((event.clientY / window.innerHeight) * 255)

	document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)'
})