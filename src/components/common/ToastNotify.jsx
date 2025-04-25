import React, { useEffect, useState } from 'react';

function ToastNotify({ message = '', type = 'danger', duration = 3000 }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Set a timer to automatically hide the toast after the duration
        const timer = setTimeout(() => setShow(false), duration);

        // Clean up timer if component is unmounted
        return () => clearTimeout(timer);
    }, [duration]);

    if (!show || !message) return null;

    return (
        <div
            className={`toast-alert toast-center-top alert alert-${type} text-center`}
        >
            {message}
        </div>
    );
}

export default ToastNotify;
