// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articlesObject = response.data.articles;
        const bootsComp = articlesObject.bootstrap.map(cardComponent)
        const jsComp = articlesObject.javascript.map(cardComponent);
        const jqueryComp = articlesObject.javascript.map(cardComponent)

        console.log(articlesObject);
        bootsComp.forEach(element => {
            document.querySelector('.cards-container').appendChild(element);
        });

        jsComp.forEach(element => {
            document.querySelector('.cards-container').appendChild(element);
        });
        
        jqueryComp.forEach(element => {
            document.querySelector('.cards-container').appendChild(element);
        });
        
    })
    .catch(error =>{
        console.log(error);
    })

function cardComponent(article) {
    card = document.createElement('div');
    card.classList.add('card');
    headline = document.createElement('div');
    headline.classList.add('headline');
    author = document.createElement('div');
    author.classList.add('author');
    imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    image = document.createElement('img');
    authorsName = document.createElement('span');

    headline.textContent = `${article.headline}`;
    image.setAttribute('src', article.authorPhoto);
    authorsName.textContent = `${article.authorName}`;

    imgContainer.appendChild(image);
    author.appendChild(imgContainer);
    author.appendChild(authorsName);
    card.appendChild(headline);
    card.appendChild(author);

    return card;
}