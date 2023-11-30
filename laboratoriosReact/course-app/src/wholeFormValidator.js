

export function ValidateForm(data){

    let errors = [];
    if(isNaN(data.seatCapacity)){
        errors.push("Solo se permiten numeros");
    }
    if (data.title.length < 5){
        errors.push("El titulo debe contener minimo 5 letras")
    }
    return errors;
}