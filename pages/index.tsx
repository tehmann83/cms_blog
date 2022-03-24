import type { NextPage } from 'next'
import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components'
import { getPosts } from '../services'
import FeaturedPosts from './../sections/FeaturedPosts'

const Home: NextPage = ({ posts }) => {
  return (
    <div className="container px-10 mx-auto mb-8 bg-gray">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
