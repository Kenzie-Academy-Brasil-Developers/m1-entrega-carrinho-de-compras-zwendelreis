const productsCart = [
  
    {
        id: 2,
        name: "Água de coco",
        price: 8.00
    },
    {
        id: 3,
        name: "Uva Crimson",
        price: 10.00
    },
    {
        id: 4,
        name: "Vinho Canção",
        price: 7.00
    },
    {
        id: 5,
        name: "Mamão",
        price: 6.00
    },
    {
        id: 6,
        name: "Água Tônica",
        price: 5.00
    },
]

    const body = document.querySelector("body");
    const main = document.createElement("main");
    let ul = document.createElement("ul");
    const button = document.createElement("button");
    const section= document.createElement("section");
    

    button.innerText = "Finalizar"

function criarCard(productsCart) {
   
    for(let i=0; i<productsCart.length; i++){
        let liCard = document.createElement("li")
        let nomeCard = document.createElement("p")
        let valorCard = document.createElement("p")
        
        
        if(i<productsCart.length){
            
            nomeCard.innerText= productsCart[i].name
            valorCard.innerText=  `R$${productsCart[i].price.toFixed(2)}`;
            liCard.append(nomeCard, valorCard)
            ul.appendChild(liCard)
           
        }
        
       
    }
    
  
}

console.log(criarCard(productsCart));

let somaTotal = document.createElement("p")

function somarP(productsCart) {

let soma =0;
    for(let i=0; i<productsCart.length;i++){
        soma = soma+productsCart[i].price
        
    }
    return somaTotal.innerText = ` Total valor : R$${soma.toFixed(2)}`;

    
}
console.log(somarP(productsCart));



body.appendChild(main);
main.appendChild(ul);
main.appendChild(section);
section.append(somaTotal);
section.append(button);

