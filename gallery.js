const container = document.querySelector('.container')
const jumbo = document.querySelector('.jumbo')
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function(e) {
	// check apakah yang di clcik thumb
	if (e.target.className == 'thumb') {
		// ambil sourc
		jumbo.src = e.target.src
		jumbo.classList.add('fade')
		// mengatur waktu untuk menghilangkan class fade
		setTimeout(function () {
			jumbo.classList.remove('fade')
		},500)

		thumbs.forEach(function(thumb){
			// if (thumb.classList.contains('aktive')) {
			// 	thumb.classList.remove('aktive')
			// }
			thumb.className = 'thumb'
		})

		// tambahkan aktif hanya untuk clas yang kita klik
		e.target.classList.add('aktive')
	}
})