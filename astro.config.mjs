// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://www.unitycatalog.io/",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  adapter: netlify(),
  integrations: [
    starlight({
      customCss: ["./src/styles/custom.css"],
      title: "Unity Catalog",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/unitycatalog/unitycatalog",
        },
      ],
      head: [
        {
          tag: "script",
          content: `
            document.addEventListener('DOMContentLoaded', async function() {
              console.log('GitHub stats script loaded');
              
              const socialContainer = document.querySelector('.sl-flex.social-icons') || 
                                    document.querySelector('[class*="social"]') ||
                                    document.querySelector('.sl-header__actions');
              
              if (socialContainer) {
                console.log('Social container found, fetching GitHub data');
                
                try {
                  // Fetch repository data from GitHub API
                  const response = await fetch('https://api.github.com/repos/unitycatalog/unitycatalog');
                  const data = await response.json();
                  
                  // Format numbers
                  const formatNumber = (num) => {
                    if (num >= 1000) {
                      return (num / 1000).toFixed(1) + 'k';
                    }
                    return num.toString();
                  };
                  
                  // Get latest release version
                  let latestVersion = 'v0.3.0'; // fallback
                  try {
                    const releaseResponse = await fetch('https://api.github.com/repos/unitycatalog/unitycatalog/releases/latest');
                    const releaseData = await releaseResponse.json();
                    latestVersion = releaseData.tag_name || latestVersion;
                  } catch (e) {
                    console.log('Could not fetch latest release, using fallback version');
                  }
                  
                  const githubStats = document.createElement('div');
                  githubStats.innerHTML = \`
                    <div class="github-stats">
                      <a href="https://github.com/unitycatalog/unitycatalog" title="Go to repository" class="github-link">
                        <div class="github-info">
                          <ul class="github-facts">
                            <li class="github-fact github-fact--version">\${latestVersion}</li>
                            <li class="github-fact github-fact--stars">\${formatNumber(data.stargazers_count)}</li>
                            <li class="github-fact github-fact--forks">\${formatNumber(data.forks_count)}</li>
                          </ul>
                        </div>
                      </a>
                    </div>
                  \`;
                  githubStats.className = 'github-stats-container';
                  socialContainer.appendChild(githubStats);
                  console.log('GitHub stats added with live data');
                  
                } catch (error) {
                  console.log('Failed to fetch GitHub data, using fallback');
                  // Fallback to static data
                  const githubStats = document.createElement('div');
                  githubStats.innerHTML = \`
                    <div class="github-stats">
                      <a href="https://github.com/unitycatalog/unitycatalog" title="Go to repository" class="github-link">
                        <div class="github-info">
                          <ul class="github-facts">
                            <li class="github-fact github-fact--version">v0.3.0</li>
                            <li class="github-fact github-fact--stars">3.1k</li>
                            <li class="github-fact github-fact--forks">523</li>
                          </ul>
                        </div>
                      </a>
                    </div>
                  \`;
                  githubStats.className = 'github-stats-container';
                  socialContainer.appendChild(githubStats);
                }
              } else {
                console.log('Social container not found');
              }
            });
          `,
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
              label: "API",
              items: [
                {
                  label: "Overview",
                  link: "/usage/api/overview/",
                },
                {
                  label: "Catalogs",
                  link: "/usage/api/catalogs/",
                },
                {
                  label: "Functions",
                  link: "/usage/api/functions/",
                },
                {
                  label: "Models",
                  link: "/usage/api/models/",
                },
                {
                  label: "Volumes",
                  link: "/usage/api/volumes/",
                },
                {
                  label: "Schemas",
                  link: "/usage/api/schemas/",
                },
                {
                  label: "Tables",
                  link: "/usage/api/tables/",
                },
              ],
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
