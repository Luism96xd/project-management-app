import Link from 'next/link';
import {supabase} from '@/lib/supabase-server';

const getData = async () => {
  try {
    const { data, error } = await supabase
      .from('areas_de_trabajo')
      .select('*');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Celulas(){
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("session: ", session);
  
  /*if (!session) {
    redirect('/login')
  }*/

  const data = await getData();

  return (
    <div>
      <div className='flex flex-row py-4 px-8 h-16 justify-between items-center'>
        <h1 className='text-xl font-bold py-2'>Áreas de Trabajo</h1>
        <Link href={'/celulas/new'}>
          <button className='bg-green-500 px-4 py-2 text-white rounded-lg h-full'>
            Crear nueva
          </button>
        </Link>
      </div>
      <div className='grid grid-cols-3 grid-rows-3 h-screen p-4 gap-6'>
        {data.map((celula) => {
          return (
            <Link key={celula.id} href={`/celulas/${celula.id}`}>
              <div key={celula.id} className='bg-white rounded-lg shadow-md p-4 h-3/4'>
                <h2 className='w-full text-center font-bold'>{celula.name}</h2>
                <p>{celula.description}</p>
              </div>
            </Link>
          );
        })
        }
      </div>
    </div>
  )
}


