import Link from 'next/link'
import data from './enem_questoes.json'

type Question = {
  area: string
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Array.isArray(data) && data.map((question: Question, index: number) => (
        <Link href={`/question/${index}`} key={index.toString()}>
          <p>({index + 1}) área: {question.area}</p>
        </Link>
      ))}
    </main>
  )
}
