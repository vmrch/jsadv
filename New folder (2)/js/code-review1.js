
        $(document).ready(function() {
    var carouselItems = [
        { src: "images/image01.jpg", title: "Sample 01" },
        { src: "images/image02.jpg", title: "Sample 02" },
        { src: "images/image03.jpg", title: "Sample 03" },
        { src: "images/image04.jpg", title: "Sample 04" },
        { src: "images/image05.jpg", title: "Sample 05" }
    ];

    Carousel = function() {
        // keep track of the current position
        var position = 0;

        // build carousel based on items in the carouselItems array
        $(carouselItems).each(function(index, value){
           // alert("gi")
            var li = $('<li/>');
            li.addClass('carousel-item');
            li.css('width', 100 / carouselItems.length + '%');
            li.appendTo($('#carousel'));

            var img = $('<img/>');
            img.attr('src', value.src);
            img.appendTo(li);

            var liDot = $('<li/>');
            liDot.addClass('carousel-dots-nav-item').html('o');
            liDot.appendTo($('#carousel-dots-nav'));
        });
alert("gi");
        // increase width of the carousel
        $('#carousel').css('width', carouselItems.length * 100 + '%');

        // add events to dots
        for (i = 0; i < $('.carousel-dots-nav-item').length; i++) {
            var dot = $('.carousel-dots-nav-item')[i];

            // show the title of the image when hovering the associated dot
            $(dot).hover(function(e){
                $('#title').append(carouselItems[i].title);//text
            }, function(e){
                $('#title').text('');//text
            });

            //move to the appropriate slide when a dot is clicked
            $(dot).click(function(e){
                 //e.preventDefault();
         
              if (position == 0){

               return;
               //position++;
           } else if (position == carouselItems.length + 1){

            return;
           // position--;
        }
                position++;//0++
                $('#carousel').animate({
                    left: -position * 100 + '%'
                }, 1000);
            });
        }
           
        // add click event to next button
        $("#next").click(function(e){
            e.preventDefault();

            if (position == carouselItems.length - 1) return;
             
            position++;
            $('#carousel').animate({
                left: -position * 100 + '%'
            }, 500);
        });

        // add click event to previous button
        $("#previous").click(function(e){
            e.preventDefault();
         
            if (position == 0) return;

            position--;
            $('#carousel').animate({
                left: position * 100 + '%'
            }, 500);
        });
    };

    var carousel = new Carousel();
});
