import { useState } from 'react';
import FrenchWordsData from 'an-array-of-french-words'

export default function WordsList({text, count}) {
  const words = FrenchWordsData
  var listOfWords = []

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getWords(wordCount) {
      var prelist = []
      for(let i = 0; i <= wordCount-1; i++){
          var wordId = getRandomInt(words.length)
          prelist.push(words[wordId])
          console.log(prelist)
      }
      listOfWords.push(prelist)
  }
  return (
    <div>
        <ul>
            {listOfWords.map(word => (
                <li>{word}</li>
            ))}
        </ul>
      <button onClick={getWords(count)} >
        {text}
      </button>
    </div>
  )
}