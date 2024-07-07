import React from 'react'
import Navigation from '../Navigation/Navigation'
import Content from '../Content/Content'

export default function Header() {
    return (
        <div className=' flex justify-between px-12 pt-2  '>
            <h1 className='text-2xl subpixel-antialiased tracking-wide font-medium text-[rgb(186,129,75)] '>Narikela</h1>
            <Navigation />
            <Content />
        </div>
    )
}
