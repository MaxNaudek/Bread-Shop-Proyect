const menu = [
    {
        id: 1,
        title: "Chocolatín",
        category: "special",
        price: "$22.99",
        img: "./images/chocolatin.jpg",
        description: `Deliciosa masa de hojaldre rellena de chocolate 70% cacao`,
    },
    {
        id: 2,
        title: "Dona",
        category: "traditional",
        price: "$17",
        img: "./images/dona.jpg",
        description: `La original rosquilla glaseada con un exquisito chocolate`,
    },
    {
        id: 3,
        title: "Rosca de reyes",
        category: "seasonal",
        price: "$230",
        img: "./images/rosca.jpg",
        description: `Disponible a partir del 1 de enero, rinde de 3 a 5 personas`,
    },
    {
        id: 4,
        title: "Muffin",
        category: "chocolate",
        price: "$31.99",
        img: "./images/muffin.jpg",
        description: `Mejor que una mantecada, más gordo que una dona!`,
    }
]

const cardbread= document.querySelector(".section-center");
const buttonContainer= document.querySelector(".button-container");
const buttons= document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  unfoldMenu(menu);
  // cardbread.innerHTML = `<h1>MAAAAX</h1>`
});
function unfoldMenu(callbackMenu) {
  let completeMenu=callbackMenu.map(e=>
  `  <article class="menu-item">
      <img src=${e.img} alt=${e.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${e.title}</h4>
        </header>
        <p class="item-text">
          ${e.description}
        </p>
        <h4 class="price">${e.price}</h4>
      </div>
    </article>`
  )
  // console.log(completeMenu)
cardbread.innerHTML = completeMenu.join('')
}

//Al usar querySelectorAll solo se pueden llamar elementos usando el forEach para tener acceso a cada uno de los elementos con la misma clase.
 buttons.forEach((e)=>{
  e.addEventListener("click", function (e) {
  const dataCategory = e.target.dataset.category;
   //console.log(dataCategory);

  const categoriesMenu = menu.filter(function (element){
    if (element.category===dataCategory) {
      console.log(element)
      return element
    }

    // console.log(element.category);
  })
  if (dataCategory==="all") {
    unfoldMenu(menu)

  } else{
    unfoldMenu(categoriesMenu)
  }
  })
})
