import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
// import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

export const ControlledCheckbox = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Checkbox
        value="論文"
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      {/* <FormControl component="fieldset">
        <FormLabel component="legend">Label placement</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox />}
            label="Bottom"
            labelPlacement="bottom"
          />
        </FormGroup>
      </FormControl> */}
      <FormControlLabel
        value="end"
        control={<Checkbox />}
        label="論文"
        labelPlacement="end"
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
};
