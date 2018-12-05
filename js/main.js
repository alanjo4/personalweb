// Link active
$(document).ready(function(){
    $(function() {
        $('li a').click(function(evento) {
            evento.preventDefault();
            $('a').removeClass('active');
            $(this).addClass('active');
        });
    });
});