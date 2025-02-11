// window.addEventListener( 'load', function ()
// {
    const fruit = [ 'banana', 'orange', 'apple', 'peach', 'pineapple', 'mango', 'cherry', 'strawbbery' ]

    const list = document.querySelector('.list')
    const lis = fruit.map( ( ( fruit, index ) =>
    {
        const li = document.createElement( 'li' )
        li.textContent = `${ index + 1 }. ${ fruit }`
        return li
    } ) )

    list.append( ...lis )

    const seacher = document.querySelector( '#seacher' )

    seacher.addEventListener( 'input', function ( e )
    {
        lis.forEach( l => l.classList.remove( 'purple' ) )
        const value = e.target.value
        if( !value ) return
        const filterLis = lis.filter( l => l.textContent.includes( value ) )
        filterLis.forEach( l => l.classList.add( 'purple' ) )

    })
// })