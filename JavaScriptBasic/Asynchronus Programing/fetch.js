async function fetchApi(){
    try{
        fetching = await fetch("https://jsonplaceholder.typicode.com/todos");
        result = await fetching.json();
        console.log(result);
}catch(error){
        console.log("Something went Wrong:",error);
    }
}

fetchApi()