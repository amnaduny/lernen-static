import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Point to /posts/ folder (not src/posts anymore)
const postsDir = path.join(process.cwd(), "posts");

export const getAllPosts = () => {
    const fileNames = fs.readdirSync(postsDir);
    const posts = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const filePath = path.join(postsDir, fileName);
        const fileContents = fs.readFileSync(filePath, "utf8");

        const { content, data } = matter(fileContents);

        return {
            slug,
            content,
            ...data,
        };
    });

    posts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    return posts;
};
