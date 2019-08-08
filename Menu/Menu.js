window.addEventListener('load', (e) => {

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const menuButton = document.querySelector('.menu-button')
const menuDiv = document.querySelector('.menu')

function renderMenuItems(menuItems) {
  return `
    <ul>
      ${menuItems.map(menuItem => `<li>${menuItem}</li>`)}
    </ul>
  `;
  return menuItem.join('');
}

const markup = `
  <div class="menu">
    ${renderMenuItems(menuItems)}
  </div>
`;

menuButton.innerHTML = markup;
console.log(markup);

menuButton.addEventListener('click', (e) => {
  menuButton.classList.toggle('menu--open')
  console.log('it works')

  // menuButton.appendChild(markup.textContent);  
});

})

/* <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div> */

// window.addEventListener('load', (e) => {

//   const menuButton = document.querySelector('.menu-button')
//   menuButton.classList.add('menu--open')

//   menuButton.addEventListener('click', (e) => {
//     menuButton.classList.toggle('menu--open');
//     console.log('open');
//   });

//   // loop over menu items
//   menuItems.forEach((item) => {
//     item = document.createElement('li')

//     // append items to menu
//     menuDiv.appendChild(menuItemCreator(item));
//     console.log(item)
//   });



//   // menu item creator function
//   function menuItemCreator(array) {

//     const menuDiv = document.createElement('div')
//     const unorderedList = document.createElement('ul')
//     const list = document.createElement('li')

//     menuDiv.appendChild(unorderedList);
//     unorderedList.appendChild(list);

//     menuDiv.classList.add('menu')

//     for(let i = 0; i < array.length; i++){
//       list.classList.textContent = array.length;
//     }

//   }


// }) // End of window event ('load') 

/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument. */



// function menuItemCreator(array) {

//   // define new elements
//   const menuDiv = document.createElement('div')
//   const unorderedList = document.createElement('ul')
//   const listItem1 = document.createElement('li')
//   const listItem2 = document.createElement('li')
//   const listItem3 = document.createElement('li')
//   const listItem4 = document.createElement('li')
//   const listItem5 = document.createElement('li')
//   const listItem6 = document.createElement('li')

// set up structure
// menuDiv.appendChild(unorderedList)
// unorderedList.appendChild(listItem1)
// listItem1.appendChild(listItem2)
// listItem2.appendChild(listItem3)
// listItem3.appendChild(listItem4)
// listItem4.appendChild(listItem5)
// listItem5.appendChild(listItem6)

// set class names
// menuDiv.classList.add('menu')

// set text content
// listItem1.textContent = menuItems[0]
// listItem2.textContent = menuItems[1]
// listItem3.textContent = menu[2]
// listItem4.textContent = menu[3]
// listItem5.textContent = menu[4]
// listItem6.textContent = menu[5]



//}

/* Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
Add those items to the <ul> */
// menuItems.forEach((item) => {
//   item = document.createElement('li')

//   menu.appendChild(item);
//   console.log(item)
// })

// function addContentToLI(){
//   for(let i = 0; i > menuItems.length; i++){
//     item.textContent = menuItems[i];
//     return menuItems[i];
//     console.log(menuItems[i])
//   }
// }

// addContentToLI();

/* Step 3: Using a DOM selector, select the menu button currently on the DOM. */

// const menuButton = document.querySelector('.menu-button')

/* Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself */

// menuButton.addEventListener('click', (e) => {
//   e.classList.toggle('menu--open');
//   console.log('open')
// })

/* Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/