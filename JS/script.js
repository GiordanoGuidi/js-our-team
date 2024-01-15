console.log('HELLO WORLD')

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

console.log(teamMembers)

// STAMPO IN CONSOLE LE CHIAVI DEGLI OGGETTI NELL'ARRAY
for(let i = 0; i < teamMembers.length;i++){
    const member = teamMembers[i]
    console.log(teamMembers[i])
    //CREO CICLO FOR IN PER CICLARE IN OGNI OGGETTO DELL'ARRAY
    for(let key in member){
        console.log(member[key])
    }
}