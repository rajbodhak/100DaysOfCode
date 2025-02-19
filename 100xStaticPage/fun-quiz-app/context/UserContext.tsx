"use client";

import { useState, useContext, createContext, ReactNode } from "react";

interface UserContextType {
    name: string;
    setName: (name: string) => void;
    score: number;
    setScore: (score: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState("");
    const [score, setScore] = useState(0);

    return (
        <UserContext.Provider value={{ name, setName, score, setScore }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser mush used within UserProvider");
    return context;
}