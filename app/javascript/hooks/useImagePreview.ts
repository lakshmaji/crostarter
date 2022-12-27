import { useEffect, useState } from 'react';
import usePrevious from './usePrevious';

export default function useImagePreview(files?: FileList): string | undefined {
  const [imgSrc, setImgSrc] = useState<string>();
  const prevValues = usePrevious(imgSrc);

  useEffect(() => {
    if (files && files[0]) {
      const newUrl = URL.createObjectURL(files[0]);

      if (newUrl !== prevValues) {
        setImgSrc(newUrl);
      }
    }
  }, [files, prevValues]);

  return imgSrc;
}
