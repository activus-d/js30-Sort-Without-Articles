const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// bands.sort((a,b) => {
//   const aFirstWord = a.split(' ').slice(0, 1)
//   const bFirstWord = b.split(' ').slice(0, 1)
//   if(aFirstWord.join('').toLowerCase() === 'an' || aFirstWord.join('').toLowerCase() === 'a' || aFirstWord.join('').toLowerCase() === 'the') {
//     a = (a.split(' ').slice(1)).join(' ')
//   }
//   if(bFirstWord.join('').toLowerCase() === 'an' || bFirstWord.join('').toLowerCase() === 'a' || bFirstWord.join('').toLowerCase() === 'the') {
//     b = (b.split(' ').slice(1)).join(' ')
//   }
//   return a > b ? 1 : -1
// })
  

function strip(x) {
  return x.replace(/^(the |an |a )/i, '').trim()
}

bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1)
const bandList = document.querySelector('#bands')
let html = bands.map(band => {
  return `
  <li>${band}</li>
  `
}).join('')
bandList.innerHTML = html
console.log(bands)
