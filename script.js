// membuat object 
// object literal

var mhs ={
	nama : "Sheena Muhammad Ali Zien",
	umur : 21,
	ips : [3.00,2.88,3.20],
	alamat : {
		desa : "Kriyan",
		kec : "Kalinyamatan",
		kab : "Jepara",
		prov : "Jawa Tengah"
	}
}

// function declare
function buatObjectMahasiswa(nama, umur, ips) {
	var mhs = {}
	mhs.nama = nama
	mhs.umur = umur
	mhs.ips = ips
	return mhs
}

var mhs3 = buatObjectMahasiswa("Sheena Muhammad Ali Zien", 21,[13,312,213])

// constructor

function Mahasiswa(nama,umur,ips){
	this.nama = nama
	this.umur = umur
	this.ips = ips
}

var mhs4 = new Mahasiswa("Rokisi", 32, [21,22,334])