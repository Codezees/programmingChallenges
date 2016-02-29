# Orders

You are given the table *orders*. Return the *customerNumber* for the customer (or customers) that has placed the largest number of the orders.

Table: **ORDERS**

| Field            | Type       |
| ---------------- |:---------: |
| orderNumber (PK) | int        |
| orderDate        | date       |
| requiredDate     | date       |
| shippedDate      | date       |
| status           | char (15)  |
| comments         | char (200) |
| customerNumber   | int        |