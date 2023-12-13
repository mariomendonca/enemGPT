'use client'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import data from '../enem_questoes.json'

type Question = {
  area: string
  enunciado: string
}

export default function Home() {
  const [math, setMath] = useState(true)
  const [language, setLanguage] = useState(true)
  const [history, setHistory] = useState(true)
  const [natural, setNatural] = useState(true)

  return (
    <main className="min-h-screen px-6 py-4 md:px-20 md:py-10 flex flex-col">
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl'>EnemGPT</h1>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'outline'}>Filtrar</Button>
          </PopoverTrigger>

          <PopoverContent>
            <div className='p-1 flex items-center space-x-2'>
              <Checkbox id='checkMath' onCheckedChange={() => setMath(!math)} checked={math} />
              <label htmlFor="checkMath">Matemática</label>
            </div>
            <div className='p-1 flex items-center space-x-2'>
              <Checkbox id='checkHistory' onCheckedChange={() => setHistory(!history)} checked={history} />
              <label htmlFor="checkHistory">Ciências Humanas</label>
            </div>
            <div className='p-1 flex items-center space-x-2'>
              <Checkbox id='checkLang' onCheckedChange={() => setLanguage(!language)} checked={language} />
              <label htmlFor="checkLang">Linguagens e Códigos</label>
            </div>
            <div className='p-1 flex items-center space-x-2'>
              <Checkbox id='checkNatural' onCheckedChange={() => setNatural(!natural)} checked={natural} />
              <label htmlFor="checkNatural">Ciências da Natureza</label>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
        {Array.isArray(data) && data.map((question: Question, index: number) => (
          <Link href={`/question/${index}`} key={index.toString()} className='col-span-1'>
            <Card className='px-2 py-1 md:px-3 md:py-2'>
              <span>({index + 1}) área: {question.area}</span>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
