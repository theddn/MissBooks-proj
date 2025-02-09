const { useState } = React

import { AppHeader } from './cmps/AppHeader.jsx'

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/About.jsx'
import { BookIndex } from './pages/BookIndex.jsx'

export function App() {
    const [page, setPage] = useState('book')

    function onSetPage(page) {
        setPage(page)
    }

    return (
        <section className="app">
            <header>
                <AppHeader onSetPage={onSetPage} />
            </header>
            <main>
                {page === 'home' && <HomePage />}
                {page === 'about' && <AboutUs />}
                {page === 'home' && <BookIndex />}
            </main>
        </section>
    )
}
