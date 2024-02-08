import { 
    Refine,
    GitHubBanner, 
    WelcomePage,
    Authenticated, 
} from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { AuthPage,ErrorComponent
,useNotificationProvider
,ThemedLayoutV2
,ThemedSiderV2} from '@refinedev/antd';
import "@refinedev/antd/dist/reset.css";

import nestjsxCrudDataProvider from "@refinedev/nestjsx-crud";
import { App as AntdApp } from "antd"
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";
import { useTranslation } from "react-i18next";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Header } from "./components/header";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ForgotPassword } from "./pages/forgotPassword";
import { authProvider } from "./authProvider";




function App() {
    const { t, i18n } = useTranslation();

    
            const API_URL = "https://api.nestjsx-crud.refine.dev";
const dataProvider = nestjsxCrudDataProvider(API_URL);
            

            const i18nProvider = {
                translate: (key: string, params: object) => t(key, params),
                changeLocale: (lang: string) => i18n.changeLanguage(lang),
                getLocale: () => i18n.language,
            };
            
    
    return (
        <BrowserRouter>
        <GitHubBanner />
        <RefineKbarProvider>
            <ColorModeContextProvider>
<AntdApp>
            <DevtoolsProvider>
                <Refine dataProvider={dataProvider}
notificationProvider={useNotificationProvider}
routerProvider={routerBindings}
authProvider={authProvider}
i18nProvider={i18nProvider} 
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                        useNewQueryKeys: true,
                            projectId: "XHSDAH-Vz5nYS-Kd78ow",
                        
                    }}
                >


                        <Routes>
                            <Route index element={<WelcomePage />} />
                        </Routes>
                    <RefineKbar />
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
            <DevtoolsPanel />
            </DevtoolsProvider>
            </AntdApp>
</ColorModeContextProvider>
        </RefineKbarProvider>
        </BrowserRouter>
      );
};

export default App;
