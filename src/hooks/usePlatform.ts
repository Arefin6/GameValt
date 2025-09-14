import UsePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = UsePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
