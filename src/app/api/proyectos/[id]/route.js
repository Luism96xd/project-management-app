import { supabase } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function GET({ params }) {
    console.log(JSON.stringify(params, 2, null))
    const id = 11;

    try {
        const { data } = await supabase.from('proyectos').select().match({ id }).single()
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
    }
    NextResponse.json(data)
}

export async function PUT(request, {params}) {
    const {id} = params;
    const requestData = await request.json();
    const { name, description } = requestData;

    console.log(id, name, description)

    const { data, error } = await supabase
        .from('proyectos')
        .update({ name: name, description: description })
        .eq('id', id);
    print(data, error);
    return NextResponse.json(data);

}