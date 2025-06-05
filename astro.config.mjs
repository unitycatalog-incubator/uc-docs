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
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/unitycatalog-incubator/uc-docs",
        },
      ],
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
          label: "Server",
          items: [
            {
              label: "Configuration",
              link: "/server/configuration/",
            },
            {
              label: "Auth",
              link: "/server/auth/",
            },
            {
              label: "Users and Privileges",
              link: "/server/users-privileges/",
            },
            {
              label: "Google Auth",
              link: "/server/google-auth/",
            },
          ],
        },
        {
          label: "Integration",
          items: [
            {
              label: "Apache Spark",
              link: "/integration/unity-catalog-spark/",
            },
            {
              label: "CelerData",
              link: "/integration/unity-catalog-celerdata/",
            },
            {
              label: "Daft",
              link: "/integration/unity-catalog-daft/",
            },
            {
              label: "DuckDB",
              link: "/integration/unity-catalog-duckdb/",
            },
            {
              label: "Kuzu",
              link: "/integration/unity-catalog-kuzu/",
            },
            {
              label: "PuppyGraph",
              link: "/integration/unity-catalog-puppygraph/",
            },
            {
              label: "SpiceAI",
              link: "/integration/unity-catalog-spiceai/",
            },
            {
              label: "Trino",
              link: "/integration/unity-catalog-trino/",
            },
            {
              label: "XTable",
              link: "/integration/unity-catalog-xtable/",
            },
          ],
        },
        {
          label: "Deployment",
          link: "/deployment/deployment/",
        },
        {
          label: "AI",
          items: [
            {
              label: "Quickstart",
              link: "/ai/quickstart/",
            },
            {
              label: "Usage",
              link: "/ai/usage/",
            },
            {
              label: "AI Client",
              link: "/ai/client/",
            },
            {
              label: "Integrations",
              items: [
                {
                  label: "Overview",
                  link: "/ai/integrations/overview/",
                },
                {
                  label: "LangChain",
                  link: "/ai/integrations/langchain/",
                },
                {
                  label: "LlamaIndex",
                  link: "/ai/integrations/llamaindex/",
                },
                {
                  label: "OpenAI",
                  link: "/ai/integrations/openai/",
                },
                {
                  label: "Anthropic",
                  link: "/ai/integrations/anthropic/",
                },
                {
                  label: "CrewAI",
                  link: "/ai/integrations/crewai/",
                },
                {
                  label: "AutoGen",
                  link: "/ai/integrations/autogen/",
                },
                {
                  label: "LiteLLM",
                  link: "/ai/integrations/litellm/",
                },
                {
                  label: "Gemini",
                  link: "/ai/integrations/gemini/",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
