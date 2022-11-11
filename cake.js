const items = [
    {
        "id": 1,
        "name": "Chocolate Pinata Cake",
        "cost": 1300
    },
    {
        "id": 2,
        "name": "Black Forest Cake",
        "cost": 699
    },
    {
        "id": 3,
        "name": "Yummy Pineapple Cake",
        "cost": 649
    },
    {
        "id": 4,
        "name": "Chocolate Truffle Cake",
        "cost": 699
    },
    {
        "id": 5,
        "name": "Fusion Cake",
        "cost": 1200
    },
    {
        "id": 6,
        "name": "Chocolatey Oreo Cake",
        "cost": 699
    },
                        {
        "id": 7,
        "name": "Sweet Strawberry Cake",
        "cost": 749
    },
                            {
        "id": 8,
        "name": "Wedding Cake",
        "cost": 5000
    },
                                {
        "id": 9,
        "name": "Blueberry Glaze Cake",
        "cost": 699
    },
];

var TotalAmount=0;
var ItemCount=0;
function OrderNow(id)
    {
    var itemid=id;
    var item=items.find(item => item.id === itemid);
    console.log(item);
    var itemcost=item.cost;
    var itemname=item.name;
    var quantity=1;
    ItemCount+=1;
    TotalAmount+= quantity*itemcost;
    var cart=document.getElementById('carttable');
    cart.innerHTML+=
    `
    <tr>
                    <th>${ItemCount}</th>
                    <th>${itemname}</th>
                    <th>${quantity}</th>
                    <th>${itemcost}</th>
                    <th>${quantity*itemcost}</th>   
    </tr>
    `

    var cartTotal=document.getElementById("cartTotal");
    cartTotal.innerHTML=
    `
    <tr>
                    <th</th>
                    <th></th>
                    <th></th>
                    <th><b> TOTAL <?b></th>
                    <th>${TotalAmount}</th>   
    </tr>
    `

}
