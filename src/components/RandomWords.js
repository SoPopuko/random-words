import { useState } from 'react';
import FrenchWordsData from 'an-array-of-french-words'
import FlowerLine from './FlowerLine';
import LambAndGoat from './LambAndGoat';

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
            const word = { id: nextId++, name: words[wordId] }
            console.log(word)
            listOfWords.push(word)

            setListOfWords(listOfWords);
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
        <div className="random-words">
            <FlowerLine />
            <LambAndGoat />
            <div>
                <div className='text'> Choisi le nombre de mots </div>
                <div className='word-counter'>
                    <button className='tiny-btn' onClick={RemoveNumWord}> - </button>
                    <h2> {numberOfWords} </h2>
                    <button className='tiny-btn' onClick={AddNumWord}> + </button>
                </div>
                
                <div className='text'> Clique sur le bouton !</div>
                <ul className={numberOfWords>5 ? 'over-five' : ''}>
                    {listOfWords.map(word => (
                        <li key={word.id}>{word.name}</li>
                    ))}
                </ul>
            
                <button className='result-btn' onClick={getWords}> Avoir des mots </button>
            </div>
            <FlowerLine />

        </div>

    );
}