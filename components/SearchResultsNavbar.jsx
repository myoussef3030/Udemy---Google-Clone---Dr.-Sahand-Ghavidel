import { SearchIcon, MicrophoneIcon, XIcon } from '@heroicons/react/solid'
import { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import UserMenu from './UserMenu'

const SearchResultsNavbar = () => {

    const router = useRouter()
    const inputRef = useRef(null)

    function search(e){
        e.preventDefault()

        const searchTerm = inputRef.current.value.trim()

        if(!searchTerm) return

        router.push(`/search-results?searchTerm=${searchTerm}`)

    }

    return (
        <header className="sticky top-0 bg-white flex items-center w-[100%]">

            <Image 
                onClick={() => router.push('/')}
                src="https://i.dlpng.com/static/png/6561851_preview.png" 
                width="140px" height="60px" 
                objectFit='contain'
                className="cursor-pointer"
            />


            <form className="flex items-center space-x-5 border border-gray-200 rounded-full shadow-lg mt-3 px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl">
                <input defaultValue={router.query.searchTerm} ref={inputRef} type="text" className="w-full outline-none"/>
                <XIcon onClick={() => inputRef.current.value = ''} className="h-7 hidden sm:inline-flex text-gray-500 cursor-pointer"/> 
                <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer border-l-2 border-gray-300 pl-3"/>
                <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer"/>

                <button onClick={search} hidden>ppp</button>
            </form>

            <div className="ml-auto pr-5">
                <UserMenu />
            </div>


        </header>
    )
}

export default SearchResultsNavbar

