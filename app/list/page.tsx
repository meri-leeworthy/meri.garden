import styles from "./page.module.css"
import { posts } from "lib/markdown"

export default async function Post() {
  return (
    <main className={`flex flex-col mx-auto max-w-3xl w-full ${styles.post}`}>
      <div>
        <h1 className="text-lg lg:text-2xl font-title inline px-1 py-[2px] leading-8 bg-purple-300 border border-black border-opacity-40 rounded-lg shadow-xl box-decoration-clone">
          Pages by type
        </h1>
      </div>
      <h2>Books</h2>
      <PostList type="book" />
      <h2>Essays</h2>
      <PostList type="essay" />
      <h2>Papers</h2>
      <PostList type="paper" />
      <h2>Podcasts</h2>
      <PostList type="podcast" />
      <h2>Interviews</h2>
      <PostList type="interview" />
      <h2>Statements</h2>
      <PostList type="statement" />
      <h2>People</h2>
      <PostList type="person" />
      <h2>Topics</h2>
      <PostList type="topic" />
    </main>
  )
}

function PostList({ type }: { type: string }) {
  return (
    <ul>
      {posts.map((post, i) => {
        if (post.data.type === type) {
          return (
            <a key={i} href={`/${encodeURIComponent(post.slug)}`}>
              <li>{post.slug}</li>
            </a>
          )
        }
      })}
    </ul>
  )
}
