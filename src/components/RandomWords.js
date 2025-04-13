import { useState } from 'react';
import FrenchWordsData from 'an-array-of-french-words'

export default function RandomWords() {
    const [numberOfWords, setNumberWords] = useState(0);
    const words = FrenchWordsData
    var listOfWords = []

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function getWords(wordCount) {
        listOfWords = []
        console.log(numberOfWords)
        for(let i = 0; i <= wordCount-1; i++){
            var wordId = getRandomInt(words.length)
            listOfWords.push(words[wordId])
            console.log(listOfWords)
        }
    }

    function RemoveNumWord() {
        if(numberOfWords > 0){
            setNumberWords(numberOfWords-1)
        }

    }
    function AddNumWord() {
        if(numberOfWords < 10){
            setNumberWords(numberOfWords+1)
        }
    }

    return (
        <div>
            <h2> Choisi le nombre de mots </h2>
            <button onClick={RemoveNumWord}> - </button>
            {numberOfWords}
            <button onClick={AddNumWord}> + </button>
            <h2> Clique sur le bouton pour avoir {numberOfWords} mots</h2>
            <ul>
                {listOfWords.map(word => (
                    <li>{word}</li>
                ))}
            </ul>
            <button onClick={getWords(numberOfWords)}> Trouver des mots </button>
        </div>

    );
}