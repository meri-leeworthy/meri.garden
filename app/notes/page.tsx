import { posts } from "lib/markdown"
import Article from "components/Article"
import BackButton from "components/Back"

// TODO: Get width right on large screens. show vertical articles on small screens

export default async function Notes() {
  return (
    <>
      <main className="w-full max-w-3xl mx-auto mt-16">
        <section className="mb-8">
          <h3 className="mb-4 text-xl font-title">Notes</h3>
          <div className="grid grid-cols-1 gap-3">
            {posts
              .filter(post => post.data.isPublished)
              .filter(post => post.data.tags.includes("notes"))
              .sort((a, b) => b.data.date - a.data.date)
              .map((post, i) => (
                // @ts-expect-error Async Server Component
                <Article post={post} key={i} />
              ))}
          </div>
        </section>
        <div className="mt-12">
          <BackButton />
        </div>
      </main>
    </>
  )
}
