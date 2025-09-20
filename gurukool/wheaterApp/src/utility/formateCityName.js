export function normalizeCityName(cityName) {
  return cityName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

