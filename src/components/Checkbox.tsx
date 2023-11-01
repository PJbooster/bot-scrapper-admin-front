import { FormControlLabel, Checkbox as MeterialCheckbox } from "@mui/material";
import React, { useState } from "react";

type Props = {
  label: string;
};

export default function Checkbox({ label }: Props) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChecked = () => setChecked(!checked);

  return (
    <>
      <FormControlLabel
        label={label}
        control={
          <MeterialCheckbox checked={checked} onChange={handleChecked} />
        }
      />
    </>
  );
}
