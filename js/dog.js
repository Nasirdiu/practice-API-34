
const dos=()=>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res=> res.json())
    .then(data=>displayDog(data))
}

dos();

const displayDog=dogs=>{
    
    const doges=document.getElementById('doges');
    dogs.forEach(dog=>{
        const div=document.createElement('div');
        div.className="classs"
        div.innerHTML=`<h2>Name:${dog.name}</h2>
            <h4>${dog.id}</h4>
            <img width="400px" height="250px" src="${dog.image.url}">
        `;
        doges.appendChild(div);
    })
}