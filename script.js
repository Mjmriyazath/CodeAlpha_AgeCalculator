function calculateAge() {
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value - 1; // Months are 0-indexed
  const day = document.getElementById("day").value;

  const dob = new Date(year, month, day);
  const today = new Date();

  // Calculate milliseconds in a year
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365;

  // Calculate age in milliseconds
  const ageInMilliseconds = today.getTime() - dob.getTime();

  // Convert age to years (rounded down)
  const age = Math.floor(ageInMilliseconds / millisecondsPerYear);

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "Your age is: " + age + " years old";
}
