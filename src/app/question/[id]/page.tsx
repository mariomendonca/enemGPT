'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { doCompletion } from '@/app/service/api'
import data from '../../enem_questoes.json'

export default function Question({ params }: { params: { id: string } }) {
  const { id } = params
  const [completion, setCompletion] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function handleDoCompletion() {
      const response = await doCompletion(data[id].enunciado)
      setCompletion(response.choices[0].text)
      setIsLoading(false)
    }
    handleDoCompletion()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoading ? <span>carregando...</span> : (
        <>
          <div className="flex w-full justify-between">
            <Link href={'/'}>{'<'} Voltar</Link>
            <h1>({Number(id) + 1}) Questão</h1>
          </div>
          <div className="flex w-full flex-col justify-between">
            <span className='mb-6'>
              <span className='text-lg'>
                Questão:
              </span>
              {data[id].enunciado}</span>

            <span>Explicação: {completion}</span>
          </div>
        </>
      )}
    </div>
  )
}