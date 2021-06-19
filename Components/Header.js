import React from 'react';
import Image from 'next/image' 
import HeaderItems from './HeaderItems';
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'

const myLoader = ({ src }) => {
    // return `https://links.papareact.com/${src}`
    return `https://press.hulu.com/wp-content/uploads/2020/02/${src}`
    
}


const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItems title="HOME" Icon={HomeIcon}/>
                <HeaderItems title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItems title="COLLECTION" Icon={CollectionIcon}/>
                <HeaderItems title="SEARCH" Icon={SearchIcon}/>
                <HeaderItems title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <div>
            <Image 
                loader={myLoader}
                src="/hulu-white.png" 
                width={200}
                height={100}
            />
            </div>
        </header>
    );
};

export default Header;