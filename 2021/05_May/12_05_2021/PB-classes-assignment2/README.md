## Classes  Assignment
1. create class  `Product`
2. Add a constructor
3.  Inside the constructor define  the below props : 
`productName` `productDescription` `productNumber`
4. instantiate the class into a new variable  `iphone` with the following values : 
 Apple iPhone 12
Apple iPhone 12 Smartphone  128 GB   12 MP Camera
1069374430
5. print the value of `iphone` to the console






create class  `Store`
6. define inside this class the below prop
`products` as an empty array  inside the constructor 

7. define inside this class the below methods :  
`addProduct` 
`delProduct`   to delete a product using the `productNumber`  like this `delProduct('1069374430')`
`search`  to search in products using `productName` or `productDescription`or `productNumber` 

examples  `search("Apple")`    `search('1069374430')`   `search('128 GB ')`

8. instantiate the class into a new variable  `store` 
9. use the method `addProduct` to add the `iphone`


10.  create the class ProductUI extend  `Store` class 
 define inside this class the below methods : 
`addAlert`  to print a message to the console 
`printAll` to print all products to the console

 
`deleteAll` to delete all products 

instantiate the class into a new variable  `UI` 
add more products to `store`
