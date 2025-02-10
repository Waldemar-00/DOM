'use strict'
const wrapper = document.querySelector( '.wrapper' )

for ( let i = 0; i < 100; i++ )
{
    const div = document.createElement( 'div' )
    div.classList.add('inner')
    div.textContent = `User with id: ${ i + 1000 }`
    wrapper.append( div )

    //! bad code below
    //* div.addEventListener( 'click', () => div.remove() )
    //! Here we have one function for every User, in total - 100
}

//! ONLY one function for ALL Users!!!!!!!!!
wrapper.addEventListener( 'click', ( e ) => e.target.remove() ) //* DELEGATION

//! ONLY one function for ALL Users!!!!!!!!!

//! well be contain: document, elements, texts, comments
console.log( wrapper.childNodes ) //! Here NodeList contains texts AND elements ( divs )
console.log( wrapper.children ) //! HTMLCollection contains only elements ( divs )


console.log( wrapper.parentNode )
console.log( wrapper.parentElement )

console.log( wrapper.closest( 'div' ) )
console.log( wrapper.closest( 'body' ) )
console.log( wrapper.closest( 'h1' ) ) //! null the same level
console.log( wrapper.closest( '.wrapper' ) )

//! the same level - By siblings
console.log('The _________same level');

console.log( wrapper.previousElementSibling )
console.log( wrapper.previousSibling )
console.log( wrapper.nextElementSibling )
console.log( wrapper.nextSibling ) //! text includs ' ', '\n' and act.

console.log( wrapper.parentElement.children[2] )