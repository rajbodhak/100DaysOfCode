import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface PostData {
  title: string;
  date: string;
  description: string;
}

interface Post {
  slug: string;
  data: PostData;
}

const getPosts = (): Post[] => {
  const postsDir = path.join(process.cwd(), "posts"); //returns the current working directory
  const fileNames = fs.readdirSync(postsDir); //This synchronously reads the contents of the given directory and returns an array of file names.

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ""); //creating a slug name mainly removing the md name
    const filePath = path.join(postsDir, fileName); //this join postDir and fileName. ex: app/posts/ + beyond-the-metaverse
    const fileContents = fs.readFileSync(filePath, "utf8"); //This line is used to read the Markdown file's content before parsing it.
    const { data } = matter(fileContents); //extract front matter metadata
    return { slug, data: data as PostData }; //return slug and data
  });
}

export default function Home() {
  const posts = getPosts();
  return (
    <>
      <h1 className="text-3xl font-bold text-yellow-500 text-center py-5">This is a basic blog app</h1>
      <ul>
        {posts.map(({ slug, data }) => (
          <li key={slug}>
            <Link href={`blog/${slug}`}>
              <div className="flex flex-col  justify-center w-full p-8 border border-yellow-800">
                <h2 className="font-bold text-2xl text-yellow-200">{data.title}</h2>
                <p className="text-xl text-yellow-100">{data.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
