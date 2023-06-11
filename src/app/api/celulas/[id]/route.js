import { supabase } from "@/lib/supabase-client";

export async function GET({ params }) {
    const { id } = params;
    const data = await supabase.from('areas_de_trabajo').select().match({ id }).single();
    return NextResponse.json(data);
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