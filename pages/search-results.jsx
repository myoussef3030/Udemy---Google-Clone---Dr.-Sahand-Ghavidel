import Head from "next/head"
import SearchResultsNavbar from "../components/SearchResultsNavbar"
// import { useRouter } from "next/router"

const SearchResults = () => {

    // const router = useRouter()



    return (
        <div>
            <Head>
                <title>Search Results Page</title>
            </Head>

            <SearchResultsNavbar />
        </div>
    )
}

export default SearchResults
