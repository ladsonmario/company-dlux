// Initialize Datepicker
//-------------------------------------------------------------------------------
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

var checkin = $('#pick-up-date').datepicker({
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
    }
    checkin.hide();
    $('#drop-off-date')[0].focus();
}).data('datepicker');
var checkout = $('#drop-off-date').datepicker({
    onRender: function (date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    checkout.hide();
}).data('datepicker');

// Contact Form
//-------------------------------------------------------------------------------

$( "#contact-form" ).submit(function() {

$('#contact-form-msg').addClass('hidden');
$('#contact-form-msg').removeClass('alert-success');
$('#contact-form-msg').removeClass('alert-danger');

$('#contact-form input[type=submit]').attr('disabled', 'disabled');

$.ajax({
    type: "POST",
    url: "php/index.php",
    data: $("#contact-form").serialize(),
    dataType: "json",
    success: function(data) {

    if('success' == data.result)
    {
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
        $('#contact-form-msg').html(data.msg[0]);
        $('#contact-form input[type=submit]').removeAttr('disabled');
        $('#contact-form')[0].reset();
    }

    if('error' == data.result)
    {
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#contact-form-msg').html(data.msg[0]);
        $('#contact-form input[type=submit]').removeAttr('disabled');
    }

    }
});

return false;
});

// Check Out Form
//-------------------------------------------------------------------------------

$( "#checkout-form" ).submit(function() {

$('#checkout-form-msg').addClass('hidden');
$('#checkout-form-msg').removeClass('alert-success');
$('#checkout-form-msg').removeClass('alert-danger');

$('#checkout-form button[type=submit]').attr('disabled', 'disabled');

$.ajax({
    type: "POST",
    url: "php/emailLoc.php",
    data: $("#checkout-form").serialize(),
    dataType: "json",
    success: function(data) {

    if('success' == data.result)
    {
        $('#car-select-form-msg').css('visibility','visible').hide().fadeIn().removeClass('alert-danger').removeClass('hidden').addClass('alert-success');
        $('#car-select-form-msg').html(data.msg[0]);
        $('#checkout-form button[type=submit]').removeAttr('disabled');
        $('#modal--form').css('display', 'none');

        setTimeout(function(){
        $('.modal').modal('hide');
        $('#car-select-form-msg').addClass('hidden');
        $('#car-select-form-msg').addClass('alert-danger');
        $('#car-select-form-msg').removeClass('alert-success');

        $('#checkout-form')[0].reset();
        $('#car-select-form')[0].reset();
        }, 5000);

    }

    if('error' == data.result)
    {
        $('#checkout-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#checkout-form-msg').html(data.msg[0]);
        $('#checkout-form button[type=submit]').removeAttr('disabled');
    }

    }
});

return false;
});