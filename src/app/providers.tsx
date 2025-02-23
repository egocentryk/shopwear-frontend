'use client'

import { ThemeProvider } from "@emotion/react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import darkTheme from "./dark.theme"
import { AuthContext } from "./auth/auth-context"

interface ProvidersProps {
  children: React.ReactNode
  authenticated: boolean
}

export default function Providers({
  children,
  authenticated,
}: ProvidersProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <AuthContext.Provider value={authenticated}>
          {children}
        </AuthContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
