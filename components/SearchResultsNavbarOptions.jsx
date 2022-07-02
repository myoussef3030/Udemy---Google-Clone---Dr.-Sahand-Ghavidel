import SearchResultsNavbarOption from "./SearchResultsNavbarOption"
import { SearchIcon, PhotographIcon} from '@heroicons/react/outline'
import { useRouter } from "next/router"


const SearchResultsNavbarOptions = () => {

    const router = useRouter()

    return (
        <div className="flex space-x-2 justify-center lg:justify-start lg:pl-52 mt-4 text-sm text-gray-400 border-b-2">

            <SearchResultsNavbarOption title="All" Icon={SearchIcon} selected={router.query.searchType === ''}/>
            <SearchResultsNavbarOption title="Images" Icon={PhotographIcon} selected={router.query.searchType === 'image'}/>

        </div>
    )
}

export default SearchResultsNavbarOptions


