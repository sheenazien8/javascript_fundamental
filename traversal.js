// event handler
// const close =  document.querySelector('.close')
// const card = document.querySelector('.card')

// close.addEventListener('click',function () {
// 	card.remove()
// })


// dom traversal
// const close =  document.querySelectorAll('.close')
// for (let i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(e){
// 		// close[i].parentElement.style.display = 'none'
// 		e.target.parentElement.style.display = 'none'
// 	})
// }

// close.forEach( function(el) {
// 	el.addEventListener( 'click', function (e) {
// 		e.target.parentElement.style.display = 'none'
// 		e.preventDefault()
// 		// event bubling
// 		e.stopPropagation()
// 	})
// });

// const cards = document.querySelectorAll('.card')

// cards.forEach( function(card) {
// 	card.addEventListener('click',function () {
// 		alert('ok')
// 	})
// });

// kumpulan dom traversal
// parentElement
// parentNode
// nextSibling
// previousSibling
// nextElementSibling



const container = document.querySelector('.container')

container.addEventListener('click', function(el) {
	if (el.target.className == 'close') {
		el.target.parentElement.style.display = 'none'
		// menghentikan sifat asli dari tagnya
		el.preventDefault()
	}
})