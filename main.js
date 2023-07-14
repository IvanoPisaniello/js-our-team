// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg


const listContainer = document.getElementById("list-container");


//creo un array di oggetti inserendo i dati all'interno degli oggetti: parolaChiave: "proprietà"
const team = [
    {
        firstName: "Waine",
        lastName: "Barnett",
        role: "Founder & Ceo",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        firstName: "Walter",
        lastName: "Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        firstName: "Scott",
        lastName: "Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        firstName: "Barbara",
        lastName: "Ramos",
        role: "Grafic Designer",
        img: "Barbara-ramos-grafic-designer.jpg",
    }
]

console.log(team)

//creo un ciclo for per prendere i valori degli oggetti e stamparli nell'html


for (let i = 0; i < team.length; i++) {
    const listTeam = team[i];

    console.log(listTeam);

    listContainer.innerHTML += `<div class="list-group-item border py-3 rounded-3">${listTeam.firstName} ${listTeam.lastName} (${listTeam.role}) ${listTeam.img}</div>`;
}




