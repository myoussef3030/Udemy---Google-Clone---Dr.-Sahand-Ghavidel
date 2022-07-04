import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PaginationButtons = () => {

    const router = useRouter()

    const startIndex = Number(router.query.start) || 1

    const prev = `/search-results?searchTerm=${router.query.searchTerm}&searchType=${router.query.searchType}&start=${startIndex - 10}`
    const next = `/search-results?searchTerm=${router.query.searchTerm}&searchType=${router.query.searchType || ''}&start=${startIndex + 10}`

    return (
        <div className="flex space-x-44 justify-center my-20 cursor-pointer">

            {startIndex > 10 && <Link href={prev}><a><ChevronLeftIcon className="h-10"/></a></Link>}
            {startIndex < 90 && <Link href={next}><a><ChevronRightIcon className="h-10"/></a></Link>}
        
        </div>
    )
}

export default PaginationButtons

