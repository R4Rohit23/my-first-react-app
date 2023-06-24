// here we are going to render list

// this is javascript array
const people = [{
    id: 1,
    name: 'Rohit',
    profession: 'Coder'
}, {
    id: 2,
    name: 'Deepak',
    profession: 'Mechanic'
}, {
    id: 3,
    name: 'Anurag',
    profession: 'Singer'
}, {
    id: 4,
    name: 'Chetas',
    profession: 'Coder'
}, {
    id: 5,
    name: 'Manas',
    profession: 'Coder'
}];

// now we are filtering the given (people) array on the basis of certain condtion using filter() function of JS
// the new array after filtering will be stored in coders array
const coders = people.filter(person => person.profession === 'Coder');

// now we will run map() function on each element of coders array returning the new array as a result
// map() function is used to generate list
// key is used to uniquely identify the list items
const listItems = coders.map(person => 
<li key={person.id}>
<h1>Mera name {person.name} hai aur mai {person.profession} hu</h1>
</li>);

function List() {
    // here we will return the resultant array
    return <ul>{listItems}</ul>;
}

export default List;