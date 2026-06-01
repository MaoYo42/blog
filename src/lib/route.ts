import { Routes } from '@constants/router';
import { getPostSlug } from '@lib/content/locale';
import type { BlogPost, PostRef } from 'types/blog';

export type RouteParams<T extends Routes> = T extends Routes.Post ? BlogPost | PostRef | undefined : undefined;

function isBlogPost(param: BlogPost | PostRef): param is BlogPost {
  return 'collection' in param;
}

/**
 * Encode a slug, preserving `/` but escaping other URL-unsafe characters (matches Hexo behavior).
 */
export const encodeSlug = (slug: string) => slug?.split('/').map(encodeURIComponent).join('/') ?? '';

export function routeBuilder<T extends Routes>(route: T, param: RouteParams<typeof route>) {
  // BASE_URL is handled by localizedPath in all callers
  let href: string = route.startsWith('/') ? route.slice(1) : route;
  if (!param) return `/${href}`;
  switch (route) {
    case Routes.Post: {
      // BlogPost: resolved via getPostSlug (link override > transliterated slug)
      // PostRef: link (raw frontmatter override, may be CJK) takes precedence over slug (transliterated by builds)
      const slug = isBlogPost(param) ? getPostSlug(param) : (param.link ?? param.slug);
      href += `/${encodeSlug(slug)}`;
      break;
    }
    default:
      break;
  }
  return `/${href}`;
}

export const showDirRoutes = [Routes.Post];
