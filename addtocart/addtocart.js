const product = [
    {
        id: 0,
        image: 'images/Slika0.jpg',
        title: 'Bit Premium',
        price: 3200,
    },
    {
        id: 1,
        image: 'images/Slika1.png',
        title: 'Remi Cat',
        price: 1700,
    },
    {
        id: 2,
        image: 'images/Slika2.jpg',
        title: 'Flamingo loptica',
        price: 700,
    },
    {
        id: 3,
        image: 'images/Slika3.png',
        title: 'Transporter atlas',
        price: 4500,
    },
    {
        id: 4,
        image: 'images/Slika4.png',
        title: 'Starsnack Strips',
        price: 1200,
    },
    {
        id: 5,
        image: 'images/Slika5.png',
        title: 'Royale dog',
        price: 2900,
    },
    {
        id: 6,
        image: 'images/Slika6.png',
        title: 'Mongre Fresh',
        price: 460,
    },
    {
        id: 7,
        image: 'images/Slika7.jpg',
        title: 'Biskies',
        price: 230,
    },
    {
        id: 8,
        image: 'images/Slika8.jpg',
        title: 'Gourmet',
        price: 3719,
    },
    {
        id: 9,
        image: 'images/Slika9.jpg',
        title: 'Pawise Mahalice',
        price: 809,
    },
    {
        id: 10,
        image: 'images/Slika10.jpg',
        title: 'Plišanac',
        price: 1300,
    },
    {
        id: 11,
        image: 'images/Slika11.jpg',
        title: 'Transporter Nomad',
        price: 6700,
    },
    {
        id: 12,
        image: 'images/Slika12.jpg',
        title: 'CURVE Transporter PetLife Radann',
        price: 8099,
    },
    {
        id: 13,
        image: 'images/Slika13.jpg',
        title: 'DentaStix',
        price: 320,
    },
    {
        id: 14,
        image: 'images/Slika14.jpg',
        title: 'Trixie',
        price: 250,
    }

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.00 din.</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Dodaj u korpu</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Korpa Vam je prazna";
        document.getElementById("total").innerHTML = " "+0+".00 din.";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = " "+total+".00 din.";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}.00 din.</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
            
        }).join('');
    }

    
}
