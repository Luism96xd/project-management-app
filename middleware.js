import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const session = await supabase.auth.getSession();

  // if user is signed in and the current path is / redirect the user to /account
  if (session && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/proyectos', req.url))
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  return res
}

export const config = {
  matcher: ['/', '/login', '/proyectos'],
}