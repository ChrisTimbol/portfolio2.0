
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <nav className="flex justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consecte elit.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Quick Links</h2>
                        <ul>
                            <li><Link href="/"></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Contact Us</h2>
                    </div>
                </nav>
            </div>
        </footer>
    )
}