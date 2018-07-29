// var jmlAngkot = 10
// var jalan = 6
// var no = 1

// while (no <= jalan) {
// 	console.log('angkot no '+no+' beroperasi dengan baik')
// 	no++
// }

// for (var i = no; i <jmlAngkot ; i++) {
// 	console.log('angkot no '+i+' sedang berada di bengkel')
// }

var s = '';
for (var i = 10; i >0; i--) {
	for (var b = 0; b < i; b++) {
		s += '*'
	}
	s += '\n'
}
console.log(s)