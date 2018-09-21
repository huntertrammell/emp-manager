
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDmj8xYBEaPWeigHo7v5tTVXz-nZZ5bja8",
    authDomain: "employee-db-bde58.firebaseapp.com",
    databaseURL: "https://employee-db-bde58.firebaseio.com",
    projectId: "employee-db-bde58",
    storageBucket: "employee-db-bde58.appspot.com",
    messagingSenderId: "99534901710"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var name = "";
  var job = "";
  var startDate = "";
  var monthlyIncome = "";
  var monthlyRate;
  var rd = moment(startDate, DATE_FORMAT);

$('#submit').on('click', function(){
    event.preventDefault();
    name = $("#name").val().trim();
    job = $("#job").val().trim();
    startDate = $("#startDate").val().trim();
    monthlyIncome = $("#monthlyIncome").val().trim();

    console.log(name, job, startDate, monthlyIncome)
    database.ref().push({
        name: name,
        job: job,
        startDate: startDate,
        monthlyIncome: monthlyIncome
      });
      startDate = rd.format("X")
      alert("You have registered an Employee")
    console.log(name, job, startDate, monthlyIncome)
})

database.ref().on("child_added", function(childSnapshot) {
    monthsWorked = ()
    $('#tableOutput').append('<tr><td scope="col">' + childSnapshot.val().name + '</td>' 
    + '<td scope="col">' + childSnapshot.val().job + '</td>'
    + '<td scope="col">' + childSnapshot.val().startDate + '</td>'
    + '<td scope="col">' + childSnapshot.val().monthlyIncome + '</td>'
    + '<td scope="col">' + monthsWorked + '</td>'
    + '<td scope="col">' + totalBilled + '</td>')
})

