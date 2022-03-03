const {
    default: axios
} = require("axios");

function popupCenter(url, title, w, h) {
    // Fixes dual-screen position Most browsers      Firefox
    const dualScreenLeft =
        window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
        window.screenTop !== undefined ? window.screenTop : window.screenY;
    const width = window.innerWidth ?
        window.innerWidth :
        document.documentElement.clientWidth ?
        document.documentElement.clientWidth :
        screen.width;
    const height = window.innerHeight ?
        window.innerHeight :
        document.documentElement.clientHeight ?
        document.documentElement.clientHeight :
        screen.height;
    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(
        url,
        title,
        `scrollbars=yes, width=${w / systemZoom}, height=${h /
      systemZoom}, top=${top},left=${left}`
    );
    if (window.focus) newWindow.focus();
}

function swal_alert(alert_icon, msg) {
    Swal.fire({
        icon: alert_icon,
        text: msg
    });
}

$(document).ready(function () {
    $('.table_id').DataTable({
        // scrollY: "300px",
        // scrollX: true,
        // scrollCollapse: true,
        // paging: false,
        // order:[['0', "desc"]],
        ordering:false,
        columnDefs: [{
            targets: 0
        }],
        fixedColumns: true,
        dom: 'Bfrtip',
        buttons: [
            'colvis',
            'csv',
            'pdf'
        ]
    });
});

(function ($) {

    $("body")
        .on("change", ".status-change", function () {
            var selector = $(this).val();
            var trId = $(this).data('key');
            var route = $('#status_update').val();

            Swal.fire({
                icon: "warning",
                text: "Do you really want to change status?",
                showCancelButton: true,
                confirmButtonText: `Confirm`
            }).then(result => {
                console.log(result);
                if (result.isConfirmed != false) {
                    $.ajax({
                        type: "POST",
                        url: route,
                        data: {
                            'id': trId,
                            'status': selector,
                            '_token': $('meta[name=csrf-token]').attr('content')
                        },
                        success: function (response) {
                            Swal.fire({
                                icon: "success",
                                text: "Status changed successfully",
                            }).then(result => {
                                window.location.reload();
                            });
                        },
                        error(data) {
                            console.log(data)
                        }
                    });
                }

            });
        })
        .on("click", ".qr_code", function () {
            var url = $(this).data('key');
            var qrmodal = $("#qruCodeModal");
            axios.post('/admin/manage-url-qrcode', {
                    data: url
                })
                .then(response => {
                    qrmodal.find('.modal-body').html(response.data)
                    qrmodal.modal('show');
                })
                .catch(error => {
                    console.log(error)
                })
                .then(() => {});
        });


})(jQuery);
