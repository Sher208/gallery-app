import { db } from "~/server/db";

export default async function PostComponent() {
  const posts = await db.query.posts.findMany();
  return (
    <div className="flex flex-wrap gap-10">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}
