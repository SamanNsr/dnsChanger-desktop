import React from 'react';
import { ServersContext } from '../interfaces/servers-context.interface';
export const serversContext = React.createContext<ServersContext>({
    servers: [],
    setServers: () => { }
})