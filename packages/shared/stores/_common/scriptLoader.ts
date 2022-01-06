import { Observable, of } from 'rxjs';

export const scriptExists = (scriptSrc: string): boolean => {
  if (!scriptSrc) {
    return false;
  }

  const script = document.querySelector(
    `script[src="${scriptSrc}"]`,
  ) as HTMLScriptElement;

  return Boolean(script);
};

export const scriptLoader = (scriptSrc: string): Observable<boolean> => {
  if (!scriptSrc) {
    return of(false);
  }

  const loaded$ = new Observable<boolean>(observer => {
    if (!scriptSrc) {
      observer.next(false);
      observer.complete();
    }

    if (scriptExists(scriptSrc)) {
      observer.next(true);
      observer.complete();
    } else {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.onload = () => {
        observer.next(true);
        observer.complete();
      };
      document.head.appendChild(script);
    }
  });

  return loaded$;
};
