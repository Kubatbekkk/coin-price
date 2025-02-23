import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import type { SortBy } from "../types";

interface SortControlProps {
  sortBy: SortBy;
  onSortChange: (value: SortBy) => void;
}

export const SortControl = ({ sortBy, onSortChange }: SortControlProps) => {
  return (
    <FormControl
      sx={{
        mb: 1,
        backgroundColor: "white",
        borderRadius: "5px",
        width: {
          md: "200px",
          xs: "100%",
        },
      }}
    >
      <InputLabel id="sort-by-label">Sort By</InputLabel>
      <Select
        labelId="sort-by-label"
        value={sortBy || ""}
        onChange={(e) => onSortChange(e.target.value as SortBy)}
        label="Sort By"
        sx={{
          width: {
            md: "200px",
            xs: "100%",
          },
        }}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="name-az">Name (A-Z)</MenuItem>
        <MenuItem value="name-za">Name (Z-A)</MenuItem>
        <MenuItem value="rate-asc">Rate (Low to High)</MenuItem>
        <MenuItem value="rate-desc">Rate (High to Low)</MenuItem>
      </Select>
    </FormControl>
  );
};
