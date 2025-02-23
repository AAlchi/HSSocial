import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Placeholder from '@/pages/components/pageComponents/PlaceHolder';

const Following = () => {
     const { data: session, status } = useSession();
    
    const [peopleFollow, setPeopleFollow] = useState<{ username: string | any }[]>([]);
    const router = useRouter()
    useEffect(() => {
        axios.post("/api/contacts/getFollowing", { username: session?.user.username }).then((res) => setPeopleFollow(res.data));
    }, []);

    return (
        <div>
            <h2 className="text-lg font-bold pb-3">Following</h2>
            {peopleFollow.map((people: any, index: number) => (
                <div key={index} className='py-1'>
                    <ContactCard username={people.username} placeholder={people.name} image={people.profilePicture} />
                </div>
            ))} 

            {peopleFollow.length < 1 && (
                 <div
                 style={{ width: "100%", maxWidth: "600px" }}
                 className="flex flex-col bg-white gap-10 px-7 py-4 rounded-lg"
               >
                 <div className="flex items-center justify-start gap-5 flex-wrap">  
                   <h1 className="text-lg">No users found</h1>
                 </div>
               </div>
            )}
        </div>
    )
}

export default Following