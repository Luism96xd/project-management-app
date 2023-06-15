import { supabase } from "@/lib/supabase-server";
import { NextResponse } from 'next/server'

export async function GET() {
    const {data} = await supabase.from("proyectos").select();
    return NextResponse.json(JSON.stringify(data, null, 2));
}

export async function POST(request) {
    const requestData = await request.json();
    const { name, description } = requestData;

    const { data, error } = await supabase
        .from('proyectos')
        .insert([
            { name: name, description: description },
        ])
    return NextResponse.json(data);
}