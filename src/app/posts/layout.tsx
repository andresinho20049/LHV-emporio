import FooterComponent from "@/components/footer/footer";
import { Navigation } from "@/components/structure/navigation";
import { ReactNode } from "react";

interface ILayoutProps {
    children: ReactNode;
}
export default function LayoutArticle({ children }: ILayoutProps) {

    return (
        <>
            <header>
                <Navigation />
            </header>
            <main className="max-w-2xl mx-auto py-20 px-0">{children}</main>
            <FooterComponent extended="meet-teams"/>
        </>
    )
}