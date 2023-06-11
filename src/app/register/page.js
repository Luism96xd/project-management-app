"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button, TextField, Typography } from '@mui/material';
import { supabase } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })
      router.refresh()
    }catch(error){
      setError(error.message);
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className="register-container">
        <Typography component="h1" variant="h4" align="center">Crear una cuenta</Typography>
        <form onSubmit={handleSubmit} className="register-form">
          <div className='py-2'>{error}</div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="save-button"
          >
            Registrarse
          </Button>
          <br />
          <Link href="/login" className="signin-link">
            ¿Ya tienes una cuenta? Iniciar Sesión
          </Link>
        </form>
      </div>
    </div>
  );
}