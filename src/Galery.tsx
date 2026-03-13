import { ImageTile } from "./imageTile";
import "./galery.css";

export default function Gallery({ images }: { images: string[] }) {
    return (
        <div className="grid">
            {images.map((src, i) => (
                <ImageTile key={i} src={src} />
            ))}
        </div>
    );
}