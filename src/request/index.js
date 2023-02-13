import axios from "axios";

// Запрос к api
export const send = async (data) => {
  const accessories = () =>  {
    let res = [];
    for (let i = 0; i < data.accessories.length; i++) {
      res.push(data.accessories[i].name)
    }
    return res;
  }
  await axios.post(
    "http://127.0.0.1:8000/api/create",
    {
      painting: data.painting.name,
      film: data.film.name,
      handle: data.handle.name,
      width: data.width.name,
      height: data.height.name,
      opening: data.openingType,
      accessories: accessories(),
      price: data.price
    },
    {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    }
  );
}