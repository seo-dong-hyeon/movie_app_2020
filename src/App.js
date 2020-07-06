import React from 'react';

function Food({name, image}){
  return <div>
    <h2>I like {name}!!!</h2>
    <img src={image} alt="profile"/>
  </div>
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

// {Javascript}
// Array.map(fucntion(dish){return result}), dish는 배열의 각 element
// map은 array로 리턴 -> [<Food name = {dish1.name} image = {dish1.image} />, <Food name = {dish2.name} image = {dish2.image} />]
// props 객체들의 유일성이 없어짐 -> key 전달 필요 -> key는 인자로는 안쓰임
function App() {
  return (
    <div className="App">
      {foodILike.map(dish => 
        <Food key = {dish.id} name = {dish.name} image = {dish.image} />)}
    </div>
  );
}

export default App;
