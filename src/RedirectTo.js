import React, { useEffect } from 'react';
import { MessageBus } from '@ivoyant/component-message-bus';
import { useHistory } from 'react-router';

export default function RedirectTo() {
    const history = useHistory();
    const changeUrl = (...data) => {
        if (data && data?.length > 2 && data[2]?.body?.url)
            history.push(data[2].body.url, {
                routeData: data[2]?.body?.routeData,
            });
    };
    useEffect(() => {
        MessageBus.subscribe('URL-CHANGE', 'URL-CHANGE', changeUrl);
    }, []);
    return null;
}
