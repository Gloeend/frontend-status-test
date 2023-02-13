import React, { useEffect } from "react";
import c from "./style.module.css";
import styled from "styled-components";
import { color } from "@/utils/door-switch";
import { useSelector } from "react-redux";

const Door = () => {
  const options = useSelector((state) => state);

  const painting = color(options.painting.name);
  const film = color(options.film.name);
  const handle = color(options.handle.name);
  const type = options.openingType;

  const Default = styled.div`
    transform: ${!type ? "scale(-1, 1)" : ""};
    width: 50%;
    width: 240px;
    height: 500px;
    position: relative;
    background: ${film === "transparent" ? "gray" : film};
    border: 5px solid ${painting === "transparent" ? "gray" : painting};
    &::after {
      content: "";
      position: absolute;
      width: 50px;
      height: 20px;
      background: ${handle === "transparent" ? "gray" : handle};
    }
  `;

  const Left = styled(Default)`
    &::after {
      top: 50%;
      left: 10px;
    }
  `;
  const Right = styled(Default)`
    &::after {
      top: 50%;
      right: 10px;
    }
  `;

  return (
    <div className={c.doors}>
      <Left />
      <Right />
    </div>
  );
};

export default Door;
