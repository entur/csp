export enum PolicyValue {
    SELF = "'self'",
    BLOB = 'blob:',
    DATA = 'data:',
    NONE = "'none'",
    UNSAFE_INLINE = "'unsafe-inline'",
    UNSAFE_EVAL = "'unsafe-eval'",
}

export enum Directive {
    CHILD_SRC = 'child-src',
    CONNECT_SRC = 'connect-src',
    DEFAULT_SRC = 'default-src',
    FONT_SRC = 'font-src',
    FRAME_SRC = 'frame-src',
    IMG_SRC = 'img-src',
    MANIFEST_SRC = 'manifest-src',
    MEDIA_SRC = 'media-src',
    OBJECT_SRC = 'object-src',
    PREFETCH_SRC = 'prefetch-src',
    SCRIPT_SRC = 'script-src',
    SCRIPT_SRC_ELEM = 'script-src-elem',
    SCRIPT_SRC_ATTR = 'script-src-attr',
    STYLE_SRC = 'style-src',
    STYLE_SRC_ELEM = 'style-src-elem',
    STYLE_SRC_ATTR = 'style-src-attr',
    WORKER_SRC = 'worker-src',
    BASE_URI = 'base-uri',
    PLUGIN_TYPES = 'plugin-types',
    SANDBOX = 'sandbox',
    FORM_ACTION = 'form-action',
    FRAME_ANCESTORS = 'frame-ancestors',
    NAVIGATE_TO = 'navigate-to',
    REPORT_URI = 'report-uri',
    REPORT_TO = 'report-to',
    BLOCK_ALL_MIXED_CONTENT = 'block-all-mixed-content',
    REFERRER = 'referrer',
    REQUIRE_SRI_FOR = 'require-sri-for',
    REQUIRE_TRUSTED_TYPES_FOR = 'require-trusted-types-for',
    TRUSTED_TYPES = 'trusted-types',
    UPGRADE_INSECURE_REQUESTS = 'upgrade-insecure-requests',
}

export type ContentSecurityPolicy = Record<Directive, Array<PolicyValue | string>>

export function stringifyCSP(csp: ContentSecurityPolicy): string {
    return Object.entries(csp)
        .map(([directive, values]) => `${[directive, ...values].join(' ')}`)
        .join('; ')
        .trim()
}
