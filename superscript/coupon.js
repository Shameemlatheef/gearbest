import { navbar1 } from "../navbar.js";

let nav = document.getElementById('navbar1');
nav.innerHTML = navbar1();

import { footer } from "../footer.js";

let foot = document.getElementById("footer")
foot.innerHTML = footer();

let Data = [
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_thumb_220-v1/e1c76b337a79.jpg",
        name: "Original Xiaomi Mi Band 6 / 6 NFC Smart Wristband 1.56 inch..." ,
        price:1629.00,
        strikedoffprice:"$8.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_thumb_220-v4/ad2a20a94177.jpg",
        name: "Luminous Series One-Cable Three Purpose USB TO MTL..." ,
        price:38.99,
        strikedoffprice:"$38.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16419/goods_thumb_220-v1/a2fbd39cb9c5.jpg",
        name: "original Xiaomi Mi Robot Vacuum Cleaner  Main Brushes..." ,
        price:17.69,
        strikedoffprice:"$7.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878388619120406528/16464/goods_thumb_220-v2/134ae8309154.jpg",
        name: "500X25 50000M Portable Zoom HD Professional Powerful..." ,
        price:16.33,
        strikedoffprice:"$14.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_thumb_220-v1/330e9a95381b.jpg",
        name: "Car Radio 7 inch HD Autoradio Multimedia Player 2DIN..." ,
        price:89.00,
        strikedoffprice:"$29.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16475/goods_thumb_220-v1/74b8450aa656.jpg",
        name: "Andon Portable Micro-atomizer Nebulizer Mini Handheld..." ,
        price:39.88,
        strikedoffprice:"$53.64"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15892/goods_thumb_220-v1/a8a30832f5e9.jpg",
        name: "UMIDIGI A11 Tab 10.4  4GB 128GB 8000mAh Octa Core..." ,
        price:22.99,
        strikedoffprice:"$42.93"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6883469851634102272/16497/goods_thumb_220-v1/8b6485baad75.jpg",
        name: "L09 Gimbal Stabilizer With Fill Light Wireless Bluetooth..." ,
        price:62.99,
        strikedoffprice:"$2.59"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_thumb_220-v5/6233d35f6f8a.jpg",
        name: "Electric Water Kettle 34 Oz Stainless Steel - Light Green" ,
        price:21.99,
        strikedoffprice:"$16.90"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/126354806df6.jpg",
        name: "Global Version Xiaomi Redmi Note 9 3GB RAM 64GB 128GB..." ,
        price:119.99,
        strikedoffprice:"$8.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16416/goods_thumb_220-v1/9dbf47dbe530.jpg",
        name: "Xiaomi Mijia Automatic Folding Umbrella Sunny Rainy..." ,
        price:219.00,
        strikedoffprice:"$114.30"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_thumb_220-v1/d238ad6a3d2a.jpg",
        name: "Mijia Sonic Electric Toothbrush T100 Adult Ultrasonic..." ,
        price:15.99,
        strikedoffprice:"$35.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_thumb_220-v3/4b0ffdc40949.jpg",
        name: "Global Version Wanbo Projector T6 Max LED 550 ANSI Smart..." ,
        price:33.50,
        strikedoffprice:"$114.00"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_thumb_220-v1/b1589d2d9db3.jpg",
        name: "RC Spinosaurus 2CH 2.4G Radio Control Dinosaur Dragon Pet..." ,
        price:12.00,
        strikedoffprice:"$170.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16472/goods_thumb_220-v1/3a6f1ce7b307.jpg",
        name: "Brew Adjustable Temperature Kettle Electric Clear - Multi" ,
        price:68.99,
        strikedoffprice:"$13.59"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16121/goods_thumb_220-v9/ca5568a2f175.jpg",
        name: "Xiaomi Mi Piston 3 Type C Earphone USB-C in Ear Earbuds..." ,
        price:119.99,
        strikedoffprice:"$99.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16420/goods_thumb_220-v1/feb032eccd26.jpg",
        name: "Mijia E27 Smart LED Bulb Bluetooth MESH Version 5W..." ,
        price:779.0,
        strikedoffprice:"$329.00"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_thumb_220-v1/e540b94c9c89.jpg",
        name: "Xiaomi Mijia Bluetooth Temperature Humidity..." ,
        price:119.99,
        strikedoffprice:"$8.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_thumb_220-v5/2f380d04f8f3.jpg",
        name: "Original Xiaomi Mi Airdots Air 2 SE TWS Bluetooth Earphone..." ,
        price:21.00,
        strikedoffprice:"$22.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/store/6882689559126274048/16489/goods_thumb_220-v7/4e06e8fb9369.jpg",
        name: "BT-S2 motorcycle snowmobile helmet bluetooth headset with..." ,
        price:125.00,
        strikedoffprice:"$16.39"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16465/goods_thumb_220-v3/c756d2c80fe9.jpg",
        name: "Xiaomi Redmi AirDots 2 Wireless Earphone Bluetooth..." ,
        price:455.00,
        strikedoffprice:"$25.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16486/goods_thumb_220-v1/965097e8a620.jpg",
        name: "Aqara Smart Temperature Humidity Sensor Zigbee..." ,
        price:22.99,
        strikedoffprice:"$10.69"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16510/goods_thumb_220-v7/5c6925b46bdf.jpg",
        name: "Xiaomi Mijia Hair Clipper 2200mAh Men Women..." ,
        price:89.00,
        strikedoffprice:"$36.58"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_thumb_220-v1/2177d4dd3ef7.jpg",
        name: "TOCMOC T200 200W Handheld Wireless Vacuum Cleaner..." ,
        price:39.98,
        strikedoffprice:"$409.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16456/goods_thumb_220-v1/5ef9d5b1a9a0.jpg",
        name: "Ulefone Power Armor 13 Global Version 13200mAh Battery 8GB..." ,
        price:22.0,
        strikedoffprice:"$37.88"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16498/goods_thumb_220-v13/c0d56aec4c65.jpg",
        name: "Original Xiaomi Redmi Buds 3 Lite Youth Edition Earphone..." ,
        price:16.33,
        strikedoffprice:"$17.99"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15927/goods_thumb_220-v1/3bdf2c9be242.jpg",
        name: "Main Brush Filters Cleaner Side Brushes Accessories for XIAOMI..." ,
        price:17.89,
        strikedoffprice:"$160.00"

    },
    {
        image_url:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16465/goods_thumb_220-v1/7d8d73e20fc4.jpg",
        name: "Original Xiaomi Redmi Buds 3 Lite Youth Edition Earphone..." ,
        price:22.99,
        strikedoffprice:"$28.98"

    },

]


let append = (Data) =>{

    let container = document.getElementById('product');

    container.innerHTML = null ;

    Data.forEach((el)=>{

        let div = document.createElement('div');

        let image = document.createElement('img');
        image.src = el.image_url;
        image.style.cursor = "pointer";
        image.addEventListener("click", function(){
            showProduct(el);
        })

        let title = document.createElement('p');
        title.innerText = el.name;
        title.style.cursor = "pointer";
        title.addEventListener("click", function(){
            showProduct(el);
        })

        let price = document.createElement('h2');
        price.innerText =  `$ ${el.price}`;
        price.style.color = "crimson";

        let strp = document.createElement('h4');
        strp.innerText = `RRP:  ${el.strikedoffprice}`;
        strp.style.textDecoration = "line-through";

        let cpn = document.createElement('div');
        cpn.setAttribute("id","couponleft");

        let left = document.createElement('p');
        left.innerText=`Coupon Left : ${Math.floor(Math.random() * 101)}`;
        left.setAttribute("class","left")

        let num = document.createElement("h4");
        left.setAttribute("class","code")
        num.innerText = "T81A532109D53001";

        cpn.append(left , num)

        div.append(image , title , price , strp ,cpn);

        container.append(div);

    })
}

append(Data);

function showProduct(el)
{
    localStorage.setItem("product" , JSON.stringify(el));
    window.location.href= "product.html"
}