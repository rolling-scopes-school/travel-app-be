const countryRepo = require('./country.repository');

const getAll = async (lang) => {
  const countries = await countryRepo.getAllByLang(lang);
  return countries;
};

const getOne = async (id, lang) => {
  const country = await countryRepo.getOneByLang(id, lang);
  return country;
};

module.exports = {
  getAll,
  getOne,
};
