import { supabase } from "@/lib/supabase-client";

export async function GET({params}){
    const {id} = params;
    const data = await supabase.from('proyectos').select().match({ id }).single();
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}