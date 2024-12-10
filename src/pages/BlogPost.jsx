

export default function BlogPost (){

  const posts = [

     {
      id : 1,
      title : "post 1",
      content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, deserunt"
     }, 
     
     {
      id : 2,
      title : "post 2",
      content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, deserunt"
     },

     {
      id : 3,
      title : "post 3",
      content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, deserunt"
     }
  ]
   
  return (

    <main>
      <section>
        <div className="container">
          <h1>Blog Post</h1>
          <div className="container">
            <ul>
              {
                posts.map((post) => 
                  <li key={post.id} >
                  {post.title}</li>
                )
              }
            </ul>
          </div>
        </div>
      </section>
    </main>
  )   
}