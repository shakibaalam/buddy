// load buddies data using api 
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

// budiies call
loadBuddies();

// display buddies

const displayBuddies = data => {
    // console.log(data);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');

    //buddies gula array te tai for diye array r every obj k catch kra

    for (const buddy of buddies) {
        // console.log(buddy);
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        // p.innerText = buddy.email;
        h2.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
        p.innerText = `Email Id: ${buddy.email} `;
        buddiesDiv.appendChild(h2);
        buddiesDiv.appendChild(p);
    }
}