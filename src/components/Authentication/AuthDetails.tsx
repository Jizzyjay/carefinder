import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { User } from "firebase/auth";

function AuthDetails() {
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
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

  const handleLogout = () => {
    signOut(auth)
        .then(() => {
            console.log("logged out");
        }).catch((error) => {
            console.log("error", error);
        });
    };

    return (
  <div>
    {
      authUser ? (
        <>
          <p>{`Logged in as ${authUser.email}`}</p>
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <p>Logged out</p>
      )
    }
  </div>
);

}

export default AuthDetails;
