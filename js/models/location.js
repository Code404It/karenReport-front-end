class Location {
    static all =[]

  constructor(id, city, state, created_at,karens, damn_karen){
    this.id = id
    this.city = city
    this.state = state
    this.created_at = created_at
    this.karens = karens
    this.damn_karen = damn_karen
    Location.all.push(this)
    this.renderLocation()
}


locationHTML(){
    return(`
    <div id="${this.id}">
    <h3>${this.city}</h3>
    <h3>${this.state}</h3>
    <h6>${this.created_at}</h6>
    ${this.karens.map(function(karen){
        return(`
        <div id="${karen.id}">
        <p>${karen.title}</p>
        <p>${karen.incident}</p>
        <h5>${karen.damn_karen}</h5>
        <button onclick=API.reportKaren() type="button" id="damn_karen">Damn Karen!</button>
        </div>
        `)
    })}
    
    </div>
   `
)}

renderLocation(){
    const locationContainer = document.getElementById('location-container')
    const locationCard = document.createElement('div')
    locationCard.classList.add('location-card')
    locationCard.innerHTML += this.locationHTML()
    locationContainer.appendChild(locationCard)
    locationCard.querySelector("h3").addEventListener('click', (e) =>{
        this.showLocation(e)
    })
    
}

showLocation(e){
    const locationContainer = document.getElementById('location-container')
    const locationForm = document.getElementById('location-form')
    locationContainer.innerHTML=''
    locationForm.innerHTML = ''
    const locationID = parseInt(e.target.parentElement.id)
            API.grabLocation(locationID)

}





}