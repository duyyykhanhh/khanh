// const  displayFullName = ({first,last}) => {
//     console.log(MyName `${first} ${last}`);\

// }
const displayFullName = ({ first, last }) => {
    console.log( ` My Name is ${first} ${last}`);
  }
const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
displayFullName(person)
