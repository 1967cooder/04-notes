import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        important: true
    },
    {
        id: 4,
        content: "Let's see if this new content can be seen on every instance",
        important: true
    },
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)