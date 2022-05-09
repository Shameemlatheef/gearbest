

let product = JSON.parse(localStorage.getItem("product"));



console.log(product);


let append=(data) =>{

    let container=document.getElementById("item");

    let img = document.createElement("img");
    img.src = data.image_url;

    let title = document.createElement("h3");
    title.innerText = data.name;

    let price = document.createElement('h2');
    price.innerText = `Price     : $ ${data.price}`;
    price.style.color = "crimson"; 

    let btn1 = document.createElement('button');
    btn1.innerText = "Add To Cart";
    btn1.style.cursor = "pointer";
    btn1.setAttribute("class" , "btn1")
    btn1.addEventListener("click" ,function(){
        addTocart(data)
    })

    let btn2 = document.createElement('button');
    btn2.innerText = "Buy Now";
    btn2.style.cursor = "pointer";
    btn2.setAttribute("class" , "btn2")

    let imgdiv = document.getElementById("pic");
    imgdiv.append(img);

    let detail = document.getElementById("deatils");
    detail.append(title , price , btn1 ,btn2);

    container.append(imgdiv , detail)
}

append(product);


function addTocart(data)
{
    alert("Product Added To Cart");

    localStorage.setItem("cart" , JSON.stringify(data));
}