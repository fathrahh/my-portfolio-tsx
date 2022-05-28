import * as React from 'react'

interface PhotosProps {
    src: string
    className?: string
}

const Photos: React.FC<PhotosProps> = ({ src, className }) => {
    return (
        <div className='bg-white p-4 w-max rounded'>
            <div className='w-48 h-64 object-contain  overflow-hidden'>
                <img src={src} />
            </div>

        </div>
    )
}

Photos.defaultProps = {
    className: ""
}

export default Photos