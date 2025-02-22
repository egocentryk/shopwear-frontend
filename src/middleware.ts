import { NextRequest } from 'next/server'

const unauthorizedRoutes = ['/auth/login', '/auth/signup']

export function middleware(request: NextRequest) {
  const auth = request.cookies.get('Authentication')?.value
  console.log('middleware')

  if (
    !auth &&
    !unauthorizedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route),
    )
  ) {
    console.log('Redirecting to login')
    return Response.redirect(new URL('/auth/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
