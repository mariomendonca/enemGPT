import data from './enem_questoes.json'

type Question = {
  area: string
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((question: Question, index: number) => (
        <div key={index.toString()}>
          <p>({index + 1}) área: {question.area}</p>
        </div>
      ))}
    </main>
  )
}
