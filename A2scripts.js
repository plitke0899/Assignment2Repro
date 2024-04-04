$('.card1').on('click', function () {
    var agency = $(this).data('agency')

    $('#column-right').empty()

if (agency === 'ccrb') {
    $('#column-right').css('background-image', 'url(https://thebronxfreepress.com/wp-content/uploads/2014/07/Untitled-2.jpg")')
}
})

$('.card3').on('click', function () {
    var agency = $(this).data('agency')

    $('#column-right').empty()
   
    if (agency === 'oig') {
    $('#column-right').css('background-image', 'url("https://pbs.twimg.com/profile_images/1725253737063559168/0PrbVNBU_400x400.jpg")')
}
})

  
$('.card2').on('click', function () {
    var agency = $(this).data('agency')

    $('#column-right').empty()
   
    if (agency === 'Monitor') {
    $('#column-right').css('background-image', 'url("https://www.nypdmonitor.org/wp-content/uploads/2022/09/Logo-2@2x-300x133.jpg")')
}
})

$('.card3').on('click', function() {
$('body').css('background-color', '#4287f5')
$('#column-right').empty()
})

$('.card2').on('click', function() {
$('body').css('background-color', '#f514db')
})

$('.card1').on('click', function() {
$('body').css('background-color', '#f5cf14')
})

//I can't sem to figure out why the images won't display. I will oook more into it but this is the best I can do right now.