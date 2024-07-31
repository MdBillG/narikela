import React from 'react'

const Youtube = () => {

    const embedUrl = `https://www.youtube.com/watch?v=VX9nJFQlumw&ab_channel=KaivalyaMithra`;
    return (
        <div>
            <div className='sm:block hidden'>

                <iframe
                    src="https://www.youtube.com/embed/VX9nJFQlumw"
                    width={"100%"}
                    height={"500px"}
                    frameborder="0"
                    allowfullscreen
                />
            </div>
            <div className='sm:hidden block'>

                <iframe
                    src="https://www.youtube.com/embed/VX9nJFQlumw"
                    width={"100%"}
                    height={"300px"}
                    frameborder="0"
                    allowfullscreen
                />
            </div>
        </div>
    )
}

export default Youtube
