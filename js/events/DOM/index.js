'use strict'

document.addEventListener( 'DOMContentLoaded', function ( e )
{
    console.log( e, 'DOMContentLoaded' )
} )

window.addEventListener( 'load', function ( e )
{
    console.log( e, 'load' )
} )


window.addEventListener( 'beforeunload', function ( e )
{
    e.preventDefault()
    e.returnValue = ''
})