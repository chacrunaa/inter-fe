import '@testing-library/jest-dom';
/**
 *  раскоментировать код ниже, если нужно просмотреть сообщения об ошибках во время тестов
 * */
// const originalWarn = console.warn.bind(console.warn);
//@ts-ignore
console.warn = msg => {
  //   if (msg.includes('some specific warning text')) {
  //     return;
  //   }
  //   originalWarn(msg);
};
