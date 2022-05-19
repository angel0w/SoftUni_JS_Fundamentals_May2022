function theatrePromotions(typeOfDay, age) {
  let price = "";

  if (age >= 0 && age <= 18) {
    if (typeOfDay === "Weekday") {
      price = 12;
      console.log(`${price}$`)
    } else if (typeOfDay === "Weekend") {
      price = 15;
      console.log(`${price}$`)
    } else if (typeOfDay === "Holiday") {
      price = 5;
      console.log(`${price}$`)
    }
  } else if (age > 18 && age <= 64) {
    if (typeOfDay === "Weekday") {
      price = 18;
      console.log(`${price}$`)
    } else if (typeOfDay === "Weekend") {
      price = 20;
      console.log(`${price}$`)
    } else if (typeOfDay === "Holiday") {
      price = 12;
      console.log(`${price}$`)
    }

  } else if (age > 64 && age <= 122) {
    if (typeOfDay === "Weekday") {
      price = 12;
      console.log(`${price}$`)
    } else if (typeOfDay === "Weekend") {
      price = 15;
      console.log(`${price}$`)
    } else if (typeOfDay === "Holiday") {
      price = 10;
      console.log(`${price}$`)
    }
  } else {
    console.log("Error!");
  }

}
theatrePromotions("Weekday", 42);
theatrePromotions("Holiday", -12);
theatrePromotions("Holiday", 15);
