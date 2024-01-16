import { allPosts } from "contentlayer/generated"
import { Button, Card } from "flowbite-react";
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );

  return (
    <section className="flex flex-col justify-start items-center shrink-0 grow ">
      <h5 className="text-xl font-bold text-gray-900 dark:text-white">
        Stories
      </h5>
      <article className="divide-y divide-gray-200 dark:divide-gray-700 h-96">
        {allPosts.map((storie, idx) => (
          <div key={idx} className="py-2 sm:py-4">
            <Card imgSrc={"/img/model_1.png"} horizontal>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {storie.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {storie.description}
              </p>
              <Link href={`ootd/${storie.slug.split("/").pop()}`}>
                <Button>Veja mais</Button>
              </Link>
            </Card>
          </div>
        ))}
      </article>
    </section>
  );
}
