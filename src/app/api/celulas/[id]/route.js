import { supabase } from "@/lib/supabase-server";
import {NextResponse} from 'next/server';

export async function GET(request, {params}) {
    const { id } = params;
    try {
        const {data, error} = await supabase.from('areas_de_trabajo').select().match({ id }).single();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json([]);
    }
}

export async function POST(request, {params}) {
    const {id} = params;
    const res = await request.json();
    const { data, error } = await supabase
        .from('areas_de_trabajo')
        .update({ other_column: 'otherValue' })
        .eq('some_column', id);
    return NextResponse.json({ 'message': `Updated item with id ${data.id}`});
}