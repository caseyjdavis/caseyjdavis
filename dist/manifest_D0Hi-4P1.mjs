import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_Z_zf6cj7.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/casdavis/github/caseyjdavis/","cacheDir":"file:///home/casdavis/github/caseyjdavis/node_modules/.astro/","outDir":"file:///home/casdavis/github/caseyjdavis/dist/","srcDir":"file:///home/casdavis/github/caseyjdavis/src/","publicDir":"file:///home/casdavis/github/caseyjdavis/public/","buildClientDir":"file:///home/casdavis/github/caseyjdavis/dist/client/","buildServerDir":"file:///home/casdavis/github/caseyjdavis/dist/server/","adapterName":"","routes":[{"file":"file:///home/casdavis/github/caseyjdavis/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/casdavis/github/caseyjdavis/dist/feed.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/feed.xml","isIndex":false,"type":"endpoint","pattern":"^\\/feed\\.xml\\/?$","segments":[[{"content":"feed.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/feed.xml.js","pathname":"/feed.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/casdavis/github/caseyjdavis/dist/hire-me/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hire-me","isIndex":true,"type":"page","pattern":"^\\/hire-me\\/?$","segments":[[{"content":"hire-me","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hire-me/index.astro","pathname":"/hire-me","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/casdavis/github/caseyjdavis/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/casdavis/github/caseyjdavis/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.caseyjdavis.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/casdavis/github/caseyjdavis/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/RootPageIndex.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/hire-me/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/hire-me/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/projects/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/tags/[...slug]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[...slug]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/talks/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/talks/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/talks/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/talks/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/PageFind.astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/lib/utils.ts",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/BlogAuthor.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/BlogCardButton.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/EntryHeader.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/FormattedDate.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/Head.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/MdxPublicImage.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/index.mdx",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/index.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/.astro/content-modules.mjs",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/node_modules/astro/dist/content/runtime.js",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/PostNavigation.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/ProjectCardButton.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/Tag.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/TalkCardButton.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/TextLink.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/BlogLicenseInfo.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/TableOfContentsHeading.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/components/TableOfContents.astro",{"propagation":"in-tree","containsHead":false}],["/home/casdavis/github/caseyjdavis/src/pages/feed.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/feed.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/feed.xml@_@js":"pages/feed.xml.astro.mjs","\u0000@astro-page:src/pages/hire-me/index@_@astro":"pages/hire-me.astro.mjs","\u0000@astro-page:src/pages/projects/[...page]@_@astro":"pages/projects/_---page_.astro.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"pages/projects/_---slug_.astro.mjs","\u0000@astro-page:src/pages/tags/[...slug]/[...page]@_@astro":"pages/tags/_---slug_/_---page_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/talks/[...page]@_@astro":"pages/talks/_---page_.astro.mjs","\u0000@astro-page:src/pages/talks/[...slug]@_@astro":"pages/talks/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D0Hi-4P1.mjs","/home/casdavis/github/caseyjdavis/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/casdavis/github/caseyjdavis/.astro/content-modules.mjs":"chunks/content-modules_Dbp3QWUK.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_nW9BT9um.mjs","/home/casdavis/github/caseyjdavis/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_lJHA9qBi.mjs","/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/index.mdx?astroPropagatedAssets":"chunks/index_C6XOt2Kf.mjs","/home/casdavis/github/caseyjdavis/src/content/projects/markdown-resume/index.mdx":"chunks/index_Bug8N35X.mjs","/home/casdavis/github/caseyjdavis/node_modules/astro-pagefind/src/components/Search.astro?astro&type=script&index=0&lang.ts":"_astro/Search.astro_astro_type_script_index_0_lang.C4tRTXsn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///home/casdavis/github/caseyjdavis/dist/404.html","/file:///home/casdavis/github/caseyjdavis/dist/feed.xml","/file:///home/casdavis/github/caseyjdavis/dist/hire-me/index.html","/file:///home/casdavis/github/caseyjdavis/dist/tags/index.html","/file:///home/casdavis/github/caseyjdavis/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"duWerIS6Re9obfremiQS8clXIKrLAOSdf7mfn7QEfUI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
