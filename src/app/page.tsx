import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-10">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <h1>{image.name}</h1>
            <Image width={400} height={400} src={image.url!} alt="image" />
          </div>
        );
      })}
    </div>
  );
}
