import { Children, Dispatch, SetStateAction, createContext, useState } from "react";

export type User = {
    username: string;
}

export interface UserContextInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>>

}

const UserProvider = () => {
    // const [user, setUser] = useState<User>();

    // return (
    //     <UserContext.Provider value={{user, setUser}}>
    //         {children}
    //     </UserContext.Provider>
    // )
}

