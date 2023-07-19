/*const fetchData = (callback) => {
  setTimeout(() => {
    callback('Done!');
  }, 1500);
}*/

//we can also return a promise instead of using callback function
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
}

/*
setTimeout(() => {
  console.log('Timer is done!');
  fetchData((text) => {
    console.log(text);
  });
}, 1);
*/

//above example is asynchronous and quite readable, but in case we have more than one callback,
//it will be a mess. So we can use promises/async/await to make it better and more readable
setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2)
    });
}, 2000);


console.log('Hello!');
console.log('Hi!');