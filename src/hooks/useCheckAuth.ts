import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { FirebaseAuth } from "../firebase/firabase";
import { onAuthStateChanged } from "firebase/auth";
import useGetStatusConection from "./useGetStatusConection";
import { checkingCredentials, login, logout } from "../store/auth";
import { notifications } from "@mantine/notifications";

export const useCheckAuth = () => {

    const { status } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const { statusConection } = useGetStatusConection()
    useEffect(() => {
        dispatch(checkingCredentials())
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if(statusConection==='not-conection')return notifications.show({
                id: 'not-conection',
                title: 'Se perdio la conexion a internet',
                message: 'verifica tu conexion a internet 🤥',
                color: 'yellow',
              })

            if (!user) return dispatch(logout({}));

            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
        })
    }, []);

    return status;
}