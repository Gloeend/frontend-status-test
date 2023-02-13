import React, { useEffect, useState, useRef } from "react";
import c from "./style.module.css";

const SelectOption = ({ name, items, variable, callback }) => {
  const [value, setValue] = useState();
  const Options = () =>
    items.map((item, index) => (
      <option key={index} value={item.name}>
        {item.name}
      </option>
    ));

  function emitterEvent() {
    const res = items.filter((item) => item.name === event.target.value);
    setValue(event.target.value);
    callback({ type: variable, value: res[0] });
  }

  return (
    <label className={c.item}>
      <span>{name}</span>
      <select name={name} className={c.select} value={value} onChange={emitterEvent} defaultValue={"default"}>
        <option value="default" disabled="disabled">
          Выберите
        </option>
        <Options />
      </select>
    </label>
  );
};

export default SelectOption;
