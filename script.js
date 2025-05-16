function getFormvalue(event) {
  event.preventDefault(); // prevent form reload
  
  // Accessing form using its ID
  let form = document.getElementById("form1");

  // Trimming extra spaces and getting values
  let fname = form.fname.value.trim();
  let lname = form.lname.value.trim();

  // Alerting full name
  alert(`${fname} ${lname}`);
}
