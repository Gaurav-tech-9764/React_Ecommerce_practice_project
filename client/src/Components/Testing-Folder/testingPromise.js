const MyPromise = new Promise((resolve, reject) => {

  if(true){  
      setTimeout(() => {
      resolve( "I am the Hero"  )
    }, 2000);}
else{
  
        reject ("i Am the Zero")
 
}

})

MyPromise.then(resolve => console.log(resolve)).catch(reject=>console.log(reject))

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
     const firstUser = users[0];
     console.log(firstUser)
     return fetch('https://jsonplaceholder.typicode.com/posts?userId='+firstUser.id)
;
}).then(response => response.json())
.then(posts=> console.log(posts))


const MyAsyncAwait = async() =>{

    const userResponce = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await(userResponce.json());
        const SecondUser = users[1]
        console.log("this is the user",SecondUser)
    const PostsResponce = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+SecondUser.id)
        const Posts = await (PostsResponce.json())
        console.log("these are the Posts", Posts)
}


Today's Update
1) worked on the React project in that Worked on the redux saga 
Gone through the some more points in redux saga and done RnD 
2) Done RnD on the Generator Function , promises, call, async and await functions.
3)Trying to implementing Redux Saga in project 
4)Done the Session on  Self efficacy vs self confidence


No Blocker