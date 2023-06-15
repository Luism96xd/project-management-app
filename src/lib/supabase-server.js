import "server-only";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const createClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

    const client = createServerComponentClient({ cookies }, { supabaseUrl, supabaseKey });
    return client;
}

export const supabase = createClient();