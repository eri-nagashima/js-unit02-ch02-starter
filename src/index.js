import _ from 'lodash';

const propertyData = {
  id: 1,
  propertyName: '1BR Japanese-style Private Room near Kyoto Station',
  propertyType: 'private',
  cancelPolicy: 'strict',
  roomNum: 1,
  bathroomNum: 1,
  priceInDollars: 50,
  host: {
    id: 1,
    firstName: 'Tom',
  },
};

function handleClick(e) {
  e.preventDefault();
  const mainEl = document.getElementById('main');

  getData()
    .then((result) => {
      mainEl.innerHTML = JSON.stringify(result);
    })
    .catch((err) => {
      mainEl.innerHTML = err;
    });
}

function getData() {
  return fetchData()
    .then((result) => {
      if (result.success === true) {
        const resultData = Promise.resolve(result.propertyData);
        return resultData;
      }
    })
    .catch((err) => {
      if (err.success === false) {
        const errorMessage = Promise.reject(err.message);
        return errorMessage;
      }
    });
}

function fetchData() {
  const chances = _.random(1, 5);

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (chances > 1) {
        resolve({ success: true, propertyData: propertyData });
      } else {
        reject({ success: false, message: 'データの取得に失敗しました。' });
      }
    }, 1000);
  });
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', handleClick);
}
