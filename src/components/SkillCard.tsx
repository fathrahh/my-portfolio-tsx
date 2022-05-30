import * as React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { IconType } from 'react-icons/lib'
import { useTheme } from '../context'
import { baseColorTheme } from '../utils/baseColorHelpers'

interface SkillCardProps {
    Icon: IconType
    onClick?: () => void
    text: string
}

const SkillCard: React.FC<SkillCardProps> = ({ Icon, text, onClick }) => {
    const { state: { theme } } = useTheme()
    const textLight = "text-white"
    const textDark = "text-dark"
    const shadowTheme = baseColorTheme(theme, "shadow-dark", "shadow-gray-400")

    return (
        <div
            className={`${shadowTheme} flex-1 group lg:relative cursor-pointer flex items-center shadow-all-sm p-4 lg:py-8 gap-3 rounded-sm`}
            onClick={onClick}
        >
            <div className='lg:hidden lg:absolute lg:inset-0 lg:bg-black/70 lg:group-hover:flex lg:flex-col lg:justify-center lg:items-center'>
                <BiSearchAlt className='w-5 h-5 lg:w-12 lg:h-12 opacity-0 group-hover:opacity-100 transition-opacity' />
            </div>
            <div className='flex flex-row lg:flex-col lg:justify-center items-center lg:w-full'>
                <Icon className='mr-2 w-6 h-6 lg:w-20 lg:h-20' />
                <span className='text lg:mt-5 lg:-ml-2'>{text}</span>
            </div>
        </div>
    )
}

export default SkillCard