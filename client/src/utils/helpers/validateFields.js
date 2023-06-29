export default (key, toched, errors) => {
    if (toched[key]) {
        if (errors[key]) {
            return "error";
        } else {
            return "success";
        }
    } else {
        return "";
    }
}