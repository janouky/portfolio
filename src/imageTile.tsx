import { useState } from "react";
import "./imageTile.css";

type Props = {
    src: string;
};

export function ImageTile({ src }: Props) {
    const [ratio, setRatio] = useState(1);

    return (
        <div
            className="tile"
            style={{ aspectRatio: ratio }}
        >
            <img
                src={src}
                loading="lazy"
                onLoad={(e) => {
                    const img = e.currentTarget;
                    setRatio(img.naturalWidth / img.naturalHeight);
                }}
            />
        </div>
    );
}
