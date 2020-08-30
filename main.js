// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.


$.ajax(
        {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function(data) {
                for (var i = 0; i < data.response.length; i++) {
                var source = $("#entry-template").html();
                var template = Handlebars.compile(source);
                var html = template(data.response[i]);
                $(".cds-container").append(html)

            }


        },



            error: function (richiesta, stato, errori) {
            alert("E' avvenuto un errore. " + errore);
            }
            }

            );
