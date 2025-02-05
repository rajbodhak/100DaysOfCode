import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface PageProps {
    params: { slug: string };
}

const getPostData = (slug: string) => {
    const postsDir = path.join(process.cwd(), "posts");
    const filePath = path.join(postsDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return { data, content };
};

// Correcting generateMetadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    // `params` should be awaited directly to ensure its properties are accessible
    const { slug } = await params; // destructure and await params

    if (!slug) {
        return { title: "Post Not Found", description: "No such post exists." };
    }

    const post = getPostData(slug);

    if (!post) {
        return { title: "Post Not Found", description: "No such post exists." };
    }

    return {
        title: post.data.title,
        description: post.data.description,
    };
}



// ✅ Custom Markdown Renderer to Handle Images with `next/image`
export default function BlogPost({ params }: PageProps) {

    if (!params?.slug) {
        return <h1 className="text-red-500">Invalid post slug.</h1>;
    }

    const post = getPostData(params?.slug);

    if (!post) {
        return <h1 className="text-red-500">Post Not Found.</h1>;
    }

    return (
        <div className="max-w-3xl mx-auto p-8 border border-white text-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-yellow-400">{post.data.title}</h1>
            <p className="text-yellow-300 text-sm mt-2">{post.data.description}</p>
            <div className="border-b border-yellow-500 my-4"></div>

            {/* Article Content */}
            <article className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                    components={{
                        img: ({ src, alt }) => (
                            <Image
                                src={src ?? "/placeholder.jpg"}
                                alt={alt ?? "Blog Image"}
                                width={600} // Adjust based on your layout
                                height={250}
                                className="rounded-lg mx-auto"
                            />
                        ),
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </article>
        </div>
    );
}
