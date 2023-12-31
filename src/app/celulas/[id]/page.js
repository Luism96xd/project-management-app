import Table from '@/components/Table';
import { supabase } from '@/lib/supabase-server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import React from 'react';
import ButtonCelulas from '@/components/button-celulas';

const getData = async (id) => {
  try {
    const { data } = await supabase.from('areas_de_trabajo').select().match({ id }).single()
    return data;
  } catch (error) {
    console.log(error);
  }
}

const CelulaPage = async ({params}) => {
  const {id} = params;
  const celula = await getData(id);

  if (!celula) {
    notFound();
  }

  const data = [
    {
      "id": 1,
      "full_name": "Wendall Gripton",
      "email": "wg@creative.org",
      "gender": "Male",
      "age": 100,
      "start_date": "2022-01-26"
    },
    {
      "id": 2,
      "full_name": "John Doe",
      "email": "john.doe@creative.org",
      "gender": "Male",
      "age": 22,
      "start_date": "2022-01-26"
    },
    {
      "id": 3,
      "full_name": "Jane Doe",
      "email": "jane.doe@creative.org",
      "gender": "Female",
      "age": 23,
      "start_date": "2022-01-26"
    },
  ];

  const columns = [
    { label: "Full Name", accessor: "full_name", sortable: true },
    { label: "Email", accessor: "email", sortable: true },
    { label: "Gender", accessor: "gender", sortable: true },
    { label: "Age", accessor: "age", sortable: true },
    { label: "Start date", accessor: "start_date", sortable: true },
  ];


  return (
    <div className='grid grid-cols-2 h-screen p-4 gap-6'>
      <div className='bg-white rounded-lg p-10 flex flex-col gap-4'>
        <div className="flex items-center justify-between w-full">
          <h1 className='font-bold text-2xl'>{celula && `Célula de ${celula?.name}`}</h1>
          <div className='w-20 flex justify-between'>
            <Link href={`/celulas/${id}/edit`}>
              <Image
                src={'/edit.svg'}
                width={32}
                height={32}
                alt='Editar Proyecto'
                className='fill-black dark:fill-white'
              />
            </Link>
            <Link href={`/celulas/${id}/delete`}>
              <Image
                src={'/delete.svg'}
                width={32}
                height={32}
                alt='Eliminar Proyecto'
                className='fill-black dark:fill-white'
              />
            </Link>
          </div>
        </div>
        <p className='text-justify'>{celula?.description}</p>
      </div>
      <div className='bg-white rounded-lg p-4'>
        <ButtonCelulas areaId={id}/>
        <Table
          caption={'Lista de Miembros'}
          data={data}
          columns={columns}
        />
      </div>
    </div>
  )
}

export default CelulaPage;