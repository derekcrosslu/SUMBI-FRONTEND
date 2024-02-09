import { AuthBindings } from "@refinedev/core";
import { supabaseClient } from "./utility/supabaseClient";
export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthBindings = {
    login: async ({  email, password, providerName }) => {
        console.log("email, password, providerName : ", email, password, providerName );
        // const { data, error } =
        // await supabaseClient.auth.signInWithOAuth({
        //     provider: providerName,
        // });
        // console.log("data, error: ", data, error, providerName);
        
        // if ((username || email) && password) {
        //     localStorage.setItem(TOKEN_KEY, username);
        //     return {
        //         success: true,
        //         redirectTo: "/",
        //     };
        // }

        return {
            success: false,
            error: {
                name: "LoginError",
                message: "Invalid username or password",
            },
        };
    },
    logout: async () => {
        localStorage.removeItem(TOKEN_KEY);
        return {
            success: true,
            redirectTo: "/login"
        };
    },
    check: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            return {
                authenticated: true
            };
        }

        return {
            authenticated: false,
            redirectTo: "/login"
        };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            return {
                id: 1,
                name: "John Doe",
                avatar: "https://i.pravatar.cc/300",
            };
        }
        return null;
    },
    onError: async (error) => {
        console.error(error);
        return { error };
    },
};
