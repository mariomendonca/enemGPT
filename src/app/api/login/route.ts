import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const { email, password } = await request.json()
  try {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if (!user) {
      throw new Error("user not found")
    }

    if (password !== user?.password) {
      throw new Error("wrong password")
    }

    return Response.json(user)
  } catch (error) {
    return Response.error()
  }
}
