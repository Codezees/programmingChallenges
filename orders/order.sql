SELECT x.customerNumber 
  FROM 
     ( SELECT customerNumber
            , COUNT(*) orderNumber 
         FROM ORDERS 
        GROUP 
           BY customerNumber
     ) x 
  JOIN 
     ( SELECT COUNT(*) orderNumber 
         FROM ORDERS
        GROUP 
           BY customerNumber 
        ORDER 
           BY orderNumber DESC 
        LIMIT 1
     ) y 
    ON y.orderNumber = x.orderNumber;