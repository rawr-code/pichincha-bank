import { format } from "date-fns";

const formatDate = (date?: string | Date) => {
    if (!date) return "";
    return format(new Date(date), "yyyy-MM-dd");
};

export default formatDate;
