const { deleteBookByIdHandler, getBookByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: () => {},
    },
    {
        method: 'GET',
        path: '/books',
        handler: () => {},
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: () => {},
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: () => deleteBookByIdHandler,
    },
  ];

module.exports = routes;
