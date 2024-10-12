import Image from "next/image";
import PostComponent from "~/components/Post";

export const dynamic = "force-dynamic";

const imagesLink = [
  "https://utfs.io/f/QOg6WchRNpxEpdffs67sXL1ikjQzmGWqvTU9DdxVMory3nNI",
  "https://utfs.io/f/QOg6WchRNpxEgXFlDYrrP1qtcF2Y4msIuwejyAWxXhp5GUE8",
];

const getImages = imagesLink.map((link, index) => ({
  id: index + 1,
  imageUrl: link,
}));

export default function HomePage() {
  return (
    <div>
      <PostComponent />
      <div className="flex flex-wrap gap-10">
        {getImages.map((image) => {
          return (
            <div key={image.id}>
              <Image
                width={400}
                height={400}
                src={image.imageUrl}
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
