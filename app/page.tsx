import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
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
                    {/*<Button asChild className="flex-1 bg-[#0088cc] hover:bg-[#0077b5]">*/}
                    {/*    <Link*/}
                    {/*        href="https://t.me/yourusername"*/}
                    {/*        target="_blank"*/}
                    {/*        rel="noopener noreferrer"*/}
                    {/*        className="flex items-center justify-center gap-2"*/}
                    {/*    >*/}
                    {/*        <Send size={20} />*/}
                    {/*        <span>Telegram</span>*/}
                    {/*    </Link>*/}
                    {/*</Button>*/}

                    <Button
                        asChild
                        className="flex-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90"
                    >
                        <Link
                            href="https://www.instagram.com/kyivflightclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                        >
                            <Instagram size={20} />
                            <span>Instagram</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}
