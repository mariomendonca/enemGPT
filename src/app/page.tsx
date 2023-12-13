'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { doLogin } from './service/users'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleLogin() {
    if (!email || !password) {
      alert("Eamil e senha precisam estar preenchidos")
    }
    try {
      await doLogin(email, password)
      router.push('/home')

    } catch {
      alert("Algo de errado aconteceu")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 py-4 md:px-20 md:py-10 flex items-center justify-center">
      <div className='border-gray-600 border-2 border-solid px-8 py-16 rounded-lg'>

        <div className='w-96 flex flex-col items-center'>
          <h1 className='font-bold text-3xl mb-16'>EnemGPT - Login</h1>
          <Input style={{ marginBottom: 16 }} placeholder='Email' onChange={e => setEmail(e.target.value)} />
          <Input type='password' style={{ marginBottom: 32 }} placeholder='Senha' onChange={e => setPassword(e.target.value)} />
          <Button className='w-full' onClick={handleLogin}>{isLoading ? 'Carregando...' : 'Entrar'}</Button>
          <Link href={"/register"} className='mt-3'>nao possui conta? criar</Link>
        </div>
      </div>
    </main>
  )
}
