/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

function bmi(weight, height) {
    const imc = weight / ( height * height);
    return imc <= 18.5 ? "Underweight" : imc <= 25 ? "Normal" : imc <= 30 ? "Overweight" : "Obese";
  }


//Alternative
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";


//Alternative
