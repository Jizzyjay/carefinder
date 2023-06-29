import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Authentication/Login/Login";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

  const useAuth = () => {
    const [authUser, setAuthUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
            setAuthUser(user);
            } else {
            setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);

    return authUser;
    
    };

const ProtectedRoute = () => {

  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
