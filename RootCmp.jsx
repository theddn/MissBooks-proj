const { useState } = React

import { AppHeader } from './cmps/AppHeader.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { AboutUs } from './pages/About.jsx'

export function App() {
    return (
        <section className="app">
            <header className="app-header main-layout">
                <h1>App</h1>
            </header>
            <main className="main-layout">
                <HomePage />
            </main>
        </section>
    )
}
