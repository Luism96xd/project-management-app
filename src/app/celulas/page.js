import Link from 'next/link';
import { supabase } from '@/lib/supabase-server';

export const revalidate = 0;

const getData = async () => {
  try {
    let { data: celulas, error } = await supabase
    .from('areas_de_trabajo')
    .select('*');
    return celulas;
  }catch(error){
    console.log(error);
  }
}

const Celulas = async () => {
  const celulas = await getData();

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
        {celulas.map((celula) => {
          return (
            <Link key={celula.id} href={`/celulas/${celula.id}`}>
              <div className='bg-white rounded-lg shadow-md p-4 h-3/4'>
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

export default Celulas;