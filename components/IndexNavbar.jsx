import UserMenu from './UserMenu'
import Link from 'next/link'
import { useRouter } from 'next/router'

const IndexNavbar = () => {

    const router = useRouter()

    return (
        <div className="flex justify-between text-sm p-5 text-gray-700">

            <div className="flex space-x-4">
                <Link href="https://about.google/">
                    <a className='link'>About</a>
                </Link>

                <Link href="https://store.google.com/">
                    <p className='link'>Store</p>
                </Link>
            </div>

            <div className="flex space-x-4 items-center">

                <Link href="https://mail.google.com/">
                    <p className='link'>GMail</p>
                </Link>

                <a onClick={() => router.push(`/search-results?searchTerm=${router.query.searchTerm || 'google'}&searchType=image`)} className='link'>Images</a>

                <UserMenu />
            </div>

        </div>
    )
}

export default IndexNavbar


