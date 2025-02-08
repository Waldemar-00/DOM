'use strict'
//* console.log( document )
//* console.log( document.documentElement )
//* console.log( document.querySelectorAll( 'meta' ) )

function createElement ( element, indentifier, text, attribute, value )
{
    const button = document.createElement( element )
    button.classList.add( indentifier )
    button.textContent = text
    button.setAttribute( attribute, value )
    return button
}
placeElementInBody( createElement( 'button', 'btn_get', 'Get scroll', 'type', 'button' ) )
    .addEventListener( 'click', getOffset )

function placeElementInBody ( element )
{
    document.querySelector( 'body' ).append( element )
    return element
}

function placeDivsOnPage (amount)
{
    for ( let i = 0; i < amount; i++ )
    {
       placeElementInBody( createElement( 'div', 'div_test', `${ i+1 }` ) )
    }
}
placeDivsOnPage( 20 )

function getOffset ( event )
{
    //* console.log( `ScrollX: ${ window.scrollX }` )
    //* console.log( `ScrollY: ${ window.scrollY }` )

    //* console.log( `ClientWidth: ${ document.documentElement.clientWidth }` )
    //* console.log( `ClientHeight: ${ document.documentElement.clientHeight }` )

    //* console.log( event.target.getBoundingClientRect() )

    const lastElement = document.querySelector( 'body' ).lastChild

    console.log( `ScrollY: ${ window.scrollY }` )
    //! ONLY VIEWPORT: x, y or top and left
    console.log( lastElement.getBoundingClientRect() )
    //! ONLY VIEWPORT: x, y or top and left

    window.scrollTo( {
        top: lastElement.getBoundingClientRect().y + window.scrollY,
        //!viewport.y + scrollY = all height of document
        left: 0,
        behavior: 'smooth'
    })

}