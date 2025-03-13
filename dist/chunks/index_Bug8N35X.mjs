import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_Z_zf6cj7.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_KAPTh-5B.mjs';
import { r as resolvePath } from './utils_ysUFGKQ_.mjs';
import 'clsx';

const __0___resume_example_png__ = new Proxy({"src":"/_astro/resume-example.C3B2TDtX.png","width":864,"height":247,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/resume-example.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/resume-example.png");
							return target[name];
						}
					});

const __1___resume_output_png__ = new Proxy({"src":"/_astro/resume-output.MSE023fv.png","width":1093,"height":324,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/resume-output.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/resume-output.png");
							return target[name];
						}
					});

const $$Astro = createAstro("https://www.caseyjdavis.com");
const $$MdxPublicImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MdxPublicImage;
  const { src, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(resolvePath(src), "src")}${spreadAttributes(rest)}>`;
}, "/home/casdavis/github/caseyjdavis/src/components/MdxPublicImage.astro", void 0);

const frontmatter = {
  "title": "Markdown Resume",
  "description": "Generate a clean resume from a markdown file.",
  "date": "2025-03-12"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "intro",
    "text": "Intro"
  }, {
    "depth": 2,
    "slug": "requirements",
    "text": "Requirements"
  }, {
    "depth": 2,
    "slug": "installation",
    "text": "Installation"
  }, {
    "depth": 2,
    "slug": "customization",
    "text": "Customization"
  }, {
    "depth": 2,
    "slug": "output",
    "text": "Output"
  }, {
    "depth": 2,
    "slug": "finished-product",
    "text": "Finished product"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "intro",
      children: "Intro"
    }), "\n", createVNode(_components.p, {
      children: "I needed to generate current resume and wanted to use Markdown to keep it simple and version controlled. I found several examples online and decided to create my own version. This project uses pandoc to convert a markdown file to a pdf file. I also used weasyprint to add a css stylesheet to the pdf file. This is an example of how pandoc styled the file using a custom css stylesheet:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "Resume Example",
        src: __0___resume_example_png__
      })
    }), "\n", createVNode(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", createVNode(_components.p, {
      children: "I run an instance of Ubuntu 24.04 in Windows Subsystem for Linux (WSL) and used the following packages:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "pandoc"
      }), "\n", createVNode(_components.li, {
        children: "weasyprint"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", createVNode(_components.p, {
      children: "Install requirements, I was able to do this easily in Ubuntu with the following commands:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-background)",
        color: "var(--astro-code-foreground)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "sudo"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " apt"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " pandoc"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " weasyprint"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " -y"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Then clone this repository to your local machine"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-background)",
        color: "var(--astro-code-foreground)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " https://github.com/caseyjdavis/resume.git"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "customization",
      children: "Customization"
    }), "\n", createVNode(_components.p, {
      children: "Edit the resume.md file to include your information. You can also edit the resume-css-stylesheet.css file to change the styling of the pdf file. The beauty of this project is that you can easily version control your resume and make changes as needed."
    }), "\n", createVNode(_components.h2, {
      id: "output",
      children: "Output"
    }), "\n", createVNode(_components.p, {
      children: "Once you are happy with your resume, run the following command to generate the pdf file:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-background)",
        color: "var(--astro-code-foreground)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "pandoc"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " resume.md"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " -o"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " resume.pdf"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " --pdf-engine=weasyprint"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " --css"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " resume-css-stylesheet.css"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "finished-product",
      children: "Finished product"
    }), "\n", createVNode(_components.p, {
      children: "Pandoc will export a finished resume.pdf file in the current folder"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "Resume Output",
        src: __1___resume_output_png__
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/projects/markdown-resume/index.mdx";
const file = "/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
