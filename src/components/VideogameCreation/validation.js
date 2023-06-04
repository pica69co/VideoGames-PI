export default function validation(inputs) {
  const errors = {};
  const regexName = new RegExp(/^[A-Za-z0-9-() .]+$/); //letras de a a z sin caracteres especiales, hasta 35 caracteres
  const regexRating = new RegExp("[0-5]"); // solo numeros de 0-5
  const regexReleased = new RegExp(!/^[0-9-]+$/)  
  //validate name
  if (!inputs.name) {
    errors.name = "Name with minimum 4 characters";
    errors.disabled = "true";
  }
 
  if (!regexName.test(inputs.name)) {
    errors.name = "Invalid characters";
    errors.disabled = "true";
  }
  
  if (inputs.uniqueName) {
    errors.name = "Name already exists";
    errors.disabled = "true";
  }

  if (inputs.name.length < 4 || inputs.name.length > 35) {
    errors.name = "4 to 35 characters";
    errors.disabled = "true";
  }
  //validate description
  if (!inputs.description) {
    errors.description = "Description needed!";
    errors.disabled = "true";
  }
  if (!regexName.test(inputs.description)) {
    errors.description = "Invalid characters";
    errors.disabled = "true";
  }
  if (inputs.description.length > 500) {
    errors.description = "Too long, Max=500 Characters";
    errors.disabled = "true";
  }
  if (inputs.description.length < 20) {
    errors.description = "At least 21 characters";
    errors.disabled = "true";
  }
  //validate released
  if(!inputs.released){
    errors.released = 'released data is required';
    errors.disabled = "true";
  } 
  if(inputs.released.length > 10 || regexReleased.test(inputs.released)) {
   errors.released = "Invalid date: (yyyy-mm-dd)"
   errors.disabled = "true";
  }

  //validate rating
  if (!regexRating.test(inputs.rating)) {
    errors.rating = "Must be a number";
    errors.disabled = "true";
  }
  if (inputs.rating > 5) {
    errors.rating = "Rating only from 0 to 5";
    errors.disabled = "true";
  }
  return errors;
}
