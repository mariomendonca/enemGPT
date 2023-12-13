import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const user = await request.json()
  try {
    const createdUser = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password
      }
    })
    return Response.json(createdUser)
  } catch (error) {
    return Response.error()
  }
}