import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
    <div>
      <div className="my-16 flex flex-col justify-center gap-4 md:flex-row md:justify-between">
        <div className="fade-in my-6 flex flex-col justify-center dark:text-white sm:col-span-4 sm:py-10 lg:col-span-5 lg:px-10">
          <h1 className="text-2xl font-bold dark:text-white lg:text-3xl"> Hello, I am Maymoun</h1>
          <p className="my-2 text-lg lg:my-4 lg:text-2xl"> Software Engineer | DevOps Enthusiast</p>
          <p className="text-xl leading-8 tracking-tight">Read more 
            <a href='/about' className='ml-2 mr-2 font-normal bg-red-300'>about me</a>
            or 
            <a href='/contact' className='ml-2 mr-2 font-normal bg-red-300'>contact me</a>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-blue-100/25 p-6 shadow-md dark:bg-gray-600 sm:col-span-4 lg:col-span-3">
          <div className="text-8xl">🤌🏻</div>
          <div className="text-xl font-bold">@elfahim_maymoun</div>
          <div title="description">Software Engineer 🔵 DevOps Enthusiast<br/><p className="mt-2 text-center">ⵜⵉⵎⵇⵉⵜ ⵙ ⵜⵉⵎⵇⵉⵜ ⴰⵙ ⵉⵏⴳⵉ ⴰⵙⵉⴼ ! 💧</p></div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Recent Posts
            </h2>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
      </div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
    </div>
      
    </>
  )
}
