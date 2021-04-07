function initMap(){

    // Map option

    var options = {
        center: {lat: 40.7128 , lng:-74.0060 },
        zoom: 10
    }

    //New Map
    map = new google.maps.Map(document.getElementById("map"),options)

    //listen for click on map location

    google.maps.event.addListener(map, "click", (event) => {
        //add Marker
        addMarker({location:event.latLng});
    })



    //Marker
/*
    const marker = new google.maps.Marker({
    position:{lat: 37.9922, lng: -1.1307},
    map:map,
    icon:"https://img.icons8.com/nolan/2x/marker.png"
    });
    //InfoWindow
    const detailWindow = new google.maps.InfoWindow({
        content: `<h2>Murcia City</h2>`
    });
    marker.addListener("mouseover", () =>{
        detailWindow.open(map, marker);
    })
    */

    //Add Markers to Array

    let MarkerArray = [ {location:{lat: 40.748817, lng: -73.985428}, 
        imageIcon: "https://img.icons8.com/nolan/2x/marker.png", 
        content: `<h2>Empire State Building</h2>`},

        {location:{lat: 40.748817, lng: -73.985428}},

        {location:{lat: 40.7196, lng: -74.0066},content: `<h2>Oluchi Ibenema</h2>`}



    ]

    // loop through marker
    for (let i = 0; i < MarkerArray.length; i++){
        addMarker(MarkerArray[i]);

    }

    // Add Marker

    function addMarker(property){

        const marker = new google.maps.Marker({
            position:property.location,
            map:map,
            //icon: property.imageIcon
            });

            // Check for custom Icon

            if(property.imageIcon){
                // set image icon
                marker.setIcon(property.imageIcon)
            }

            if(property.content){

            const detailWindow = new google.maps.InfoWindow({
            content: property.content
    });
    
    marker.addListener("mouseover", () =>{
        detailWindow.open(map, marker);
    })
}

         



    }

    



}