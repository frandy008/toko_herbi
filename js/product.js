$.ajax({
	url : 'http://172.16.22.51/rest-api-toko-herbi/toko_herbi/product/',
	type : 'get',
	dataType : 'json',
	data : {
		'token' : 'apikeygratis'
	},
	success : function(result){
		let data = result.dataProduct;

		if (result.Response == "True") {
			$.each(data, function(i, dp){
				console.log(dp);
				$('#data-product').append(`
						<div class="card">
						  <div class="card-header">
						    <h5 class="card-title">`+ dp.nama_product +`</h5>
						  </div>
						  <img src="`+ dp.gambar +`" class="card-img-top pt-3 pr-3 pl-3 pb-3">
						  <div class="card-body">
						    <p class="card-text">Stok : `+ dp.stock +`</p>
						    <p><b>Rp.`+ dp.harga_baru +`</b></p>
						    <a href="#" class="btn btn-primary">Masukan Keranjang</a>
						  </div>
						</div>
					`);
			});
		}else{
			$('#data-product').html(`
					<h2 class="text-center">Data tidak ada !!</h2>
				`);
		}
	}
});