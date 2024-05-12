import '@testing-library/jest-dom';

// const originalWarn = console.warn.bind(console.warn);
console.warn = (msg) => {
// раскоментировать, если нужно просмотреть сообщения об ошибках во время тестов
//   if (msg.includes('some specific warning text')) {
//     return;
//   }
//   originalWarn(msg);
};