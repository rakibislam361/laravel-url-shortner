(function ($) {
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    var div_id = 1;

    setProgressBar(current);

    $("body")
        .on("click", ".next", function () {
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            //Add Class Active
            $("#progressbar li")
                .eq($("fieldset").index(next_fs))
                .addClass("active");

            //show the next fieldset
            next_fs.show();

            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        display: "none",
                        position: "relative",
                    });
                    next_fs.css({
                        opacity: opacity
                    });
                },
                duration: 500,
            });
            setProgressBar(++current);
        })
        .on('change', "#district_permanent", function () {
            var upazilla = JSON.parse($("#upazilla").val());
            var selected_district = $(this).children("option:selected").val();
            var upazilla_name = '';
            upazilla.forEach(element => {
                if (element.district_id == selected_district) {
                    upazilla_name += '<option value="' + element.id + '">' + element.name + '</option>';
                }
            });

            $('#police_station_permanent').html(upazilla_name);

        })
        .on('change', "#district_present", function () {
            var upazilla = JSON.parse($("#upazilla").val());
            var selected_district = $(this).children("option:selected").val();
            var upazilla_name = '';

            upazilla.forEach(element => {
                if (element.district_id == selected_district) {
                    upazilla_name += '<option value="' + element.id + '">' + element.name + '</option>';
                }
            });

            $('#police_station_present').html(upazilla_name);
        })
        .on("click", ".previous", function () {
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
            //Remove class active
            $("#progressbar li")
                .eq($("fieldset").index(current_fs))
                .removeClass("active");

            //show the previous fieldset
            previous_fs.show();

            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        display: "none",
                        position: "relative",
                    });
                    previous_fs.css({
                        opacity: opacity
                    });
                },
                duration: 500,
            });
            setProgressBar(--current);
        })
        .on("click", ".qr_code", function () {
            var url = $(this).data('key');
            var qrmodal = $("#qruCodeModal");

            axios.post('url_shortener_qrcode', {
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

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
    }

    $(".submit").click(function () {
        return false;
    });


})(jQuery);
