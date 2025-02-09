'use strict'

function getElement ( selector )
{
    const element = document.querySelector( selector )
    return element
}
function addListener ( element, handleEvent, func )
{
    element.addEventListener( handleEvent, func, false )
}
function callBackChangeStyle ( element, style, value)
{
    console.log( element )
    element.style[style] = value
}
const button = getElement( '.btn' )
addListener( button, 'click', ( e ) =>
{
    callBackChangeStyle( button, 'backgroundColor', 'purple' )
    e.stopPropagation()
} )

const innerDiv = getElement( '.inner' )
addListener( innerDiv, 'click', () => callBackChangeStyle( innerDiv, 'backgroundColor', 'orange' ) )

const middleDiv = getElement( '.middle' )
addListener( middleDiv, 'click', () => callBackChangeStyle( middleDiv, 'backgroundColor', 'lightBlue' ) )

const wrapperDiv = getElement( '.wrapper' )
addListener(wrapperDiv, 'click', () => callBackChangeStyle(wrapperDiv, 'backgroundColor', 'yellow'))
