import React from 'react'

const Youtube = () => {

    const embedUrl = `https://www.youtube.com/watch?v=VX9nJFQlumw&ab_channel=KaivalyaMithra`;
    return (
        <div>
            This is youtube vide

            <iframe
                src="https://www.youtube.com/embed/gfU1iZnjRZM"
                frameborder="0"
                allowfullscreen
            />
        </div>
    )
}

export default Youtube
