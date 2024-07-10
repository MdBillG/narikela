import React from 'react'

export default function Blogs() {
    return (
        <div>
            <h1>Our Blogs</h1>
            <hr />
            <div className='flex flex-row'>
                <h1>blog1 heading</h1>
                <img
                    className="w-1/4 h-32 object-cover rounded-xl my-7"
                    src={`/image/4cards/image2.jpeg`}
                    alt={`Card`}
                />
                <h1 className='text-center'>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </h1>
            </div>
        </div>
    )
}
