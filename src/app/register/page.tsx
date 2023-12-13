'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { createUser } from '../service/users'

export default function Home() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleCreateccount() {

    if (!email || !password || !confirmPassword || !name) {
      return alert("Todos os campos precisam ser preenchidos")
    }

    if (!(email.split('@').length === 2)) {
      return alert("O email não está correto")
    }

    if (!(password === confirmPassword)) {
      return alert("As senhas devem ser iguais")
    }

    try {
      setIsLoading(true)
      await createUser({
        email,
        name,
        password
      })
      router.push('/')
    } catch {
      alert("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 py-4 md:px-20 md:py-10 flex items-center justify-center">
      <div className='border-gray-600 border-2 border-solid px-8 py-16 rounded-lg'>

        <div className='w-96 flex flex-col'>
          <Link href={"/"}>{"<"} Voltar</Link>
          <h1 className='font-bold text-3xl mb-16 self-center'>EnemGPT - Criar Conta</h1>
          <Input style={{ marginBottom: 16 }} placeholder='Nome' onChange={e => setName(e.target.value)} />
          <Input style={{ marginBottom: 16 }} placeholder='Email' onChange={e => setEmail(e.target.value)} />
          <Input type='password' style={{ marginBottom: 16 }} placeholder='Senha' onChange={e => setPassword(e.target.value)} />
          <Input type='password' style={{ marginBottom: 32 }} placeholder='Confirme a senha' onChange={e => setConfirmPassword(e.target.value)} />
          <Button className='w-full' onClick={handleCreateccount}>{isLoading ? 'Carregando...' : 'Criar conta'}</Button>
        </div>
      </div>
    </main>
  )
}
