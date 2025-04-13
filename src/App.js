import { useState } from 'react';
import FrenchWordsData from 'an-array-of-french-words'

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>  
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
function ShoppingList(numberWanted) {
  const words = FrenchWordsData
  const [products, setProducts] = useState([]);
  console.log(numberWanted.counted)
  for(let i = 0; i < numberWanted.counted-1; i++){
    console.log('dans le for')
    var wordId = Math.floor(Math.random() * words.lenght)    
    console.log('hello')
    console.log(typeof(words))
    console.log(words[wordId])
    console.log('bye')
    setProducts(words[wordId])
    console.log(products)
  }
  const listItems = products?.map(product =>
    <li>
      {product}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default function MyApp() {
  const count = 5;
  console.log(typeof(count))

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton />
      <Profile />
      <ShoppingList counted={count} />
    </div>
  );
}