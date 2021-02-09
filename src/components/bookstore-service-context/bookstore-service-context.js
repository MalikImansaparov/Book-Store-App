import React from 'react';
// Созд контекст и присваеваем их в переменным(переопределяем)
const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer
} = React.createContext();

export {
  BookstoreServiceProvider,
  BookstoreServiceConsumer
};
