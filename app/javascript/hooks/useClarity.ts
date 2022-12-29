import { useEffect, useState } from 'react';

export default function useClarity() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const element = document.createElement('script');
      element.type = 'text/javascript';
      element.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "f5wbsgdzxq");
    `;
      const container = document.getElementsByTagName('body')[0] as HTMLBodyElement;
      container.appendChild(element);
    }
  }, [isClient]);
}
