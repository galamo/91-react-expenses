# Homework

1. Implement expenses list component `<ExpensesList>`

# Homework

1. Create a filter by categories
2. Advanced add pie chart with Prime react charts that present the expenses by categories

# Homework

1. Use the Api to get all years from server: `http://localhost:3600/years`
2. Show the results ( years : [2021,2022....]) in the DDL years filer
3. Use the Api to get all categories from server: `http://localhost:3600/categories`
4. Show the results ( categories : [Other....]) in the DDL categories filer

# Homework Delete expense 24/5

1. POST http://localhost:3600/delete-expense
2. { name: "delete me expense" }
3. implement delete expense functionality

# Homework Expenses Statistics 24/5

1. GET http://localhost:3600/expenses/stats
2. get the statistcs and present the data in the pie chart
3. you can create the `useEffect` inside <Reports/> component (for the practice)

# React Recap

1. React
2. Declarative
3. Dont repeat yourself - reuse
4. Vite / create-react-app
5. State
6. props
7. Stateless
8. Statefull
9. hooks ( useState, useEffect, useRef , customHooks? )
10. Component lifecycle ( mounting, updating, unmount ? )
11. code structure, components, services etc..
12. TS
13. React router dom
14. React lazy

# Homework

## Create Login Page

1. UI - create form with the following inputs:

- email `string`
- password `string`

2. Create service, Execute HTTP request (using axios) to : POST http://localhost:3600/login

- payload `{ email:"email@gal.com", password:"1234a" }`
- response 200 ok, OR 401 Unauthorized

## Create Registration Page

1. UI - create form with the following inputs:

- email `string`
- password `string`
- password confirm `string`
- first name `string`
- last name `string`

2. Create service, Execute HTTP request (using axios) to : POST http://localhost:3600/register

- payload `{ email:"email@gal.com", password:"1234a", firstName:"gal", lastName:"am" }`
- response 200 ok, OR 409

### user for testing:

email: `dev@gmail.com`
password: `dev1234`

# Ex 31/5 Class

1. create new component systemPreferences
2. The component will present header "System preferences" (ONLY HEADER)
3. apply lazy loading on systemPreferences component

# Homework

1. apply the `WithLoading` on Login button 
2. understand what is useImageLoading
