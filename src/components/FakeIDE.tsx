import * as React from 'react'
import { SiTypescript } from 'react-icons/si'

interface FakeIDEProps {
    fileName?: string
    functionName?: string
    children?: React.ReactElement
}

const FakeIDE: React.FC<FakeIDEProps> = ({ fileName, functionName, children }) => {
    return (
        <div className='relative flex flex-col lg:w-full lg:h-[300px] overflow-hidden rounded-md'>
            <header className='bg-dark p-2 w-full'>
                <div className=' flex gap-2'>
                    <div className='w-3 h-3 rounded-full bg-red-600'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                    <div className='w-3 h-3 rounded-full bg-lime-500'></div>
                </div>
            </header>
            <div className='bg-code-dark'>
                <div className='flex items-center text-xs w-max relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-yellow-300 after:rounded-sm px-2 py-1.5'>
                    <SiTypescript className='mr-1' color='2E72BC' />
                    <span className='text-yellow-200 font-semibold'>{fileName}</span>
                </div>
            </div>
            <section className='bg-code-dark pt-2 text-sm lg:text-sm px-4 font-semibold flex-1 pb-12'>
                {children}
            </section>
        </div>
    )
}

FakeIDE.defaultProps = {
    fileName: "index.tsx",
    functionName: "Main"
}

export default FakeIDE