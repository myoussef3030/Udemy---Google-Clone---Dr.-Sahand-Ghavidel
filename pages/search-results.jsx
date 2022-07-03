import Head from "next/head"
import SearchResultsNavbar from "../components/SearchResultsNavbar"
import { useRouter } from "next/router"
import axios from 'axios'

import mockData from '../mock-data/index'
import SearchResultsList from "../components/SearchResultsList"

const SearchResults = ({results}) => {

    const router = useRouter()

    console.log(results)


    return (
        <div>
            <Head>
                <title>{router.query.searchTerm}</title>
            </Head>

            <SearchResultsNavbar />

            <SearchResultsList results={results} />
        </div>
    )
}

export default SearchResults

export async function getServerSideProps(context){

    const searchTerm = context.query.searchTerm
    const searchType = context.query.searchType === '' ? "" : "&searchType=image"

    let str = 'https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures'

    str = str.replace('INSERT_YOUR_API_KEY', process.env.GOOGLE_SEARCH_API_KEY)
    str = str.replace('017576662512468239146:omuauf_lfve', process.env.GOOGLE_SEARCH_ENGINE_CX)
    str = str.replace('lectures', searchTerm + searchType)
    console.log(str)
    
    // const {data} = await axios.get(str)
    
    return {
        props: {
            // results: data
            results: mockData
        }
    }
}
