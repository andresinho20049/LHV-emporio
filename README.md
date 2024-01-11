# MMGIS - EMIT Article
Project developed for NASA's Space apps Challenge. \
[view our website](https://www.mmgisemit.earth/)

## About

### What's Our Mission
Our mission is to bring a tool that enthusiasts, students and researchers can use to assist in searches and research with EMIT.

The EMIT offers a diverse range of active applications that span beyond greenhouse gas mapping, snow properties, and water resources. Its potential could extend to natural hazards, environmental pollution, coastal waters, harmful algal blooms, agricultural monitoring, forest management and fire, vegetation community, and biodiversity monitoring. With the ability to support a wide array of environmental monitoring and management efforts, EMIT is a valuable tool for businesses and academics alike.

### The EMIT
The Earth Surface Mineral Dust Source Investigation (EMIT) instrument measures surface mineralogy, targeting the Earth’s arid dust source regions. The measurements will then be used as input data for the composition of dust sources in Earth System Models (ESM). EMIT is installed on the International Space Station (ISS) and uses imaging spectroscopy to take mineralogical measurements of sunlit regions of interest between 52° N latitude and 52° S latitude. Up to five visits (three on average) of each arid target region are scheduled, only downlinking acquisitions that are not dominated by cloud cover. The EMIT instrument is an imaging spectrometer that uses contiguous spectroscopic measurements in the visible to shortwave infrared region of the spectrum to resolve absorption features of dust-forming minerals. EMIT has a viewing swath width of 75 km, measuring 285 bands at a spatial resolution of 60 m. Maps of the relative abundance of source minerals that are generated from EMIT data will advance our understanding of the current and future impacts of mineral dust in the Earth system.

### Data analysis
Let's work the data from the tables into a unified data frame. By representing coordinates in the (n, 2) structure, we can leverage numpy to perform the necessary statistical analysis. Our objective is to map the methane plume and authenticate its temporal and spatial characteristics. We will later feed the data into a machine learning algorithm to generate predictions based on the available information.

### How we study the data
Identifying mineral dust, methane plumes, and carbon gas poses a formidable challenge when dealing with cutting-edge instrumentation. 

However, the EMIT team provided us with numerous tools, rendering our work a more enjoyable experience. By utilizing the `Collaboratory` platform and models available in the GIT repository, we were able to effectively analyze the data. Additionally, we registered with NASA Earthdata to download and access S3, allowing us to search and work with the data.

Our work became increasingly complex when we encountered files with the extensions `.tif` and `.nc`, which were gigabytes in size. To properly analyze the data, we employed libraries such as `holoviews`, `array`, `netCDF4`, and `gdal`. 

Furthermore, we relied on commonly used libraries such as `numpy`, `pandas`, and `matplotlib`, which provided assistance.


## Getting Started
There are two ways that can be used to start the project

1. Docker / Docker compose
2. Node (npm / yarn / pnpm / bun)

<details> 
<summary>
Docker
</summary>
<content>

1. Run docker compose with profile development
```sh
docker compose --profile development up
```

> if you want to build before running, incrude `--build`

Example:
```sh
docker compose --profile development up --build
```

2. Run docker compose with command start
```
docker compose up
```

> obs: If you get an error when running with Docker Compose, try building it separately 

**Example**: \
Defines the target in the build command.
- development  
`docker build -t mmgis_article_dev:0.0.1v --target development .`

- builder   
`docker build -t mmgis_article_pkg:0.0.1v --target builder .`

- production    
(The last clause of "from" to default target .) \
`docker build -t mmgis_article:0.0.1v .`

</content>
</details> 

<details> 
<summary>
Node (or something package manager)
</summary>
<content>

> in this example will use npm

1. Run npm compose to run development
```sh
npm run dev
```

> if you want to build before running, exec `npm run build`

2. Run npm with command start
```sh
npm run start
```

> obs: If you want to briefly see the project working after making a clone of it, run it.

```sh
npm run preview
```

</content>
</details> 

### NextJs and App router
In version 13, Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more.

The App Router works in a new directory named app. The app directory works alongside the pages directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other routes in the pages directory for previous behavior. If your application uses the pages directory, please also see the Pages Router documentation.

[see more](https://nextjs.org/docs/app/building-your-application/routing#:~:text=In%20version%2013,Pages%20Router%20documentation.)

### MDX
Markdown is a lightweight markup language used to format text. It allows you to write using plain text syntax and convert it to structurally valid HTML. It's commonly used for writing content on websites and blogs.

MDX is a superset of markdown that lets you write JSX directly in your markdown files. It is a powerful way to add dynamic interactivity and embed React components within your content.

Next.js can support both local MDX content inside your application, as well as remote MDX files fetched dynamically on the server. The Next.js plugin handles transforming markdown and React components into HTML, including support for usage in Server Components (the default in App Router).

### Why we use MDX
Our goal was to establish a platform that allows users to generate and share their EMIT articles in a centralized location.

To achieve this, our solution has a folder structure that automatically loads MDX files onto the website as new pages.

Thanks to this recently introduced technology, we were able to meet our requirements and unite our approach.

## References
It would be worthwhile to peruse the articles and other compelling content that our team has produced.

| Name | URL |
| --- | --- |
| Web Site | https://www.mmgisemit.earth/ |
| Colaboratory | https://colab.research.google.com/drive/1e9fqKgzY5AHm63wSPeVJYGT8dai7XWA3 |
| LPDAAC | https://lpdaac.usgs.gov/product_search/?query=emit&view=cards&sort=title |
| Collection overview | https://lpdaac.usgs.gov/data/get-started-data/collection-overview/ |

## Considerations
I would like to convey my heartfelt appreciation to the entire team for their dedication. It is because of their efforts that we were able to conduct thorough research, analyze the data, write the article, and devise effective solutions. Their hard work and commitment are truly commendable.

> **Project**: EMIT Articles \
> **Team**: 
> - André (Developer)
> - Andrey (Web Developer)
> - Welber (Data analysis)
> - Guilherme (Research)
>
> **Delivery**: 08/10/2023 (dd/MM/yyyy)