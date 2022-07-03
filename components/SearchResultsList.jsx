import htmlParser from 'html-react-parser'


const SearchResultsList = ({results}) => {



    return (
        <div className="px-3 sm:pl-[5%] md:pl-[14%] lg:pl-[22%]">

            <p className="w-full mx-auto text-sm text-gray-600 mt-3 mb-5">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime})s</p>

            {results.items.map(item => (
            
                <div key={item.link} className="max-w-xl mb-8">

                    <div className="group">
                        
                        <a href={item.link} className="text-sm truncate">{item.formattedUrl}</a>

                        <a className="group-hover:underline decoration-blue-800" href={item.link}>
                            <h2 className="truncate text-xl font-medium text-blue-800">{item.title}</h2>
                        </a>                

                    </div>

                    <p className="text-gray-600">{htmlParser(item.htmlSnippet)}</p>

                </div>
            ))}

        </div>
    )
}

export default SearchResultsList
