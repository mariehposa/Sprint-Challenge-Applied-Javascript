// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');
    const date = document.createElement('span');
    date.classList.add('date');
    const LambdaTimes = document.createElement('h1');
    const temp = document.createElement('span');
    temp.classList.add('temp');

    date.textContent = 'SMARCH 28, 2019';
    LambdaTimes.textContent = 'Lambda Times';
    temp.textContent = '98°';

    header.appendChild(date);
    header.appendChild(LambdaTimes);
    header.appendChild(temp);

    return header;
}

const headerComponent = Header();
document.querySelector('.header-container').appendChild(headerComponent)
