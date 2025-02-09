export function BookPreview({ book }) {
    return (
        <section className="book-preview">
            <h4>book name</h4>
            <img src={`../assets/img/${book}.jpg`} />
        </section>
    )
}
