// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://www.unitycatalog.io/",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  integrations: [
    starlight({
      customCss: ["./src/styles/custom.css"],
      title: "Unity Catalog",
      social: {
        github: "https://github.com/unitycatalog-incubator/uc-docs",
      },
      editLink: {
        baseUrl: "https://github.com/unitycatalog-incubator/uc-docs",
      },
      lastUpdated: true,
      logo: {
        light: "./src/assets/unity-catalog-logo-light.svg",
        dark: "./src/assets/unity-catalog-logo-dark.svg",
        replacesTitle: true,
      },
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Getting Started",
          items: [
            {
              label: "Quickstart",
              link: "/getting-started/quickstart/",
            },
            {
              label: "Docker Compose",
              link: "/getting-started/docker_compose/",
            },
          ],
        },
        {
          label: "Usage",
          items: [
            {
              label: "CLI",
              link: "/usage/cli/",
            },
            {
              label: "UI",
              link: "/usage/ui/",
            },
            {
              label: "Tables",
              items: [
                {
                  label: "Delta Lake",
                  link: "/usage/tables/deltalake/",
                },
                {
                  label: "Formats",
                  link: "/usage/tables/formats/",
                },
                {
                  label: "Uniform",
                  link: "/usage/tables/uniform/",
                },
              ],
            },
            {
              label: "Volumes",
              link: "/usage/volumes/",
            },
            {
              label: "Functions",
              link: "/usage/functions/",
            },
            {
              label: "Models",
              link: "/usage/models/",
            },
          ],
        },
        {
          label: "Deployment",
          link: "/deployment/deployment/",
        },
      ],
    }),
  ],
});
