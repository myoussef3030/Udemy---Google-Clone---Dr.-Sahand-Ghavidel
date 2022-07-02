import { useRouter } from "next/router"

const SearchResultsNavbarOption = ({title, Icon, selected}) => {

    const router = useRouter()

    function selectTab(title){

        router.push(`/search-results?searchTerm=${router.query.searchTerm}&searchType=${title === 'All' ? '' : 'image'}`)

    }

    return (
        <div className={`flex space-x-2 items-center 
                         select-none 
                         cursor-pointer
                         pb-2
                         border-b-4 border-transparent  
                         hover:text-blue-500 hover:border-blue-500
                         ${selected && "border-blue-400 text-blue-500"}`}
              onClick={() => selectTab(title)}
                         
        >

            <Icon className="h-4"/>
            <p>{title}</p>
            

        </div>
    )
}

export default SearchResultsNavbarOption


