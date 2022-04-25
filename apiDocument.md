//page 1
1.List of categories
>>> https://flipkart-reset-api.herokuapp.com/categories
2.List of products
>>> https://flipkart-reset-api.herokuapp.com/products


//page 2 
1.list of products on the basis of categories
>>> https://flipkart-reset-api.herokuapp.com/filter?category_id=2

2.Filter on the basis of brand
>>> https://flipkart-reset-api.herokuapp.com/filter?brand=Samsung

3.Filter on the basis of customer rating
>>> https://flipkart-reset-api.herokuapp.com/filter?customer_rating=4

//page 3
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

// page 4
1.see all order place
>>> http://localhost:1990/vieworder

> Get Order on basis of emailId
>>>> http://localhost:1990/vieworder?email=baigsaud56@gmail.com