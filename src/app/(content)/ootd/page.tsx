import { allStories } from "contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allStories.map((post) => (
        <article key={post._id}>
          <Link href={`ootd/${post.slug.split('/').pop()}`}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
