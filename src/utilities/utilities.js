import { toast } from 'react-toastify';
const notify_position = toast.POSITION.TOP_CENTER;

export const utilities = {
    notify: {
        success: function(message) {
            toast.success(message, {
                position: notify_position
            })
        },
        error: function(message) {
            toast.error(message, {
                position: notify_position
            })
        },
        warning: function(message) {
            toast.warning(message, {
                position: notify_position
            })
        },
        info: function(message) {
            toast.info(message, {
                position: notify_position
            })
        },
        default: function(message) {
            toast(message, {
                position: notify_position
            })
        },
    }
}
