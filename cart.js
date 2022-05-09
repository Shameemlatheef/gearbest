//let cart = JSON.parse(localStorage.getItem("cart"));

var mensData =
    [{
      goodsImage:
        "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16468/goods_img-v1/4fc7ed7521ab.jpg",
      goodsTitle: "MEN'S REEBOK RUNNING ROADMAP SHOES",
      Displayprice: 1170,
      // strikedoffprice: "$2599",
    }]

    let total = mensData.reduce(function(sum,el){

        return sum + Number(el.Displayprice);
    },0)

    document.getElementById("total-final").innerText = `$ ${total}`;
    // total.style.padding = 10px;
// window.addEventListener("update",function(){
//     displayData(cart);

// })
// console.log(cart)

// cart.map(function(elem){
// //let row =document.createElement("tr")

// let img=document.createElement("img")
// img.src=elem.image_url;
// console.log(elem.name)
//  let timage=document.querySelector("#imageee");
//  let namee=document.createElement("p");
//  namee.innerText=elem.name
//  document.getElementById("nameee").append(namee)
//  document.getElementById("nameee").innerHTML=null;

// //row.append(img,);
//  timage.append(img);
//  timage.innerHTML = null;

// })

// // let proname =document.createElement("img")
// // img.src=elem.img;

// // let img=document.createElement("img")
// // img.src=elem.img;

// // let img=document.createElement("img")
// // img.src=elem.img;
// })


let append = (data) =>{

    console.log(data)

    let  container = document.getElementById('head');

    data.forEach((el)=>{

    let div = document.createElement('div');

    let image = document.createElement('img');
    image.src = el.goodsImage;

    let title = document.createElement('p');
    title.innerText = el.goodsTitle;

    let price = document.createElement('h3');
    price.innerText =`$ ${el.Displayprice}`;
    
    price.style.color = "crimson";

    let btn =document.createElement("button");
    btn.innerText ="Delete";
    btn.style.backgroundColor="yellow";
    btn.style.border="none";
    btn.style.width="80px";
    btn.style.height="30px";
    btn.style.cursor="pointer";
    btn.style.marginLeft="-30px";
    btn.addEventListener("click",function(){
        removeItem(el, index);
    })


    div.append(image , title);

    document.getElementById("money").append(price)
    document.getElementById("remove").append(btn)
    // document.getElementById("subtotal1").append(price)

    container.append(div);
    })
    function removeItem(el, index) {
        console.log(el, index);
        cart.splice(index, 1);
        // console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();

    
    }
    // container.innerHTML = null;

}
append(mensData);

