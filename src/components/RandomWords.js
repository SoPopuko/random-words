import { useState } from 'react';
import FrenchWordsData from 'an-array-of-french-words'

export default function RandomWords() {
    const [numberOfWords, setNumberWords] = useState(1);
    const words = FrenchWordsData
    const size = Object.keys(words).length;
    var nextId = 0;

    var [listOfWords, setListOfWords] = useState([]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function getWords() {  
        listOfWords=[]
        for(let i = 0; i <= numberOfWords-1; i++){
            var wordId = getRandomInt(size)
            console.log(words[wordId])
            const i = [...listOfWords, { id: nextId++, name: words[wordId] }]

            setListOfWords(i);
        }
        
        console.log("liste",listOfWords)
    }

    function RemoveNumWord() {
        if(numberOfWords > 1){
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
                    <li key={word.id}>{word.name}</li>
                ))}
            </ul>
            <button onClick={getWords}> Trouver des mots </button>
        </div>

    );
}