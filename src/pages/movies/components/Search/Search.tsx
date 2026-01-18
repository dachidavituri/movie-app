import React from "react";
import qs from "qs";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import type { FilterValues, SearchProps } from "./index.types";
import { Input } from "antd";

const Search: React.FC<SearchProps> = ({ setSearched }) => {
  const [filter, setFilter] = useSearchParams();
  const defaultFilterValues = qs.parse(filter.toString());

  const { control, watch } = useForm<FilterValues>({
    defaultValues: defaultFilterValues,
  });

  const filtered = watch("search");

  useEffect(() => {
    if (filtered) {
      setFilter(
        qs.stringify(
          { search: filtered },
          { skipNulls: true, filter: (_, value) => value || undefined },
        ),
      );
      setSearched(filtered);
    } else {
      setFilter({}, { replace: true });
      setSearched("");
    }
  }, [filtered, setFilter, setSearched]);
  return (
    <form>
      <Controller
        control={control}
        name="search"
        render={({ field }) => (
          <Input
            {...field}
            value={field.value || ""}
            placeholder="Search Movie"
          />
        )}
      />
    </form>
  );
};

export default Search;
