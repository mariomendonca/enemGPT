import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

export async function doCompletion(prompt?: string) {
  if (!prompt) throw new Error('prompt must be provided')
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `me explique essa questão de prova ${prompt}`,
    temperature: 0,
    max_tokens: 500
  })
  return completion
}
