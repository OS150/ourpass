import { ReactNode } from 'react';

type ImageResizerProps = {
  sources: Array<string>;
  size: number;
};

export default function ImageResizer(props: ImageResizerProps) {
  const { sources, size } = props;
  return (
    <div className="flex justify-center items-center space-x-4">
      {sources.map((url: string, index: number) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index + 1}`}
          className={`w-${size} h-${size}`}
        />
      ))}
    </div>
  );
}
