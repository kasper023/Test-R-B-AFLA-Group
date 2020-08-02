$(document).ready(function() {
    let options = ""

    for (let i = 1; i <= 100; i++) {
        options += `<option value=${i}>${i}</option>`
    }

    $('#license__cnt-list').html(options)

    let license = ""
    let count = ""

    $('.item').click(function() {
        $('.item').removeClass('active')
        $(this).addClass('active').find('input').prop('checked', true)
        count = $('#license__cnt-list option:selected').val()
        license = $(".item.active").find('input').val()
        $('#total_result').html('$' + license * count + '<span class="us">US</span>')
        $('#license__plan').html($(this).find('.item__plan').html())
    })

    $('#license__cnt-list').change(function() {
        license = $(".item.active").find('input').val()
        count = $('#license__cnt-list option:selected').val()
        $('#total_result').html('$' + license * count + '<span class="us">US</span>')
    })

})