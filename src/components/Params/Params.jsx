import React, { useEffect } from "react";
import c from "./style.module.css";
import SelectOption from "../SelectOption/SelectOption";
import SelectMultiply from "../SelectMultiply/SelectMultiply";
import { useDispatch, useSelector } from "react-redux";
import { paintings, films, handle, width, height, type, accessories } from "@/utils/example-data";
import { send } from "@/request";

const Params = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);


  // callback-функция с switch для диспатча стейтов
  function setParam(data) {
    switch (data.type) {
      case "painting":
        dispatch({ type: "SET_PAINTING_COLOR", payload: data.value });
        break;
      case "films":
        dispatch({ type: "SET_FILM_COLOR", payload: data.value });
        break;
      case "handle":
        dispatch({ type: "SET_HANDLE_COLOR", payload: data.value });
        break;
      case "width":
        dispatch({ type: "SET_WIDTH", payload: data.value });
        break;
      case "height":
        dispatch({ type: "SET_HEIGHT", payload: data.value });
        break;
      case "type":
        dispatch({ type: "SET_OPENING_TYPE", payload: data.value === "Правое" });
        break;
      case "accessories":
        dispatch({ type: "SET_ACCESSORIES", payload: data.value });
        break;
    }
    dispatch({type: "SET_PRICE"})
  }

  const submit = () => {
    if (store.paintings === "") {
      alert("Выберите цвет покраски");
      return;
    }
    if (store.film === "") {
      alert("Выберите цвет пленки");
      return;
    }
    if (store.handle === "") {
      alert("Выберите цвет ручки");
      return;
    }
    if (store.width === "") {
      alert("Выберите ширину");
      return;
    }
    if (store.height === "") {
      alert("Выберите высоту");
      return;
    }
    if (store.openingType === "") {
      alert("Выберите сторону открытия");
      return;
    }
    send(store);
  };

  return (
    <form className={c.form}>
      <SelectOption {...paintings} callback={setParam} />
      <SelectOption {...films} callback={setParam} />
      <SelectOption {...handle} callback={setParam} />
      <SelectOption {...width} callback={setParam} />
      <SelectOption {...height} callback={setParam} />
      <SelectOption {...type} callback={setParam} />
      <SelectMultiply name={"Аксессуары"} items={accessories} callback={setParam} />
      <p>Итого: {store.price} рублей</p>
      <button type="button" className={c.send} onClick={submit}>
        Отправить
      </button>
    </form>
  );
};

export default Params;
