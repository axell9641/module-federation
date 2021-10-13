import { loadRemoteEntry } from '@angular-architects/module-federation-runtime';

Promise.all([
    loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'mfe1'),
    loadRemoteEntry('http://localhost:4000/remoteEntry.js', 'mfe2')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));