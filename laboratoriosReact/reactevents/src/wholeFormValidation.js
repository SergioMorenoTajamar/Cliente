
export function ValidateForm(data) {
    console.log("denrto de validateForm")
    let errors = [];
    if (!data.email.endsWith("@example.com")) {
        errors.push("Only example.com users allowed");
    }
    if (!data.email.toLowerCase().startsWith(data.name.toLowerCase())) {
        errors.push("Email address must start with name");
    }
    if (data.name.toLowerCase() === "juan") {
        errors.push("Go away, Juan")
    }
    return errors;
}