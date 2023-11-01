import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuSelect,
} from "@mui/material";
import React from "react";
import { ValueType } from "../types";

type Props = {
  label: string;
  options: ValueType<string>[];
};

export default function Select(props: Props) {
  const { label, options } = props;
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <MuSelect
          labelId="select-league-labelid"
          id="select-league-id"
          label={label}
          onChange={() => {}}
        >
          {options.map((vt, index) => (
            <MenuItem value={vt.value} key={`vt${index}`}>
              {vt.label}
            </MenuItem>
          ))}
        </MuSelect>
      </FormControl>
    </>
  );
}
