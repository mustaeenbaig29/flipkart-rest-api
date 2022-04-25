//page1
1.List of categories
2.List of products and product type

//page2 
1.list of products on the basis of categories
2.Filter on the basis of brand
3.Filter on the basis of customer rating

//page3
1.Product details

//page4
1.Details of product selected
>>> (post) > http://localhost:1990/productItem
>>> (body) > [1,4,6]

2.place order
(post) > http://localhost:1990/placeorder
(body) > 
{
    "name": "saud",
    "phone number": 988909890,
    "email": "baigsaud56@gmail.com",
    "address": "R.T Nagar"
}

// page 5
1.see all order place
>>> http://localhost:1990/vieworder

> Get Order on basis of emailId
>>>> http://localhost:1990/vieworder?email=baigsaud56@gmail.com