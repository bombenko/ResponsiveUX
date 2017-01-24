function initMap() {
        var dest = {lat: 57.048654, lng: 9.920159};
        var map = new google.maps.Map(document.getElementById('map'), {
            scrollwheel: false,
            zoom: 17,
            center: dest
        });
        var marker = new google.maps.Marker({
            position: dest,
            map: map
        });
      }
