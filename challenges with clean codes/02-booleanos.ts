// Boleanos
//https://efficient-sloth-d85.notion.site/Desafio-Booleanos-aaab19f8e0394d20ae135c30094a7a3c

const AboutUser = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const MinimumHeightRequired = 130;

const currentHour = new Date().getHours()

const isTheParkOpen = currentHour > 9 && currentHour < 18

if (!isTheParkOpen) {
  throw new Error('O parque está fechado!')
}

const TheUserHasATicket = AboutUser.hasTicket

if (!TheUserHasATicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const heCanGetIntoTheToy = AboutUser.height > MinimumHeightRequired

if (!heCanGetIntoTheToy) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')