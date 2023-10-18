document
  .getElementById("information_button")
  .addEventListener("click", function () {
    fetch("https://api.npoint.io/4a9d0df6b6d19e83ecc6")
      .then((response) => response.json())
      .then((data) => {
        const name = document.getElementById("name_data");
        const profile_picture = document.getElementById("profile_picture_data");
        const age = document.getElementById("age_data");
        const hobbies = document.getElementById("hobbies_data");

        name_data.textContent = data.name;
        age_data.textContent = data.age;
        hobbies_data.textContent = data.hobbies;
        profile_picture_data.src = data.profilephoto;
        console.log("this works");
      });
  });
