import React from 'react'
import Typed from 'react-typed'

import { homeTyped } from './../const/homeTyped'
import { useTheme } from '../context'
import { baseColorTheme, reverseColorTheme } from '../utils/baseColorHelpers'

import Section from '../components/Section'
import FakeIDE from '../components/FakeIDE'

const Home = () => {
    const [transfromText, setTransformText] = React.useState(false)
    const [modalShown, setModalShown] = React.useState(false)
    const { state: { theme } } = useTheme()
    const textLight = "text-white"
    const textDark = "text-dark"
    const textTheme = baseColorTheme(theme, textLight, textDark)
    const reverseTheme = reverseColorTheme(theme)

    const handleTypingComplete = () => {
        setModalShown(true)
        setTimeout(() => {
            setTransformText(true)
            setModalShown(false)
        }, 2000)
    }

    return (
        <Section id="home">
            <div className='flex flex-col items-center'>
                <div className='flex flex-col lg:flex-row w-full min-h-screen'>
                    {/* left */}
                    <div className='flex flex-col justify-center items-center lg:flex-1 py-4'>
                        <div className='w-80 lg:w-full lg:max-w-xl '>
                            <FakeIDE fileName='HelloWorld.tsx'>
                                <>
                                    <code>
                                        <pre>
                                            <span className='text-code-red'>import <span className='text-code-purple'>*</span> as <span className='text-code-white'>React</span> from <span className='text-yellow-300'>{`'react'\n\n`}</span></span>
                                        </pre>
                                        <pre>
                                            <span className='text-code-blue'>const <span className='text-code-green'>HelloWorld</span> <span className='text-code-red'>:</span> React.FC </span>
                                            <span className='text-code-red'>= () {"=> {"}</span>
                                        </pre>
                                        <pre className='text-code-muted'> {"//"} type your code below here</pre>
                                        <pre className='text-code-red'> return (</pre>
                                        <div className='ml-4 lg:ml-8 '>
                                            <p className='text-code-red'>
                                                <Typed strings={homeTyped} typeSpeed={15} onComplete={handleTypingComplete} />
                                            </p>
                                        </div>
                                        <pre className='text-code-red'>{"  )\n}"}</pre>
                                    </code>
                                    <div className={`absolute inset-0 ${modalShown ? "flex" : "hidden"} justify-center items-center`}>
                                        <div className='w-60 lg:w-80 bg-gray-500 rounded-md p-4'>
                                            <h3 className='text-code-white'>Yakin lo mau di save</h3>
                                            <div className='flex gap-3 mt-4'>
                                                <div className='flex-1 text-center rounded bg-gray-400'>Yakin dong</div>
                                                <div className='flex-1 text-center rounded bg-gray-400'>Gak Dong</div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </FakeIDE>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='flex flex-col justify-center space-y-4'>
                        <h3 className={` text-4xl font-bold text-code-green uppercase`}>Front End Developer</h3>
                        <p className={`${transfromText ? "block" : "hidden"} text-yellow-300  w-96`}>
                            Welcome to my personal portofolio website I am a student who has more interest in software development ! Please check my CV on the button below
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Home