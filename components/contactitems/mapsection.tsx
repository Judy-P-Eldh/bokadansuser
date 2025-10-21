export default function MapSection() {
    return (
        <div className="md:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2044.6268889310581!2d17.432302077297404!3d59.172094723596615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f1108b4f4c1e7%3A0xe508d2ebf34e9c58!2sTjusarstigen%2045%2C%20155%2037%20Nykvarn!5e0!3m2!1ssv!2sse!4v1756824461885!5m2!1ssv!2sse"
                width="100%" height="100%"
                style={{ minHeight: "400px" }}
                title="karta"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}