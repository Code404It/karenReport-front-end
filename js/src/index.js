document.addEventListener("DOMContentLoaded",function(){
    
   
    API.addLocations()
    document.getElementById("location-form").addEventListener('submit', (e) => {API.addLocation(e)})
   
    
})
 
 


