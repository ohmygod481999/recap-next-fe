export const getDomain = (path) => {
  // will change when update on run production which real domain
  return `${process.env.NEXT_PUBLIC_DOMAIN}${path}`;
};
