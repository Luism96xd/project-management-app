'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase-client';

export default function AuthForm() {
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa }}
      theme="light"
      showLinks={false}
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  )
}