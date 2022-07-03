

const SearchResultsList = ({results}) => {



    return (
        <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[52%]">

            <p className="text-sm text-gray-600 mt-3 mb-5">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime})s</p>

        </div>
    )
}

export default SearchResultsList
