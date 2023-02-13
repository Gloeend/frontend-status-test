import React, { useEffect, useState } from "react";
import c from "./style.module.css";

const SelectMultiply = ({ name, items, callback }) => {
  const [selected, useSelect] = useState([]);
  const [open, setOpen] = useState(false);

  const select = (value) => {
    if (selected.includes(value)) {
      return useSelect(selected.filter((item) => item != value));
    }
    return useSelect([...selected, value]);
  };

  useEffect(() => {
    const res = items.filter((item) => selected.includes(item.name));
    callback({ type: "accessories", value: res });
  }, [selected]);

  const Options = () =>
    items.map((item, index) => {
      return (
        <div
          className={c.item + " " + (selected.includes(item.name) ? c.active : "")}
          onClick={(e) => select(e.target.getAttribute("data-value"))}
          data-value={item.name}
          key={index}
        >
          {item.name}
        </div>
      );
    });

  const windowSwitch = () => setOpen(!open);

  return (
    <label className={c.label}>
      <span>{name}</span>
      <div className={c.select}>
        <button type="button" className={c.open} onClick={windowSwitch} disabled={open}>
          Выберите
        </button>
        <div className={c.items + " " + (open ? c.opened : "")}>
          <button type="button" className={c.close} onClick={windowSwitch}>
            X
          </button>
          <Options />
        </div>
      </div>
    </label>
  );
};

export default SelectMultiply;
