import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Toaster } from "./components/ui/sonner.tsx"
import { Provider } from "react-redux"
import store from "./redux/store.js"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

const persistor = persistStore(store)


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  <Toaster />
  </StrictMode >
)

