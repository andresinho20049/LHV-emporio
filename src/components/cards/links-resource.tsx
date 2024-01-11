

export const FooterLinksResource = () => {
    return (

        <div className="">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="https://www.mmgisemit.earth/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EMIT</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-2 text-right">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://earth.jpl.nasa.gov/emit/" className="hover:underline">EMIT</a>
                            </li>
                            <li>
                                <a href="https://earth.jpl.nasa.gov/emit/data/data-portal/coverage-and-forecasts/" className="hover:underline">MMGIS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/andresinho20049/mmgis_article/blob/master/SECURITY.md" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://github.com/andresinho20049/mmgis_article/blob/master/LICENSE" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}