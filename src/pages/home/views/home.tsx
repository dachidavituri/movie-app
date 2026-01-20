import TopRatedRow from "../components/TopRated";
import TrendingRow from "../components/TrandingRow";
import UpcomingRow from "../components/UpcomingRow";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <TrendingRow />
      <TopRatedRow />
      <UpcomingRow />
    </div>
  );
};
export default Home;
