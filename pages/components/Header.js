import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"


import Image from 'next/image'
import HeaderItem from './HeaderItem'


function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5
                            justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon}></HeaderItem>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}></HeaderItem>
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}></HeaderItem>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}></HeaderItem>
                <HeaderItem title="SEARCH" Icon={SearchIcon}></HeaderItem>
                <HeaderItem title="ACCOUTN" Icon={UserIcon}></HeaderItem>
            </div>
            <Image 
            className="object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hulu_logo_2017.svg/799px-Hulu_logo_2017.svg.png"
            width={200}
            height={100}
            />
        </header>
    )
}

export default Header
