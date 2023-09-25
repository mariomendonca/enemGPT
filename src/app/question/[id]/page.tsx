'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { doCompletion } from '@/app/service/api'
import data from '../../enem_questoes.json'

type Data = {
  enunciado: string
}

export default function Question({ params }: { params: { id: string } }) {
  const { id } = params
  const [completion, setCompletion] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const question = Array.isArray(data) && data[Number(id)].enunciado

  useEffect(() => {
    async function handleDoCompletion() {
      const response = await doCompletion(question)
      setCompletion(response.choices[0].text)
      setIsLoading(false)
    }
    handleDoCompletion()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <p className='mb-6'>
              <span className='text-lg'>
                Questão:
              </span>
              {question}
            </p>

            <p>Explicação: {completion}</p>
          </div>
        </>
      )}
    </div>
  )
}