
*Chapter 1:*
Below steps for setup express engine app into system : 
  6 Steps for setup node js  : 
   i)  install Node Package Manager by below command  : 
       sudo apt install npm

   ii) then   make that your working directory.
       $ mkdir myapp
       $ cd myapp 

   iii)  Use the npm init command to create a package.json file for your applicatio
      npm init

   iv)  set entry point of app by  file name :
    entry point: (index.js)
    
   v)  Now install Express in the myapp directory and save it in the dependencies list. For example:
      npm install express
   vi)  To install Express temporarily and not add it to the dependencies list:
             npm install express --no-save
 
   *********run app by command : node index.js ( by  entry point file  )***********

*Chapter 2:*
 Next :  Set  simple api path by below code  : 
**********************************************************
  
    app.get('/', (req, res) => {
     res.send('Hello World!')
    })

    app.get('/login', (req, res) => {
      res.send('login api!')
    })

    app.get('/register', (req, res) => {
      res.send('register api!')
    })

    app.get('/getuser', (req, res) => {
      res.send('getuser api!')
    })

    app.get('/users', (req, res) => {
      res.send('users api!')
    })
   
************************************************************************

*Chapter 3:*

  In Progress...