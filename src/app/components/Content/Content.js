import React from 'react'
import IconButton from '../buttons.js/iconButton'

export default function Content() {
    return (
        <div className='flex gap-5 pt-1'>
            <IconButton icon="fas fa-user text-[rgb(186,129,75)]" />
            <IconButton icon="fas fa-search text-[rgb(186,129,75)]" />
            <IconButton icon="fas fa-shopping-cart text-[rgb(186,129,75)]" />
        </div>
    )
}
