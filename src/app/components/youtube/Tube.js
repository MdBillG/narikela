import React from 'react'

const Youtube = () => {
    return (
        <div className="my-3">
            <div className='sm:block hidden'>

                <iframe
                    src="https://www.youtube.com/embed/VX9nJFQlumw"
                    width={"100%"}
                    height={"500px"}
                    allowFullScreen
                />
            </div>
            <div className='sm:hidden block'>

                <iframe
                    src="https://www.youtube.com/embed/VX9nJFQlumw"
                    width={"100%"}
                    height={"300px"}
                    frameborder="0"
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default Youtube
