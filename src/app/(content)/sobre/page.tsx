import { TimelineComponent } from "@/components/timeline/TimelineComponent";
import Image from "next/image";


export default function Sobre() {
    

    return (
        <section>

        <Image 
            alt="Timeline Art"
            src="/img/BackgroundTimeline.png"
            width={1920}
            height={1080}
        />
        <TimelineComponent /> 
        </section>
    )
}