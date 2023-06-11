import { supabase } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function GET() {
    let { data: proyectos, error } = await supabase
        .from('areas_de_trabajo')
        .select('*');
    return NextResponse.json(proyectos);
}


export async function POST(request) {
    const requestData = await request.json();
    const { name, description } = requestData;

    const { data, error } = await supabase
        .from('areas_de_trabajo')
        .insert([
            { name: name, description: description },
        ])
    return NextResponse.json(data);
}