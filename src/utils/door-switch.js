/* 
  Мелкий util для выборки color в двери,
  при мастабировании будет удалено
*/
export const color = (color) => {
  switch (color) {
    case "Зеленый" : return 'green';
    case "Синий" : return 'blue';
    case "Красный" : return 'red';
    default: return "transparent";
  }
}

