import { notification } from "antd";

export default ({title, text, type = 'info', duration = 2}) => {
    notification[type]({
        message: title,
        description: text,
        duration: duration
    })
}