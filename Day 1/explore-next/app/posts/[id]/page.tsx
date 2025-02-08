"use client";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

const page = () => {
    const params = useParams();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`/api/user/${params.id}`);
                const data = await response.json();
                setUser(data.user[0]);
            } catch (error) {
                console.log("Error fetching user details", error);
            }
        };

        if (params.id) fetchUserDetails();
    }, [params.id])
    console.log(user);
    if (!user) return <div className="text-center text-yellow-400 text-2xl ">Loading...</div>;

    return (
        <div className="flex flex-col justify-center p-20">
            <h1 className="text-yellow-400 text-3xl"><span className="font-bold text-yellow-600">Name: </span>{user?.name}</h1>
            <p className="text-xl text-yellow-300"><span className="font-bold text-yellow-600">Age: </span>{user?.age}</p>
            <p className="text-xl text-yellow-300"><span className="font-bold text-yellow-600">Profession: </span>{user?.profession}</p>
        </div>
    )
}

export default page
