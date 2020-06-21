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

  return getData()
    .then((result) => {
      mainEl.innerHTML = `
      <p>ID：${result.id}</p>
      <p>宿名：${result.propertyName}</p>
      <p>宿タイプ：${result.propertyType}</p>
      <p>キャンセルポリシー：${result.cancelPolicy}</p>
      <p>部屋No.：${result.roomNum}</p>
      <p>風呂場No.：${result.bathroomNum}</p>
      <p>価格：${result.priceInDollars}US$</p>
      <p>ホスト：${result.host.firstName}</p>`;
    })
    .catch((err) => {
      mainEl.innerHTML = `<p>${err.message}</p>`;
    });
}

function getData() {
  return fetchData()
    .then((result) => {
      if (result.success === true) {
        return Promise.resolve(result.propertyData);
      }
    })
    .catch((err) => {
      if (err.success === false) {
        return Promise.reject(err);
      }
    });
}

function fetchData() {
  const chances = _.random(1, 5);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (chances <= 4) {
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
