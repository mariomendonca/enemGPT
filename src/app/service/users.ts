import { prisma } from '@/lib/prisma'
import { service } from './service'

type User = {
  id?: string
  name: string
  email: string
  password: string
  createdAt?: Date
}

export async function createUser(user: User) {
  try {
    const createdUser = await service.post('/api/users', user)
    return createdUser
  } catch (error) {
    console.log(error)
  }
}

export async function doLogin(email: string, password: string) {
  try {
    const user = await service.post('/api/login', { email: email, password: password })
    return user
  } catch (error) {
    throw new Error()
  }
}
