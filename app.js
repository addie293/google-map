function initMap(){

    // Map option

    var options = {
        center: {lat: 40.748817 , lng:-73.985428 },
        zoom: 16
    }

    //New Map
    map = new google.maps.Map(document.getElementById("map"),options)

    //listen for click on map location

    google.maps.event.addListener(map, "click", (event) => {
        //add Marker
        addMarker({location:event.latLng});
    })

    let MarkerArray = [ {location:{lat: 40.748817, lng: -73.985428},  
        content: `<h2>Empire State Building</h2>`,
    type: "location"},

        {location:{lat: 40.7678, lng: -73.9718},
        content: `<h2>Oluchi Ibenema</h2>`,
    type: "friend"},

        {location:{lat: 40.739388, lng: -74.009933},
        content: `<h2>Allan Bernon</h2>`,
        type: "friend"},

        {location:{lat: 40.7264, lng: - 73.9818},
        content: `<h2>Levi Martins</h2>`,
        type: "friend"},
        
        {location:{lat: 40.7253, lng: - 73.9903},
        content: `<h2>Aditya Das</h2>`,
        type: "friend"},

        {location:{lat: 40.7280, lng: - 74.0002},
        content: `<h2>Rediet Tedesse</h2>`,
        type: "friend"},


    ]

    const svgMarker = {
        scale: 0,
        anchor: new google.maps.Point(15, 30),
      };

    // loop through marker
    for (let i = 0; i < MarkerArray.length; i++){
        addMarker(MarkerArray[i], i);

    }

    // Add Marker

    function addMarker(property, index){

        const marker = new google.maps.Marker({
            position:property.location,
            scaledSize: new google.maps.Size(1, 1),
            map:map,
            icon: {
                url: property.type == "friend" ? 'friend'+index+'.jpeg' : '',
                scaledSize: new google.maps.Size(50, 50)
            }
            //icon: property.imageIcon
            });

            // Check for custom Icon

            // if(property.type == "friend"){
            //     console.log('friend'+index+'.jpeg')
            //     // set image icon
            //     //console.log('hello')
            //     marker.setIcon('friend'+index+'.jpeg')
            // }

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
