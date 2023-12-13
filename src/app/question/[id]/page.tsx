'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiArrowLeft } from "react-icons/fi"

import { doCompletion } from '@/app/service/api'
import data from '../../enem_questoes.json'
import { Button } from '@/components/ui/button'

export default function Question({ params }: { params: { id: string } }) {
  const { id } = params
  const [completion, setCompletion] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const question: string = Array.isArray(data) ? data[Number(id)].enunciado : ''

  async function handleDoCompletion() {
    try {
      setIsLoading(true)
      const response = await doCompletion(question)
      setCompletion(response.choices[0].text)
    } catch (error) {
      alert('Ops, algo deu errado')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col p-24">
      <Link className='flex items-center mb-5' href={'/home'}><FiArrowLeft className='mr-2' /> Voltar para home</Link>
      <div className="flex w-full flex-col justify-between border-2 border-gray-600 rounded-lg p-10 mb-12">
        <p className='mb-6'>{question}</p>
      </div>



      {completion ? (
        <div className="flex w-full flex-col justify-between border-2 border-gray-600 rounded-lg p-10">
          <p>Explicação: {completion}</p>
        </div>
      ) : (
        <Button className='' onClick={handleDoCompletion}>
          {isLoading ? 'Carregando...' : 'Quero a explicação!!!!'}
        </Button>
      )}
    </div>
  )
}