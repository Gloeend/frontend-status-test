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
    "http://fstest.d.aa0.ru/public/api/create",
    {
      painting: data.painting.name,
      film: data.film.name,
      handle: data.handle.name,
      width: data.width.name,
      height: data.height.name,
      opening: data.openingType,
      accessories: accessories(),
      price: data.price
    }
  );
}
