import validator from "validator";

export function ValidationData(data, rules) {
    let errors = {};

    Object.keys(rules).forEach(field => {
        const rule = rules[field];
        const val = data[field];

        let fieldErrors = [];

        if (rule.required && validator.isEmpty(val)) {
            fieldErrors.push(`${field} is required`);
        }

        if (rule.minlength && !validator.isLength(val, { min: rule.minlength })) {
            fieldErrors.push(`${field} should be at least ${rule.minlength} characters`);
        }

        if (rule.alpha && !validator.isAlpha(val)) {
            fieldErrors.push(`${field} should contain only letters`);
        }

        if (rule.number && validator.isNumeric(val)) {
            fieldErrors.push(`${field} should contain only numbers`);
        }

        if (fieldErrors.length > 0) {
            errors[field] = fieldErrors;
        }
    });

    return errors;
}
