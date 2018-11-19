//DataTypes:
export const DATA_TYPE_IMAGES = 'ImageType';

//Api
export const API_IMAGES_BASE = `https://api.unsplash.com`;
export const API_IMAGES_SEARCH = ({ query = '', page = 1, perPage = 10 } = {}) =>
	`${API_IMAGES_BASE}/search/photos?query=${query}&page=${page}&perPage=${perPage}`;

//Keys
export const ACCESS_KEY = '8562c2f049054e3362655e6f08875b84eb85b01d98c3083490408bcabd557f2d';
export const SECRET_KEY = '376956931cbb272401e04aa1a56d84ee3e40d7f54c5f595f809ae0ee495e4e8e';
