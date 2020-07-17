class API{

    static addLocations(){
        fetch("http://localhost:3000/locations")
        .then(resp => resp.json())
        .then(locations => {
           locations.forEach(location => {
               const {id, city, state, created_at, karens} = location 
               new Location(id, city, state, created_at, karens)
            })
        })
    }



static addLocation(e){
    e.preventDefault()

    let data = {
        'city': e.target.city.value,
        'state': e.target.state.value,
           'karens_attributes':[{
            'title': e.target.title.value,
            'incident': e.target.incident.value
            
        }]
    };



    fetch('http://localhost:3000/locations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
       
    })

    .then(resp => resp.json())
    .then(() => {
        document.getElementById('location-container').innerHTML = ""
        API.addLocations()
        document.getElementById('location-form').reset()
    
    })
  }

  static grabLocation(id){
    fetch(`http://localhost:3000/locations/${id}`)
    .then(resp => resp.json())
    .then(location => {
      const {id, city, state, created_at, karens} = location 
      new Location(id, city, state, created_at, karens).renderShowLocation()
        
    })
}






  static reportKaren(){
     const karenID = parseInt(event.target.parentElement.id)
     let damn_karen = parseInt(event.target.parentElement.querySelector("h5").innerText)
     damn_karen ++
     event.target.parentElement.querySelector("h5").innerText = damn_karen 
     let karenData = {
        'damn_karen': damn_karen   
    }
    
    fetch(`http://localhost:3000/karens/${karenID}`, {
    method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(karenData)
    })

    
}
    
    
    
  }