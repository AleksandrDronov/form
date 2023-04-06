const filterCities = (data: {city: string, population: string}[]) => {
  //фильтруем по численности населения и сортируем по алфавиту
  const cities = data
    .filter((item) => +item.population > 50000)
    .sort((a, b) => {
      if (a.city > b.city) {
        return 1;
      }
      if (a.city < b.city) {
        return -1;
      }
      return 0;
    });

  //ищем индекс города с максимальной численностью населения
  let indexCityWithMaxPopulation = 0;
  let population = +cities[0].population;

  for (let i = 1; i < cities.length; i++) {
    if (+cities[i].population > population) {
      indexCityWithMaxPopulation = i;
      population = +cities[i].population;
    }
  }

  //вставляем в начало массива город с максимальной численностью населения
  cities.unshift(cities[indexCityWithMaxPopulation]);
  //удаляем из массива город с максимальной численностью населения
  cities.splice(indexCityWithMaxPopulation + 1, 1);

  return cities;
}

export default filterCities;