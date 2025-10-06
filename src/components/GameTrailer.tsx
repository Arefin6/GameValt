import useTrailers from "@/hooks/useTrilers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading || !data) return null;
  if (error) throw error;
  const trailer = data.results[0];
  return trailer ? (
    <video src={trailer.data[480]} poster={trailer.preview} controls></video>
  ) : null;
};

export default GameTrailer;
