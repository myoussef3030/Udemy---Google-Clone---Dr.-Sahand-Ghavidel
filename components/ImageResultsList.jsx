

const ImageResultsList = ({results}) => {


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2 space-y-2 p-5 mt-4">

            {results.items.map(item => (    

               <div key={item.link} className="group mb-8">

                    <a href={item.image.contextLink}>
                        <img className="group-hover:shadow-xl w-full h-60 object-cover" src={item.link} alt={item.title} />
                    </a>

                    <a href={item.image.contextLink}>
                        <h2 className="truncate text-xl">{item.title}</h2>
                    </a>

                    <a href={item.image.contextLink}>
                        <p>{item.displayLink}</p>
                    </a>

               </div> 
            ))}

        </div>
    )
}

export default ImageResultsList

