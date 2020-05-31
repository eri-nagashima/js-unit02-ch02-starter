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
  /* 
    getDataを呼び出して、mainEl.innerHTMLを利用して、結果を出力します。
  */
  const featchedData = getData();
  mainEl.innerHTML = featchedData;
}

function getData() {
  /* 
    fetchDataを呼び出して、戻ってきたデータのsuccessの値を元にresolveで物件データまたは、rejectでエラーメッセージを返す。
  */
  fetchData()
    .then(function () {
      console.log({ success: true, propertyData: propertyData });
    })
    .catch(
      console.log({
        success: false,
        message: 'データの取得に失敗しました。',
      })
    );
}

function fetchData() {
  /* 
    lodashのrandom()を使って、80%の確率で正しいデータを返し、20%の確率でエラーを返すようにしましょう。
    またsetTimeoutを利用して、1秒待ってから結果を得るようにします。
  */
  const chances = _.random(1, 10);

  return new Promise(function (resolve, reject) {
    if (chances < 9) {
      setTimeout(() => {
        resolve();
      }, 1000);
    } else {
      setTimeout(() => {
        reject(
          console.log({
            success: false,
            message: 'データの取得に失敗しました。',
          })
        );
      }, 1000);
    }
  });
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', handleClick);
}
