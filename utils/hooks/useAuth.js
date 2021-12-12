import React, { useState, useEffect } from "react";
import firebase, { auth } from "../firebase";
import { useLazyQuery, useQuery } from "@apollo/client";
import { authMutations } from "../apollo/entities/auth/operations/auth.mutations";
import { GET_USER_BY_FIREBASE_ID } from "../apollo/entities/auth/operations/auth.queries";
function useAuth() {
  const [getUser, { called, loading, data }] = useLazyQuery(
    GET_USER_BY_FIREBASE_ID
  );
  const [authTemp, setAuthTemp] = useState(null);
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (user) {
          const idToken = await user.getIdToken();
          const idTokenReuslt = await auth.currentUser.getIdTokenResult();
          const isAdmin = await Boolean(idTokenReuslt.claims.isAdmin);
          const userInfo = {
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            uid: user.uid
          };

          setAuthTemp({
            userInfo,
            idToken,
            isAdmin
          });
          getUser({
            variables: {
              fb_id: user.uid
            }
          });
        } else {
          authMutations.setAuth(null, null, null, null);
        }
      });
    return () => unregisterAuthObserver();
  }, []);
  useEffect(() => {
    console.log(data);
    if (called && data && auth) {
      const userId = data.user[0].id || null;
      console.log("code run");
      authMutations.setAuth(
        authTemp.userInfo,
        authTemp.idToken,
        authTemp.isAdmin,
        userId
      );
    }
  }, [auth, data, called]);
}

export default useAuth;
