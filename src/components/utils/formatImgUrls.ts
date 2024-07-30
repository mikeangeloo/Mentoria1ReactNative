export const formatURL = (url: string) => {
  const parts = url.split('/ipfs');
  if (parts.length > 1) {
    return `https://ipfs.io/ipfs/${parts[1]}`;
  }
  return url;
};
