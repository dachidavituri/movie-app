import TopRatedRow from "../components/TopRated";
import TrendingRow from "../components/TrandingRow";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <TrendingRow />
      <TopRatedRow />
    </div>
  );
};
export default Home;
