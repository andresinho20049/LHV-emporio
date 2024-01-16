import { allStories } from "contentlayer/generated";
import { Button, Card } from "flowbite-react";
import Link from "next/link";

export default async function OutifitPage() {
  return (
    <section className="flex flex-col justify-start items-center ">
      <h5 className="text-xl font-bold text-gray-900 dark:text-white">
        Stories
      </h5>
      <article className="divide-y divide-gray-200 dark:divide-gray-700">
        {allStories
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          .map((storie, idx) => (
            <div key={idx} className="py-2 sm:py-4">
              <Card imgSrc={storie.imgSrc} horizontal>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {storie.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {storie.description}
                </p>
                <p className="font-light text-gray-500 dark:text-gray-300 opacity-25">
                  <strong>Postagem: </strong>
                  {storie.date.substring(0, 10)}
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
