import data from '../data.json'

export default async function getScoreData(): Promise<string> {
  const res = JSON.stringify(data)
  return res
}
