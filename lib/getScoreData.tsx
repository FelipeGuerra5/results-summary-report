import React from 'react'

export default async function getScoreData(): Promise<string> {
    const scoreData = [
        {
          "category": "Reaction",
          "score": 80,
          "icon": "./assets/images/icon-reaction.svg"
        },
        {
          "category": "Memory",
          "score": 92,
          "icon": "./assets/images/icon-memory.svg"
        },
        {
          "category": "Verbal",
          "score": 61,
          "icon": "./assets/images/icon-verbal.svg"
        },
        {
          "category": "Visual",
          "score": 72,
          "icon": "./assets/images/icon-visual.svg"
        }
      ]

      return JSON.stringify(scoreData)
}
