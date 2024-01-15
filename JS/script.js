
//# RECUPERO GLI ELEMENTI

let listElement = document.getElementById('team-member-list');
console.log(listElement)

// CREO UN ARRAY DI OGGETTI
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'

    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'

    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'

    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'

    },

    {
        name: 'Scott Estrada ',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'

    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
        
    }
]

let listMembers= ''
// STAMPO IN CONSOLE LE CHIAVI DEGLI OGGETTI NELL'ARRAY
for(let i = 0; i < teamMembers.length;i++){
    let member = teamMembers[i]
    console.log('member',member);
    //RECUPERO I VALORI DELLE CHIAVI
    const name = member.name;
    const role = member.role;
    const photo = member.photo;
    //COSTRUISCO LIST ITEM
    listMembers+= `<li>
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="img/${photo}">
                        <div class="carde-body"
                        <p>${name}</p>
                        <p>${role}</p>
                    </div>
                    </li>`
    console.log('sono list  items', listMembers)
}
// STAMPO IN PAGINA I VALORI
listElement.innerHTML = listMembers; 
// console.log('list items finale', listMembers)




