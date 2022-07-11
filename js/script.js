$(document).ready(function(){

    $('.card1').show();
    $('.card2').hide();
    $('.submit-button').prop('disabled', true);

    $('.number').hover(function(){
        let number = $(this).attr('id');
        
        switch (number) {
            case '2':
                $('#1').addClass('light-grey-background');
            break;
            case '3':
                $('#2').addClass('light-grey-background');
            break;
            case '4':
                $('#3').addClass('light-grey-background');
            break;
            case '5':
                $('#4').addClass('light-grey-background');
            break;
        }
    });

    $('.number').mouseleave(function(){
        $('.number').removeClass('light-grey-background');
    });

    $('.number').click(function(){
        localStorage.clear();
        $('.number').removeClass('orange-background color-white');

        let number = $(this).attr('id');

        switch (number) {
            case '1':
                $('#1').addClass('orange-background color-white');
            break;
            case '2':
                $('#2').addClass('orange-background color-white');
            break;
            case '3':
                $('#3').addClass('orange-background color-white');
            break;
            case '4':
                $('#4').addClass('orange-background color-white');
            break;
            case '5':
                $('#5').addClass('orange-background color-white');
            break;
        }

        if (number > 0) {
            $('.submit-button').prop('disabled', false);
        }

        localStorage.setItem('Number', number);
    });

    $('.submit-button').click(function(){
        $('.card1').hide();
        $('.card2').show();

        let number = localStorage.getItem('Number');

        $('.selected').append(number);
    });

});