function Angkot(supir,trayek,penumpang,kas){
	this.supir = supir
	this.trayek = trayek
	this.penumpang = penumpang
	this.kas = kas

	// fungsi penumpang naik
	this.penumpangNaik = function(namaPenumpang){
		this.penumpang.push(namaPenumpang)
		return this.penumpang
	}

	// fungsi penumpang turun 
	this.penumpangTurun = function(namaPenumpang, bayar){
		// validasi penumpang kosong
		if (this.penumpang.length === 0) {
			console.log('penumpang kosong')
			return false
		}

		for (var i = 0; i < this.penumpang.length; i++) {
			
			if (this.penumpang[i] == namaPenumpang ) {
				this.penumpang[i] = undefined
				this.kas += bayar
				return this.penumpang
			}
		}

	}
}


var angkot = new Angkot('Sheena', ["Welahan","Tahunan"], [], 0)