//fungsi print semua komik
function allMenu(){
    $.getJSON('data.json', function(data) {
        let menu=data.menu;
        
        $.each(menu, function(i, data){
      
            let max_char = 70;
            // console.log(data.deskripsi.length);
            if(data.deskripsi.length > max_char) {
                deskripsi = data.deskripsi.substring(0, max_char) + '...';
            } else  {
                deskripsi = data.deskripsi;
            }

            $('#daftar-menu').append(`<div class="col-md-3 d-flex">
            <div class="card mb-5 " style="min-height:max-content; width:100%">
            <div class="card-header">${data.kategori}</div>
            <img src="img/${data.gambar}" style="object-fit:contain; height:233px !important; align:center">
            <div class="card-body">
            <h5 class="card-title">${data.nama}</h5>
            <p class="card-text">${deskripsi}</p><br>
            <p class="card-text">Rp.${data.harga}</p>

            </div>
            <div class="card-footer">
            <small class="text-muted my-2" style="float:right">${data.estimasi}</small>
            <a href="#" class="btn btn-primary" style="background-color:#636e72; border:solid black 1px">Pesan Sekarang</a>
            </div>
            </div>
            </div>`);
        });
    });
}

allMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);
//ini buat yang home
    if(kategori=='Home'){
        // $('h1').html('Sing Pusing');
        // empty buat ngosongin yang sisa dari kategori
        $('#daftar-menu').empty();
        allMenu();
        return;
    }

    $.getJSON('data.json', function(data){
        let menu = data.menu;
        let content = '';
        //ini buat yang kategori
        $.each(menu, function(i,data){
                if(data.kategori==kategori){
                    content +=`<div class="col-md-3 d-flex">
                    <div class="card mb-5 " style="min-height:max-content; width:100%">
                    <div class="card-header">${data.kategori}</div>
                    <img src="img/${data.gambar}" style="object-fit:contain; height:233px !important; align:center">
                    <div class="card-body">
                    <h5 class="card-title">${data.nama}</h5>
                    <p class="card-text">${data.deskripsi}</p><br>
                    <p class="card-text">Rp.${data.harga}</p>
        
                    </div>
                    <div class="card-footer">
                    <small class="text-muted my-2" style="float:right">${data.estimasi}</small>
                    <a href="#" class="btn btn-primary" style="background-color:#636e72; border:solid black 1px">Pesan Sekarang</a>
                    </div>
                    </div>
                    </div>`;
                }
        });
        $('#daftar-menu').html(content);
    });

});