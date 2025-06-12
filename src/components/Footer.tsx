import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
            <Socials />
            <section className="mt-8 sm:mt-0">
                <p className="text-center text-xs text-muted-foreground">
                    <span>&copy; {new Date().getFullYear()}</span>{" "}
                    <Link className="link" href="/">
                        www.jacobkly.com
                    </Link>
                    {" | "}
                    <span style={{ fontSize: "1.25em" }}>🎷🎸</span>
                </p>
            </section>
        </footer>
    );
} 