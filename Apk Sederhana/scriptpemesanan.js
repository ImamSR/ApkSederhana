document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var nama = document.getElementById('nama').value;
    var tujuan = document.getElementById('tujuan').value;
    var harga_tiket = parseInt(document.getElementById('harga_tiket').value);
    var jumlah_tiket = parseInt(document.getElementById('jumlah_tiket').value);
    var member = document.getElementById('member').checked;
    var diskon = parseInt(document.getElementById('diskon').value);
    var total_bayar = (harga_tiket * jumlah_tiket) - diskon;
    if (member) {
        total_bayar -= total_bayar * 0.1;
    }
    document.getElementById('total_bayar').value = total_bayar;
});