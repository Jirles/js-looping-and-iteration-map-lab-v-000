// Code your solution in this file.
function lowerCaseDrivers(collection){
  return collection.map(driver => driver.toLowerCase());
};

function nameToAttributes(collection){
  return collection.map(name => {firstName: name.split(' ')[0], lastName: name.split(' ')[1]});
};
