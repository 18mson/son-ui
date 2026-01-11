"use client";

import Select from "../library/Select";

export default function Preview() {
  return (
    <Select label="Options">
      <option value="">Choose</option>
      <option value="one">One</option>
      <option value="two">Two</option>
    </Select>
  );
}
