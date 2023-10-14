/**
 * Helper functions
 */
import { marked } from 'marked';
import * as DOMPurify from 'dompurify';

/**
 * Sanitize html string with DOMPurify.js package.
 *
 * @param text string to Sanitize
 *
 * @return string Return Sanitized Html string.
 */
export const sanitize_md = (text) => {
    return DOMPurify.default.sanitize(
        text, {USE_PROFILES: {html: true}, ADD_ATTR: ['target'] }
    )
}

/**
 * Parse Markdown to Html with marked.js package
 * @param text string Markdown value to parse
 *
 * @return string Return parsed html string.
 */
export const parse_markdown = (text) => {
    const link_extension = {
        name: 'link',
        renderer(token) {
            return `<a target="_blank" href="${token.href}">${token.text}</a>`;
        }
    }

    marked.use({
        gfm: true,
        breaks: true,
        extensions: [
            link_extension
        ]
    });
    const result = marked.parse(text)
    return sanitize_md(result)
}