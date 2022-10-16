/*
---------------------------------
      Add Auth with firebase
---------------------------------
1. first create a firebase project
2. enable web [register firebase project]
3. enable firebase sign in method 
4. install firebase 
6. configure firebase 
7. export firebase app to access from any here. 

*/

/*
----------------------------------------------------------
       User Context Component and Creation auth context: 
-----------------------------------------------------------
1. create an UserContext component to provide the AuthContext (main context) everyWhere of the website. 
2. Create AuthContext 
3. then use AuthContext.Provider and pass a value as a props 
4. Set an children props on userContext Components and pass children  inner side of the AuthProvider 
5. Go to the index.js and all UseContext Components and pass App.js as child component . 
6. Export AuthContext 
7. get form data from register and login form . 
8. create  an auth = getAuth(app); 

*/

/* 
-------------------------------------
 Create an User with Email and Password
-------------------------------------
1. create function name : createUser(email, password) => {
     return  createUserWithEmailAndPassword(auth, email, password); 
}
2. add the function into authInfo 
3. Go Register or login form and  use the function by calling context ; but must carefull about handle  promiss 
*/