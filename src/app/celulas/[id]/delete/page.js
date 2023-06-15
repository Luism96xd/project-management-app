"use client";
import { redirect } from 'next/navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DeleteCelulaPage = async ({ params }) => {
  const { id } = params;
  const [celula, setCelula] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/celulas/${id}`);
      setCelula(response.data);
      console.log(response.data)
    }
    getData()
  }, [id])

  const deleteProduct = async () => {
    await axios.delete(`/api/celulas/${id}`);
    goBack()
  }

  const goBack = () => {
    redirect('/celulas')
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className='text-xl font-bold center mb-4 text-center'>{`¿Desea eliminar ${celula?.name}?`}</h2>
      <div className="flex gap-2 justify-center">
        <button className="w-16 rounded-lg bg-red-600" onClick={deleteProduct}>Sí</button>
        <button className="w-16 rounded-lg bg-gray-400" onClick={goBack}>No</button>
      </div>
    </div>
  )
}

export default DeleteCelulaPage;
