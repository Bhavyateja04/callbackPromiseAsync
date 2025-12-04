function getUserDetails(id,callback){
    console.log("getting user details by user id ",id);
    callback({userroll:"1220"})
}
function getUserSubjectDetails(userroll,callback){
    console.log("getting user subject details by roll number",userroll);
    callback({subid:"en-1220"})
}
function getUserMarks(subid){
 console.log("getting user marks from subject id ",subid);
}

getUserDetails("1220", function (userroll){
           getUserSubjectDetails(userroll,function(subid){
            getUserMarks(subid)
        })
});