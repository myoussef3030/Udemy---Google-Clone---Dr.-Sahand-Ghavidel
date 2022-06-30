import UserMenu from './UserMenu'


const IndexNavbar = () => {

    return (
        <div className="flex justify-between text-sm p-5 text-gray-700">

            <div className="flex space-x-4">
                <p className='link'>About</p>
                <p className='link'>Store</p>
            </div>

            <div className="flex space-x-4 items-center">
                <p className='link'>GMail</p>
                <p className='link'>Images</p>
                <UserMenu />
            </div>

        </div>
    )
}

export default IndexNavbar


