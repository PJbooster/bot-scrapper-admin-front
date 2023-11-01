import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select as MuSelect,
  OutlinedInput,
  SelectChangeEvent,
  Theme,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { ValueType } from "../types";

type Props<T> = {
  label: string;
  options: ValueType<T>[];
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultiSelect<T>(props: Props<T>) {
  const { label, options } = props;

  const theme = useTheme();
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box sx={{ p: 2 }}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <MuSelect
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </MuSelect>
      </FormControl>
    </Box>
  );
}
