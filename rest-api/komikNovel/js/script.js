function tampilkanSemuaBuku(){
    $.getJSON('js\Komik.json', function(data) {
        let buku = data.buku;
        
        $.each(buku, function(i, data) {
            $('#daftar-buku').append(
                '<div class="col-md-4">' +
                    '<div class="card mb-3">' +
                        '<img src="' + data.gambar + '" class="card-img-top">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title">' + data.nama + '</h5>' +
                            '<p class="card-text">' + data.deskripsi + '</p>' +
                            '<h5>' + data.harga + '</h5>' +
                            '<a href="#" class="btn btn-primary">Beli Sekarang</a>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
        });
    });
}

tampilkanSemuaBuku();

$('.nav-link').on('click',function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if ( kategori == 'All Books') {
        tampilkanSemuaBuku();
        return;
    }

    $.getJSON('data/Komik.json', function(data){
        let buku = data.buku;
        let content = '';

        $.each(menu, function(i,data){
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4">' +
                '<div class="card mb-3">' +
                    '<img src="' + data.gambar + '" class="card-img-top">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + data.nama + '</h5>' +
                        '<p class="card-text">' + data.deskripsi + '</p>' +
                        '<h5>' + data.harga + '</h5>' +
                        '<a href="#" class="btn btn-primary">Beli Sekarang</a>' +
                    '</div>' +
                '</div>' +
            '</div>';
            }
        });

        $('#daftar-buku').html(content);
    });
});