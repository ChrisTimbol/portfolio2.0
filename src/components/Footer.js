
import Link from 'next/image'

export default function Footer() {
    return (
        <footer class="bg-gray-800 text-white p-4">
            <div class="container mx-auto">
                <nav class="flex justify-between">
                    <div>
                        <h2 class="text-xl font-semibold">About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consecte elit.</p>
                    </div>
                    <div>
                        <h2 class="text-xl font-semibold">Quick Links</h2>
                        <ul>
                            <li><Link href="/"></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="text-xl font-semibold">Contact Us</h2>

                    </div>
                </nav>
            </div>
        </footer>
    )
}