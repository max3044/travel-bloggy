import groq from 'groq'
import Head from 'next/head'
import Image from 'next/image'
import { getClient } from '../lib/sanity.server'


const Home = ({posts}) => {

  console.log(posts)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">


      {posts.map(

        (e,i)=>
        <div key={i} className="bg-gray-400 text-gray-100 p-5 rounded-md mb-5">
            
            <div className='font-bold text-lg'>{e.title}</div>
            <div>{e.body}</div>
          </div>
      )}      
      
      <h1 className='font-semibold text-3xl p-10 bg-gray-100 rounded-full'>Hello, my name is Danko!</h1>
    </div>

  )
}


// один раз при заходе на страницу
export async function getStaticProps( {preview=false} ) {

  const posts = await getClient(preview).fetch(
    
    // используем чтобы пользоваться грог языком
      //      "username":author->username - берём  из автора только юзернейм и литеруем это поле username
  //       "categories": categories[]->{id, title} - берём весь array categories но забираем у каждого поля только id и title 


    groq`*[_type=="post" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title, 
      "username": author->username,
      "categories": categories[]->{id, title},
      "authorImage": author->avatar,
      body,
      mainImage,
      slug,
      publishedAt,

    }`
  )

  return {

    // чтобы сразу возвращать из пропсов нужное поле, можем использовать его имя в объекте
    // props мы в любом случае должны вернуть
    props: {
      posts,
    }

  }
}


export default Home
