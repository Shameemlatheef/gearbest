import { navbar1}  from "./navbar.js";

console.log(navbar1)
 let nava=document.getElementById("navbar1")
 nava.innerHTML=navbar1()



 let arr1=["https://uidesign.gbtcdn.com/GB/image/9746/PC+1190.jpg?imbypass=true","https://uidesign.gbtcdn.com/GB/image/8823/PC+1190X420-en.jpg","https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg?imbypass=true","https://uidesign.gbtcdn.com/GB/image/8823/1190X4200.jpg?imbypass=true"]

let imagee=()=>{
    let sub2main1box2=document.getElementById("sub2main1box2");
    let i=0;
    let delay=500;
    
   setInterval(()=>{
       
      sub2main1box2.innerHTML=null;
       let img1=document.createElement("img");
       
       img1.src=arr1[i]
       i++;
       if(i==arr1.length){
           i=0
       }
       img1.style.width="860px";
       img1.style.height="445px"
        
       sub2main1box2.append(img1);
   },1500);
}
imagee();;



let timer=()=>{
    let j=23;
    let hr=document.getElementById("hr");
   
    setInterval(()=>{
        hr.innerHTML=null;
        let hour=document.createElement("p");
        hour.setAttribute("id","houree")
        hour.innerText=j;
        j--;
        if(j==0){
            j=23
        }
        hr.append(hour)
    },6000)
};
timer();


let minut=()=>{
    let min=document.getElementById("minute");
    let k=60;
    setInterval(()=>{
        min.innerHTML=null;
        let minu=document.createElement("p");
        minu.setAttribute("id","houre");
   
        minu.innerText=k;
        k--;
        if(k==0){
            k=59
        }
        min.append(minu)
      
    },5000)
}
minut()
let sec=()=>{
    let sec=document.getElementById("seconds");
    let l=60;
    setInterval(()=>{
        sec.innerHTML=null;
        let secu=document.createElement("p");
        secu.setAttribute("id","houree")
        secu.innerText=l;
        l--;
        if(l==0){
            l=59;
        }
        sec.append(secu)
    },1000)
}
sec()

var image = [
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16454/goods_img-v1/42405dc55cb8.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v4/a0da751fd8f8.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
  
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img-v1/5e4723996cff.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/6233d35f6f8a.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16492/goods_img-v1/bb1748b1d9f2.jpg",
      title:
        " Xiaomi Mi Water Immersing Sensor Smart Wireless Water Leak Detector IP67 Dustproof Waterproof Works With Mijia APP - White",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_img-v1/5f26bc001550.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v1/0b0ff330204b.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16420/goods_img-v3/d5477f83e8f5.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/store/6878399324569661440/16425/goods_img-v3/7a007e142207.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_img-v3/6d537d29b48f.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16456/goods_img-v1/5ef9d5b1a9a0.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16496/goods_img-v5/64df3bb8819d.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16460/goods_img-v1/524849cb314c.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16417/goods_img-v1/0b74ebf9ee1a.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16448/goods_img-v3/6f9c892c7ec6.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16409/goods_img-v1/5b7959d3089f.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_img-v3/e0b65bad2e24.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16414/goods_img-v1/76cb26d2019a.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/3aef13f28d2e.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16484/goods_img-v1/068099f7545f.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16427/goods_img-v1/1993a3019ba8.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16152/goods_img-v2/78e3dccea62c.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15928/goods_img-v3/591815f358a7.jpg",
  
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16396/goods_img-v1/526c71907b5c.jpg",
      image_url1:
        "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_img-v1/5f26bc001550.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16499/goods_img-v5/cc85a2308636.jpg",
  
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16500/goods_img-v1/810d59db032c.jpg",
  
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16409/goods_img-v1/ee708b0fcc32.jpg",
  
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15928/goods_img-v3/591815f358a7.jpg",
  
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
  
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16417/goods_img-v1/0b74ebf9ee1a.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16499/goods_img-v5/cc85a2308636.jpg",
  
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_img-v1/5f26bc001550.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
    {
      image_url:
        "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16454/goods_img-v1/42405dc55cb8.jpg",
      title:
        "OUKITEL WP15 5G Global Bands 15600mAh Battery Dimensity 700 8GB 128GB 6.52 inch 48MP Triple Camera NFC IP68&IP69K Waterproof Rugged Smartphone - Black Hong Kong",
      price: "$295.00",
    },
  ];
  
  var arr = JSON.parse(localStorage.getItem("cart")) || [];
  image.map(function (ele) {
    var box = document.createElement("div");
    box.setAttribute("id","boxes")
  
    var img = document.createElement("img");
    img.src = ele.image_url;
    img.setAttribute("id","klk")
    //   img.addEventListener("click");
    var title = document.createElement("h6");
    title.innerText = ele.title;
  
    var price = document.createElement("h3");
    price.innerText = ele.price;
    price.setAttribute("id", "pricee");
  
    box.append(img, title, price);
    document.querySelector("#container").append(box);
  
    //arr.push(ele);
    localStorage.setItem("image", JSON.stringify(arr));
  });
  


  import { footer } from "./footer.js";
document.getElementById("footer").innerHTML = footer();
console.log(footer())
console.log(image)