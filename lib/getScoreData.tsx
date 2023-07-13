export default async function getScoreData(): Promise<string> {
  const scoreData = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "/public/assets/images/icon-reaction.jpg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "/public/assets/images/icon-memory.jpg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "/public/assets/images/icon-verbal.jpg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "/public/assets/images/icon-visual.jpg"
    }
  ]
  const res = JSON.stringify(scoreData)

  return res
}
