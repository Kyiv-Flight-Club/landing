import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 analog-fpv">
            <div className="flex flex-col items-center gap-8 max-w-md w-full">
                {/* Center Image */}
                <div className="rounded-lg overflow-hidden">
                    <Image
                        src="/logo.png"
                        alt="Profile Image"
                        width={300}
                        height={300}
                        className="object-cover"
                    />
                </div>

                {/* Social Media Buttons */}
                <div className="flex gap-4 w-full">
                    <Button
                        asChild
                        className="pixel-fpv-btn flex-1 group"
                    >
                        <Link
                            href="https://www.instagram.com/kyivflightclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                        >
                            <span className="transition-all group-hover:translate-x-2 group-hover:before:content-['→'] before:mr-2">Instagram</span>
                        </Link>
                    </Button>
                    <Button
                        className="pixel-fpv-btn flex-1 opacity-60 cursor-not-allowed relative"
                        disabled
                    >
                        <span>Telegram</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1">
                          <Label>available soon</Label>
                        </div>
                    </Button>
                </div>
            </div>
        </main>
    )
}
