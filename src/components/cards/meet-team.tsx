import CardsSocialMediaComponent, { ICardsSocialMediaProps } from "./cards-social-media"


const profiles_data: ICardsSocialMediaProps[] = [
    {
        image_path: '/team/wellbinho.jpg',
        name: "Welber Costa",
        sub: "Data analytics",
        social_media: [
            {
                name: 'github',
                url: 'https://github.com/wellbinhoo'
            },
            {
                name: 'web',
                url: 'https://wcosta.netlify.app/'
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/welber-costa-845799249/'
            }
        ]
    },
    {
        image_path: '/team/andrey.jpg',
        name: "Andrey Cadmo",
        sub: "Developer frontend",
        social_media: [
            {
                name: 'github',
                url: 'https://github.com/AndreyCadmo'
            },
            {
                name: 'twitter',
                url: 'https://twitter.com/Vortex_0202'
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/andrey-cadmo-501121206/'
            }
        ]
    },
    {
        image_path: '/team/andresinho.jpg',
        name: "André Carlos",
        sub: "Developer",
        social_media: [
            {
                name: 'github',
                url: 'https://github.com/andresinho20049'
            },
            {
                name: 'twitter',
                url: 'https://twitter.com/andresinho20049'
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/andresinho20049/'
            }
        ]
    },
    {
        image_path: '/team/gui.jpg',
        name: "Guilherme Paula",
        sub: "Research",
        social_media: [
            {
                name: 'github',
                url: 'https://github.com/GuilhermeRicardo'
            },
            {
                name: 'twitter',
            },
            {
                name: 'linkedin',
            }
        ]
    },
]

export const MeetTeamsComponent = () => {
    return (
        
        <section className="flex flex-col text-center p-6">
        <h2 className="mb-32 text-3xl font-bold text-white">
            Meet the <u className="text-primary dark:text-primary-500">team</u>
        </h2>

        <div className="grid gap-x-4 md:grid-cols-4 lg:gap-x-12">
            {
                profiles_data.map((profile) => {
                    return (
                        <CardsSocialMediaComponent 
                            key={profile.name}
                            image_path={profile.image_path}
                            name={profile.name}
                            sub={profile.sub}
                            social_media={profile.social_media}
                        />
                    )
                })
            }
        </div>
    </section>
    )
}