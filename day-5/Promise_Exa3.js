let fetchAPI=async()=>
{
    const res= await fetch("https://jsonplaceholder.typicode.com/users") 
    const data=await res.json();  //this line waits until the above line is executed
    console.log(data)

}
fetchAPI()