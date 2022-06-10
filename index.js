const menu = [
    {
        id: 1,
        title: "Chocolatín",
        category: "special",
        category2: "chocolate",
        price: "$22.99",
        img: "./images/chocolatin.jpg",
        description: `Deliciosa masa de hojaldre rellena de chocolate 70% cacao`,
    },
    {
        id: 2,
        title: "Pan danés",
        category: "special",
        price: "$26",
        img: "./images/danes.PNG",
        description: `No es mexicano, no es español, es danés`,
    },
    {
        id: 3,
        title: "Rol de canela",
        category: "special",
        price: "$17",
        img: "./images/rol.jpg",
        description: `El mejor acompañamiento para disfrutes una taza de café`,
    },
    {
        id: 4,
        title: "Bigote relleno",
        category: "special",
        category2: "chocolate",
        price: "$19",
        img: "./images/bigote.jpg",
        description: `Suave pan de hojadre perfecto para el desayuno`,
    },
    {
        id: 5,
        title: "Dona",
        category: "traditional",
        category2: "chocolate",
        price: "$17",
        img: "./images/dona.jpg",
        description: `La original rosquilla glaseada con un exquisito chocolate`,
    },
    {
        id: 6,
        title: "Concha",
        category: "traditional",
        price: "$16",
        img: "./images/concha.jpg",
        description: `De vainilla o chocolate`,
    },
    {
        id: 7,
        title: "Puerquito",
        category: "traditional",
        price: "$16.50",
        img: "./images/puerquito.jpg",
        description: `Qué mejor mezcla de pan y galleta.`,
    },
    {
        id: 8,
        title: "Polvorón",
        category: "traditional",
        price: "$17",
        img: "./images/polvoron.jpg",
        description: `Arenosos y con mucho sabor a mantequilla.`,
    },
    {
        id: 9,
        title: "Oreja",
        category: "traditional",
        price: "$15",
        img: "./images/oreja.jpg",
        description: `Con una consistencia crocante.`,
    },
    {
        id: 10,
        title: "Cuernito",
        category: "traditional",
        price: "$15.50",
        img: "./images/cuernito.jpg",
        description: `Pasta de hojaldre enrollada en forma de media luna y cocida al horno.`,
    },
    {
        id: 11,
        title: "Pan piedra",
        category: "traditional",
        category2: "chocolate",
        price: "$14",
        img: "./images/piedra.jpg",
        description: `Con una corteza perfecta y un horneado homogéneo.`,
    },
    {
        id: 12,
        title: "Rosca de reyes",
        category: "seasonal",
        price: "$230",
        img: "./images/rosca.jpg",
        description: `Disponible a partir del 1 de enero, rinde de 3 a 5 personas`,
    },
    {
        id: 13,
        title: "Pan de muerto",
        category: "seasonal",
        price: "$20",
        img: "./images/panmuerto.jpg",
        description: `Es una figura en forma de cuerpo humano completo o cabecitas, manos, huesos y hasta pezuñas de animales.`,
    },
    {
        id: 14,
        title: "Concha arcoiris",
        category: "seasonal",
        price: "$27",
        img: "./images/arcoiris.PNG",
        description: `Disponible durante todo el mes de junio`,
    },
    {
        id: 15,
        title: "Muffin",
        category: "special",
        category2: "chocolate",
        price: "$19",
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
