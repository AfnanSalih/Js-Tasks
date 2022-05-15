let calc_btn = document.getElementById("calc_btn"),
    calc_age = document.getElementById("calc_age");
    

    calc_btn.addEventListener("click",function(){
      let birth_date = document.getElementById("birth_date").value;
      birth_date = new Date(birth_date);
      let today_date = new Date()
      let total_age =  Date.now() - birth_date.getTime();
      ageYear = new Date(total_age);
      ageYear = Math.abs(ageYear.getUTCFullYear()-1970); 
      calc_age.innerHTML="Your Age "+ ageYear +" Year";

    })

