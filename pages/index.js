import Head from 'next/head'
import Image from 'next/image'
import requests from '../utils/requests.js'
import Header from './components/Header'
import Nav from './components/Nav.js'
import Results from './components/Results.js'

export default function Home({results}) {
  //console.log(props)
  return (
    <div >
      <title> Build it Make it </title>
      <Header></Header>
      <Nav></Nav>
      <Results results={results}></Results>
    </div>
  )
}


export async function getServerSideProps(context) {

  const genre = context.query.genre

  const request = await fetch(`https://api.themoviedb.org/3${
                          requests[genre]?.url || requests.fetchTrending.url}`
                          ).then((res) => res.json())

  return {
    props: {
      results: request.results,
    }
  }

}