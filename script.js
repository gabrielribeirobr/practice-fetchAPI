const titlePost = document.querySelector('.title');
const containerContent = document.querySelector('.container');
const url = "https://jsonplaceholder.typicode.com/posts/1";


async function getPosts() {
  try {
    const response = await fetch(url);
    const data = await response.json(); 
    
    return {
        title: data.title,
        body: data.body
    }

  } catch (error) {
    console.log("Error: ", error);
  } return null;
  
} 

async function showContent(){
    const post = await getPosts();

    titlePost.textContent = post.title;
    containerContent.textContent = post.body;
}

getPosts();
showContent();
