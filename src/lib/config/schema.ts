/**
 * Zod schema for validating config/site.yaml at build time.
 * Throws on structural mismatch so misconfigurations fail early.
 */

import { z } from 'zod';

// ---- Primitives ----

const socialPlatformSchema = z.object({
  url: z.string(), // Accepts both absolute URLs and relative paths (e.g., /rss.xml)
  icon: z.string(),
  color: z.string(),
});

// ---- Site ----

const icpSchema = z.union([
  z.string(),
  z.object({ text: z.string(), link: z.string().optional() }),
]);

const siteBasicSchema = z.object({
  title: z.string(),
  alternate: z.string().optional(),
  subtitle: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  avatar: z.string().optional(),
  showLogo: z.boolean().optional(),
  author: z.string().optional(),
  url: z.string(),
  startYear: z.number().int().optional(),
  defaultOgImage: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  breadcrumbHome: z.string().optional(),
  timezone: z.string().optional(),
  icp: icpSchema.optional(),
  enableSlugTransliteration: z.boolean().optional(),
});

// ---- Content ----

const contentSchema = z.object({
  addBlankTarget: z.boolean().optional(),
  smoothScroll: z.boolean().optional(),
  addHeadingLevel: z.boolean().optional(),
  enhanceCodeBlock: z.boolean().optional(),
  enableCodeCopy: z.boolean().optional(),
  enableCodeFullscreen: z.boolean().optional(),
  enableLinkEmbed: z.boolean().optional(),
  enableTweetEmbed: z.boolean().optional(),
  enableOGPreview: z.boolean().optional(),
  enableCodePenEmbed: z.boolean().optional(),
  previewCacheTime: z.number().optional(),
  lazyLoadEmbeds: z.boolean().optional(),
  postCardImagePosition: z.enum(['alternating', 'left', 'right']).optional(),
  enableShokaContainers: z.boolean().optional(),
  enableShokaAttrs: z.boolean().optional(),
  enableShokaEffects: z.boolean().optional(),
  enableShokaSpoiler: z.boolean().optional(),
  enableShokaRuby: z.boolean().optional(),
  enableShokaHexoTags: z.boolean().optional(),
  enableMath: z.boolean().optional(),
  enableCodeMeta: z.boolean().optional(),
  enableQuiz: z.boolean().optional(),
  enableEncryptedBlock: z.boolean().optional(),
});

// ---- Featured ----

const featuredCategorySchema = z.object({
  link: z.string(),
  image: z.string(),
  label: z.string().optional(),
  description: z.string().optional(),
});

const featuredSeriesItemSchema = z.object({
  slug: z.string().optional(),
  categoryName: z.string(),
  label: z.string().optional(),
  enabled: z.boolean().optional(),
  fullName: z.string().optional(),
  description: z.string().optional(),
  cover: z.string().optional(),
  icon: z.string().optional(),
  highlightOnHome: z.boolean().optional(),
  links: z
    .object({
      github: z.string().optional(),
      rss: z.string().optional(),
      chrome: z.string().optional(),
      docs: z.string().optional(),
    })
    .optional(),
});

// ---- Comment ----

const commentSchema = z.object({
  provider: z.enum(['remark42', 'giscus', 'waline', 'twikoo', 'none']).optional(),
  remark42: z
    .object({
      host: z.string(),
      siteId: z.string(),
    })
    .optional(),
  giscus: z
    .object({
      repo: z.string(),
      repoId: z.string(),
      category: z.string().optional(),
      categoryId: z.string().optional(),
      mapping: z.string().optional(),
      reactionsEnabled: z.string().optional(),
      emitMetadata: z.string().optional(),
      inputPosition: z.string().optional(),
      lang: z.string().optional(),
      host: z.string().optional(),
      theme: z.string().optional(),
      loading: z.string().optional(),
    })
    .optional(),
  waline: z
    .object({
      serverURL: z.string(),
      lang: z.string().optional(),
      dark: z.union([z.string(), z.boolean()]).optional(),
      meta: z.array(z.string()).optional(),
      requiredMeta: z.array(z.string()).optional(),
      login: z.string().optional(),
      wordLimit: z.union([z.number(), z.tuple([z.number(), z.number()])]).optional(),
      pageSize: z.number().optional(),
      imageUploader: z.boolean().optional(),
      highlighter: z.boolean().optional(),
      texRenderer: z.boolean().optional(),
      search: z.boolean().optional(),
      reaction: z.union([z.boolean(), z.array(z.string())]).optional(),
      recaptchaV3Key: z.string().optional(),
      turnstileKey: z.string().optional(),
      emoji: z.union([z.boolean(), z.array(z.any())]).optional(),
      commentSorting: z.string().optional(),
      noCopyright: z.boolean().optional(),
      comment: z.union([z.string(), z.boolean()]).optional(),
      pageview: z.union([z.string(), z.boolean()]).optional(),
      locale: z.record(z.string()).optional(),
    })
    .optional(),
  twikoo: z
    .object({
      envId: z.string(),
      region: z.string().optional(),
      path: z.string().optional(),
      lang: z.string().optional(),
    })
    .optional(),
});

// ---- Analytics ----

const analyticsSchema = z.object({
  umami: z
    .object({
      enabled: z.boolean(),
      id: z.string().optional(),
      endpoint: z.string().optional(),
      statistics_display: z
        .object({
          token: z.string(),
          article_page_views: z.boolean().optional(),
          footer_site_stats: z.boolean().optional(),
        })
        .optional(),
    })
    .optional(),
});

// ---- Navigation ----

const routerItemSchema: z.ZodType<unknown> = z.lazy(() =>
  z.object({
    name: z.string().optional(),
    nameKey: z.string().optional(),
    path: z.string().optional(),
    icon: z.string().optional(),
    children: z.array(routerItemSchema).optional(),
  }),
);

// ---- Friends ----

const friendLinkSchema = z.object({
  site: z.string(),
  url: z.string(),
  owner: z.string(),
  desc: z.string(),
  image: z.string(),
  color: z.string().optional(),
});

const friendsSchema = z.object({
  intro: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    applyTitle: z.string().optional(),
    applyDesc: z.string().optional(),
    exampleYaml: z.string().optional(),
  }),
  data: z.array(friendLinkSchema),
});

// ---- Christmas ----

const christmasSchema = z.object({
  enabled: z.boolean(),
  features: z
    .object({
      snowfall: z.boolean().optional(),
      christmasColorScheme: z.boolean().optional(),
      christmasCoverDecoration: z.boolean().optional(),
      christmasHat: z.boolean().optional(),
      readingTimeSnow: z.boolean().optional(),
    })
    .optional(),
  snowfall: z
    .object({
      speed: z.number().optional(),
      intensity: z.number().optional(),
      mobileIntensity: z.number().optional(),
      maxLayers: z.number().optional(),
      maxIterations: z.number().optional(),
      mobileMaxLayers: z.number().optional(),
      mobileMaxIterations: z.number().optional(),
    })
    .optional(),
});

// ---- Announcements ----

const announcementSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  type: z.enum(['info', 'warning', 'success', 'error']).optional(),
  priority: z.number().optional(),
  color: z.string().optional(),
  publishDate: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  link: z
    .object({
      url: z.string(),
      text: z.string().optional(),
      external: z.boolean().optional(),
    })
    .optional(),
});

// ---- BGM ----

const bgmSchema = z.object({
  enabled: z.boolean().optional(),
  metingApi: z.string().optional(),
  audio: z
    .array(
      z.object({
        title: z.string().optional(),
        list: z.array(z.string()),
      }),
    )
    .optional(),
});

// ---- Bangumi ----

const bangumiSchema = z.object({
  userId: z.string(),
  label: z.string().optional(),
  icon: z.string().optional(),
});

// ---- SEO ----

const seoSchema = z.object({
  robots: z
    .object({
      policy: z
        .array(
          z.object({
            userAgent: z.string(),
            allow: z.union([z.string(), z.array(z.string())]).optional(),
            disallow: z.union([z.string(), z.array(z.string())]).optional(),
          }),
        )
        .optional(),
      host: z.boolean().optional(),
    })
    .nullable()
    .optional(),
});

// ---- Dev ----

const devSchema = z.object({
  localProjectPath: z.string().optional(),
  contentRelativePath: z.string().optional(),
  editors: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        icon: z.string(),
        urlTemplate: z.string(),
      }),
    )
    .optional(),
});

// ---- i18n ----

const i18nSchema = z.object({
  defaultLocale: z.string(),
  locales: z.array(
    z.object({
      code: z.string(),
      label: z.string().optional(),
      enabled: z.boolean().optional(),
    }),
  ),
});

// ---- Category Map ----

const categoryMapSchema = z.record(z.string()).optional();

// ---- Full Root Schema ----

export const siteYamlSchema = z.object({
  site: siteBasicSchema,
  categoryMap: categoryMapSchema,
  featuredCategories: z.array(featuredCategorySchema).optional(),
  featuredSeries: z.union([z.array(featuredSeriesItemSchema), featuredSeriesItemSchema]).optional(),
  social: z.record(socialPlatformSchema).optional(),
  friends: friendsSchema.optional(),
  announcements: z.array(announcementSchema).nullable().optional(),
  defaultCoverList: z.array(z.string()).optional(),
  content: contentSchema.optional(),
  navigation: z.array(routerItemSchema).optional(),
  comment: commentSchema.optional(),
  analytics: analyticsSchema.optional(),
  seo: seoSchema.nullable().optional(),
  bgm: bgmSchema.optional(),
  bangumi: bangumiSchema.optional(),
  christmas: christmasSchema.optional(),
  dev: devSchema.optional(),
  i18n: i18nSchema.optional(),
});

export type ValidatedSiteYaml = z.infer<typeof siteYamlSchema>;
