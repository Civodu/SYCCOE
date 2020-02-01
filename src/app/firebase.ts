export var firebaseConfig = {
    apiKey: "AIzaSyC47OSb8fJXJyuIDlX4pfOOr06VpBdmn7E",
    authDomain: "dbalamba-51abf.firebaseapp.com",
    databaseURL: "https://dbalamba-51abf.firebaseio.com",
    projectId: "dbalamba-51abf",
    storageBucket: "dbalamba-51abf.appspot.com",
    messagingSenderId: "734367208047",
  };
export default firebaseConfig

export const snapshotToArray = snapshot =>{
  let returnArray = [];
  snapshot.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
  });
  return returnArray;
}