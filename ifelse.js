var jmlAngkot = 10
for (var i = 1; i <=jmlAngkot ; i++) {
	if (i <= 6) {
		console.log('angkot no '+i+' beroperasi dengan baik')
	}else if (i == 7) {
		console.log('angkot no '+i+' sedang lembur')
	}
	 else {
		console.log('angkot no '+i+' sedang berada di bengkel')
	}
}