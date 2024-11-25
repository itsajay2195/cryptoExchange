export const debounce = (cb: (...args: any[]) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: any) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
