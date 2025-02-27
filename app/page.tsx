import styles from "./page.module.css"
import { posts } from "lib/markdown"
import { Post } from "lib/types"
import Link from "next/link"
import Article from "components/Article"
import Header from "components/Header"

export default async function Home() {
  return (
    <>
      <section className="flex flex-col w-full max-w-2xl gap-4 mx-auto">
        <h2 className="mt-16 text-lg text-teal-900 md:-ml-4 font-title">
          recent work...
        </h2>
        {posts
          .filter(post => post.data.isPublished)
          .filter(post => post.data.tags.includes("recent"))
          .sort((a, b) => b.data.date - a.data.date)
          .map((post, i) => (
            <Article post={post} key={i} />
          ))}
        <Link
          href="/work"
          className="self-end px-1 text-teal-900 no-underline md:-mr-4 hover:underline">
          see more →
        </Link>
      </section>
      <section className="w-full max-w-lg mx-auto">
        <h2 className="mt-32 mb-4 text-lg text-teal-900 sm:-ml-4 font-title">
          things I can do...
        </h2>
        <article>
          <h3 className="inline px-1 py-[2px] leading-8 bg-purple-300 border border-black rounded shadow-xl font-title box-decoration-clone">
            Freelance
          </h3>
          <ul
            className={`mt-2 mb-4 ml-6 opacity-70 list-["🌸"] ${styles.emojilist}`}>
            <li>info sites for small businesses and organisations</li>
            <li>online stores</li>
            <li>creative portfolios</li>
            <li>
              design and build beautiful online experiences with custom HTML and
              CSS
            </li>
            <li>
              experience with Wordpress, Shopify, Cargo, Squarespace and more
            </li>
          </ul>
          <div className={styles.quote}>
            <blockquote className="mt-12 text-sm italic opacity-80">
              <p>
                Meri has been a dream to work with! Clear, prompt and honest
                communication, with good advice when dealing with our business
                that knows nothing about websites. We asked Meri to jump in on a
                half finished project toward the end of the year no less and she
                took it all onboard easily and quickly. Thanks so much for your
                help Meri, highly recommend!
              </p>
            </blockquote>
            <figcaption className="mb-12 text-sm">
              - Carmen Maram, Sound Osteopathy
            </figcaption>
          </div>
        </article>
        <article>
          <h3 className="inline px-1 py-[2px] leading-8 bg-purple-300 border border-black rounded shadow-xl font-title box-decoration-clone">
            Hire me to work on your team
          </h3>
          <ul
            className={`mt-2 mb-4 ml-6 opacity-70 list-["🌸"] ${styles.emojilist}`}>
            <li>experience with Typescript, React, Next.js and React Native</li>
            <li>WCAG compliance, responsive design</li>
            <li>comfortable with tools like Git, Docker, Linux, Ansible</li>
            <li>
              interested in distributed systems, open protocols, functional
              programming, static typing, Rust, WASM
            </li>
          </ul>
        </article>
        check out my{" "}
        <Link
          href="/work"
          className="px-1 no-underline bg-white border-2 border-transparent rounded-full hover:border-pink-300">
          portfolio →
        </Link>{" "}
        and{" "}
        <a
          className="px-1 no-underline bg-white border-2 border-transparent rounded-full hover:border-pink-300"
          href="https://github.com/meri-leeworthy">
          GitHub →
        </a>
      </section>
    </>
  )
}
