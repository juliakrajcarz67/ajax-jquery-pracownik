
      $('#get-data').click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
            $('body').append('<div id="dane-programisty"></div>');
            $('#dane-programisty').html('imie: ' + data.imie + '<br> nazwisko: ' + data.nazwisko + '<br> zawod: ' + data.zawod + '<br> firma: ' + data.firma);
            
        });
        
         
        
        });
    

           
