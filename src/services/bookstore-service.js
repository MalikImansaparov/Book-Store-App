
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C.Martin',
      price: 42,
      coverImage: 'https://m.media-amazon.com/images/I/41-+g1a2Y1L._AC_UY218_.jpg'
    },
    {
      id: 2,
      title: 'Software Engineering at Google',
      author: 'Titus Winters , Tom Manshreck',
      price: 40,
      coverImage: 'https://m.media-amazon.com/images/I/41LGOb9M6zL._AC_UY218_.jpg'
    },
    {
      id: 3,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 38,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 4,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'}
  ];
// Intentional error
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) { //if random numbers > 0.75 throw  intentional error
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);// get book in data
        }
      }, 700);
    });
  }
}