function getUserDetails(id, callback) {
  return new Promise((resolve, reject) => {
    console.log("fun1 called");
    resolve({ userroll: "1220" });
  });
}
function getUserSubjectDetails(userroll, callback) {
  return new Promise((resolve, reject) => {
    console.log("fun2called");
    resolve({ subid: "en-1220" });
  });
}
function getUserMarks(subid) {
  return new Promise((resolve, reject) => {
    console.log("fun3called");
    resolve("getting user marks with subject id ", subid);
  });
}

getUserDetails("1220").
  then((result) => {
    return getUserSubjectDetails(result.userroll);
  })
    .then((result) => {
      return getUserMarks(result.subid);
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
