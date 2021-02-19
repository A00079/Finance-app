import { extend } from "vee-validate";
import { required, numeric, digits, email } from "vee-validate/dist/rules";

// Install rules
extend("required", required);
extend("numeric", numeric);
extend("digits", digits);
extend("email", email);


