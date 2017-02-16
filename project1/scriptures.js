$(document).ready(function() {
    var viewportWidth = $(window).width();
    $('#right-column').click(function() {
        $('#left-column').css('flex-shrink', '1');
    });
    
    $('#left-column').click(function() {
        if (viewportWidth > 900) {
            $('#left-column').css('flex-shrink', '.90');
        } else if (viewportWidth > 600) {
            $('#left-column').css('flex-shrink', '.95');
        } else {
            $('#left-column').css('flex-shrink', '1');
        }
    });
    
    $('.scripture-link').click(function() {
        $('#aboutcontent').css('display', 'none');
        $('.container').css('display', 'flex');
    });
    
    $('.about-link').click(function() {
        $('.container').css('display', 'none');
        $('#aboutcontent').css('display', 'flex');
    });
    
    $('.volumetitle').click(function() {
        $('.volumecontents').css('display', 'flex');
    });
});