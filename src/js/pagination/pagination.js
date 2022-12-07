import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import ApiService from '../api';
const container = document.getElementById('tui-pagination-container');

const apiService = new ApiService();
const pagination = new Pagination(container, {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
});
// =====================
pagination.on('beforeMove', async evt => {
  apiService.page = evt.page;
  const movies = await apiService.fetch();
});

let totalItemsFromServer;

const init = async total => {
  if (total === undefined && !totalItemsFromServer)
    totalItemsFromServer = await apiService.fetch();

  if (total === undefined) total = totalItemsFromServer.total_results;

  pagination.setTotalItems(total);
  pagination.reset();
};

init();

export default {
  reset: init,
};
