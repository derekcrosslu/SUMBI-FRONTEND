import { AuthBindings, AuthProvider } from "@refinedev/core";
import { supabaseClient } from "./utility/supabaseClient";
export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
  
        try {

            const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email,
                password,
            });


            if (error) {
                return {
                    success: false,
                    error,
                };
            }

            if (data?.user) {
                return {
                    success: true,
                };
            }
        } catch (error: any) {
            return {
                success: false,
                error,
            };
        }

        return {
            success: false,
            error: {
                message: "Login failed",
                name: "Invalid email or password",
            },
        };
    },
    register: async ({ email, password }) => {
        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.log("error: ", error);
                return {
                    success: false,
                    error,
                };
            }

            if (data) {
                return {
                    success: true,
                };
            }
        } catch (error: any) {
            return {
                success: false,
                error,
            };
        }

        return {
            success: false,
            error: {
                message: "Register failed",
                name: "Invalid email or password",
            },
        };
    },
    forgotPassword: async ({ email }) => {
        try {
            const { data, error } =
                await supabaseClient.auth.resetPasswordForEmail(email, {
                    redirectTo: `${window.location.origin}/update-password`,
                });

            if (error) {
                return {
                    success: false,
                    error,
                };
            }

            if (data) {

                return {
                    success: true,
                };
            }
        } catch (error: any) {
            return {
                success: false,
                error,
            };
        }

        return {
            success: false,
            error: {
                message: "Forgot password failed",
                name: "Invalid email",
            },
        };
    },
    updatePassword: async ({ password }) => {
        try {
            const { data, error } = await supabaseClient.auth.updateUser({
                password,
            });

            if (error) {
                return {
                    success: false,
                    error,
                };
            }

            if (data) {
                return {
                    success: true,
                    redirectTo: "/",
                };
            }
        } catch (error: any) {
            return {
                success: false,
                error,
            };
        }
        return {
            success: false,
            error: {
                message: "Update password failed",
                name: "Invalid password",
            },
        };
    },
    logout: async () => {
        const { error } = await supabaseClient.auth.signOut();

        if (error) {
            return {
                success: false,
                error,
            };
        }

        return {
            success: true,
            redirectTo: "/login",
        };
    },
    onError: async (error) => {
        if (error?.code === "PGRST301" || error?.code === 401) {
            return {
                logout: true,
            };
        }

        return { error };
    },
    check: async () => {
        try {
            const { data } = await supabaseClient.auth.getSession();
            const { session } = data;


            if (!session) {
                return {
                    authenticated: false,
                    error: {
                        message: "Check failed",
                        name: "Session not found",
                    },
                    logout: true,
                    redirectTo: "/login",
                };
            }
        } catch (error: any) {
            return {
                authenticated: false,
                error: error || {
                    message: "Check failed",
                    name: "Session not found",
                },
                logout: true,
                redirectTo: "/login",
            };
        }

        return {
            authenticated: true,
        };
    },
    getPermissions: async () => {
        const user = await supabaseClient.auth.getUser();

        if (user) {
            return user.data.user?.role;
        }

        return null;
    },
    getIdentity: async () => {
        const { data } = await supabaseClient.auth.getUser();

        if (data?.user) {
            return {
                ...data.user,
                name: data.user.email,
            };
        }

        return null;
    },
};
