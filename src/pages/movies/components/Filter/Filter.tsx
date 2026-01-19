import { useGenres } from "@/react-query/movies";
import { Select } from "antd";
import type { FilterProps } from "./index.types";

const Filter: React.FC<FilterProps> = ({ setMinRating, setSelectedGenre }) => {
  const { data: genres } = useGenres();
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Select
        className="w-full sm:w-60"
        placeholder="Filter by Genre"
        allowClear
        options={genres?.genres.map((g) => ({
          value: g.id,
          label: g.name,
        }))}
        onChange={(v) => setSelectedGenre(v)}
      />

      <Select
        className="w-full sm:w-60"
        placeholder="Min Rating"
        allowClear
        options={[
          { value: 9, label: "9+" },
          { value: 8, label: "8+" },
          { value: 7, label: "7+" },
          { value: 6, label: "6+" },
          { value: 5, label: "5+" },
          { value: 4, label: "4+" },
          { value: 3, label: "3+" },
        ]}
        onChange={(v) => setMinRating(v)}
      />
    </div>
  );
};

export default Filter;
