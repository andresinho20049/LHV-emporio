import { MeetTeamsComponent } from "../cards/meet-team";
import { FooterLinksResource } from "../cards/links-resource";


interface IFooterComponentProps {
    extended?: 'meet-teams' | 'footer-links';
}

export default function FooterComponent({
    extended
}: IFooterComponentProps) {

    const compExt = extended === 'meet-teams' ? <MeetTeamsComponent /> :
        extended === 'footer-links' ? <FooterLinksResource />
            : <></>;


    return (
        <footer
            className={`bg-neutral-700 mx-auto w-full p-4 py-6`}
        >
            {/* Extend footer */}
            {compExt}

            {/* <!--Copyright section--> */}
            <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 py-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.mmgisemit.earth/" className="hover:underline">EMIT™</a>. MIT
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <a href="https://colab.research.google.com/drive/1e9fqKgzY5AHm63wSPeVJYGT8dai7XWA3" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 48 48">
                            <path fill="#ffb300" d="M33.5,10C26.044,10,20,16.044,20,23.5C20,30.956,26.044,37,33.5,37S47,30.956,47,23.5	C47,16.044,40.956,10,33.5,10z M33.5,30c-3.59,0-6.5-2.91-6.5-6.5s2.91-6.5,6.5-6.5s6.5,2.91,6.5,6.5S37.09,30,33.5,30z"></path><path fill="#ffb300" d="M19.14,28.051l0-0.003C17.96,29.252,16.318,30,14.5,30C10.91,30,8,27.09,8,23.5s2.91-6.5,6.5-6.5	c1.83,0,3.481,0.759,4.662,1.976l3.75-6.024C20.604,11.109,17.683,10,14.5,10C7.044,10,1,16.044,1,23.5C1,30.956,7.044,37,14.5,37	c3.164,0,6.067-1.097,8.369-2.919L19.14,28.051z"></path><path fill="#f57c00" d="M8,23.5c0-1.787,0.722-3.405,1.889-4.58l-4.855-5.038C2.546,16.33,1,19.733,1,23.5	c0,3.749,1.53,7.14,3.998,9.586l4.934-4.964C8.74,26.944,8,25.309,8,23.5z"></path><path fill="#f57c00" d="M38.13,18.941C39.285,20.114,40,21.723,40,23.5c0,3.59-2.91,6.5-6.5,6.5	c-1.826,0-3.474-0.755-4.655-1.968l-4.999,4.895C26.298,35.437,29.714,37,33.5,37C40.956,37,47,30.956,47,23.5	c0-3.684-1.479-7.019-3.871-9.455L38.13,18.941z"></path>
                        </svg>
                        <span className="sr-only">Colaboratory</span>
                    </a>
                    <a href="https://github.com/andresinho20049/mmgis_article" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                        </svg>
                        <span className="sr-only">GitHub Repository</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}