"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Button, TextField, Typography } from '@mui/material';
import { supabase } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if (error) {
            console.log(error);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await supabase.auth.signInWithPassword({
            email,
            password,
        })
        router.push('/dashboard');
    };

    return (
        <div className="login-container bg-white rounded-lg">
            <Typography component="h1" variant="h4" align="center">Iniciar Sesión</Typography>
            <form onSubmit={handleSubmit} className="login-form">
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
                    autoComplete="current-password"
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
                    Iniciar Sesión
                </Button>
                <hr />
                <button onClick={signInWithGoogle} className="rounded-lg bg-white px-4 py-2">Iniciar Sesión con Google</button>

                <Link href="/register" className="signup-link">
                    ¿Aún no tienes una cuenta? Registrarse
                </Link>
            </form>
        </div>
    );
}

export default LoginForm;