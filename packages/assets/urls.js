// This file is automatically generated by scripts/refresh-assets.ts.
// Do not edit manually.

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./modules.d.ts" />

/** @typedef {string | { src: string }} AssetUrl */
/** @typedef {{ baseUrl?: string } | ((assetUrl: string) => string)} AssetUrlOptions */

/**
 * @param {AssetUrl} assetUrl
 * @param {AssetUrlOptions} [format]
 * @returns {string}
 */
function formatAssetUrl(assetUrl, format = {}) {
	const assetUrlString = typeof assetUrl === 'string' ? assetUrl : assetUrl.src

	if (typeof format === 'function') return format(assetUrlString)

	const { baseUrl = '' } = format

	if (assetUrlString.startsWith('data:')) return assetUrlString
	if (assetUrlString.match(/^https?:\/\//)) return assetUrlString

	return `${baseUrl.replace(/\/$/, '')}/${assetUrlString.replace(/^\.?\//, '')}`
}

/**
 * @param {AssetUrlOptions} [opts]
 * @public
 */
export function getAssetUrlsByMetaUrl(opts) {
	return {
		fonts: {
			monospace: formatAssetUrl(
				new URL('./fonts/IBMPlexMono-Medium.woff2', import.meta.url).href,
				opts
			),
			sansSerif: formatAssetUrl(
				new URL('./fonts/IBMPlexSans-Medium.woff2', import.meta.url).href,
				opts
			),
			serif: formatAssetUrl(
				new URL('./fonts/IBMPlexSerif-Medium.woff2', import.meta.url).href,
				opts
			),
			draw: formatAssetUrl(
				new URL('./fonts/Shantell_Sans-Normal-SemiBold.woff2', import.meta.url).href,
				opts
			),
		},
		icons: {
			'align-bottom-center': formatAssetUrl(
				new URL('./icons/icon/align-bottom-center.svg', import.meta.url).href,
				opts
			),
			'align-bottom-left': formatAssetUrl(
				new URL('./icons/icon/align-bottom-left.svg', import.meta.url).href,
				opts
			),
			'align-bottom-right': formatAssetUrl(
				new URL('./icons/icon/align-bottom-right.svg', import.meta.url).href,
				opts
			),
			'align-bottom': formatAssetUrl(
				new URL('./icons/icon/align-bottom.svg', import.meta.url).href,
				opts
			),
			'align-center-center': formatAssetUrl(
				new URL('./icons/icon/align-center-center.svg', import.meta.url).href,
				opts
			),
			'align-center-horizontal': formatAssetUrl(
				new URL('./icons/icon/align-center-horizontal.svg', import.meta.url).href,
				opts
			),
			'align-center-left': formatAssetUrl(
				new URL('./icons/icon/align-center-left.svg', import.meta.url).href,
				opts
			),
			'align-center-right': formatAssetUrl(
				new URL('./icons/icon/align-center-right.svg', import.meta.url).href,
				opts
			),
			'align-center-vertical': formatAssetUrl(
				new URL('./icons/icon/align-center-vertical.svg', import.meta.url).href,
				opts
			),
			'align-left': formatAssetUrl(
				new URL('./icons/icon/align-left.svg', import.meta.url).href,
				opts
			),
			'align-right': formatAssetUrl(
				new URL('./icons/icon/align-right.svg', import.meta.url).href,
				opts
			),
			'align-top-center': formatAssetUrl(
				new URL('./icons/icon/align-top-center.svg', import.meta.url).href,
				opts
			),
			'align-top-left': formatAssetUrl(
				new URL('./icons/icon/align-top-left.svg', import.meta.url).href,
				opts
			),
			'align-top-right': formatAssetUrl(
				new URL('./icons/icon/align-top-right.svg', import.meta.url).href,
				opts
			),
			'align-top': formatAssetUrl(
				new URL('./icons/icon/align-top.svg', import.meta.url).href,
				opts
			),
			'arrow-left': formatAssetUrl(
				new URL('./icons/icon/arrow-left.svg', import.meta.url).href,
				opts
			),
			'arrowhead-arrow': formatAssetUrl(
				new URL('./icons/icon/arrowhead-arrow.svg', import.meta.url).href,
				opts
			),
			'arrowhead-bar': formatAssetUrl(
				new URL('./icons/icon/arrowhead-bar.svg', import.meta.url).href,
				opts
			),
			'arrowhead-diamond': formatAssetUrl(
				new URL('./icons/icon/arrowhead-diamond.svg', import.meta.url).href,
				opts
			),
			'arrowhead-dot': formatAssetUrl(
				new URL('./icons/icon/arrowhead-dot.svg', import.meta.url).href,
				opts
			),
			'arrowhead-none': formatAssetUrl(
				new URL('./icons/icon/arrowhead-none.svg', import.meta.url).href,
				opts
			),
			'arrowhead-square': formatAssetUrl(
				new URL('./icons/icon/arrowhead-square.svg', import.meta.url).href,
				opts
			),
			'arrowhead-triangle-inverted': formatAssetUrl(
				new URL('./icons/icon/arrowhead-triangle-inverted.svg', import.meta.url).href,
				opts
			),
			'arrowhead-triangle': formatAssetUrl(
				new URL('./icons/icon/arrowhead-triangle.svg', import.meta.url).href,
				opts
			),
			'aspect-ratio': formatAssetUrl(
				new URL('./icons/icon/aspect-ratio.svg', import.meta.url).href,
				opts
			),
			avatar: formatAssetUrl(new URL('./icons/icon/avatar.svg', import.meta.url).href, opts),
			blob: formatAssetUrl(new URL('./icons/icon/blob.svg', import.meta.url).href, opts),
			'bring-forward': formatAssetUrl(
				new URL('./icons/icon/bring-forward.svg', import.meta.url).href,
				opts
			),
			'bring-to-front': formatAssetUrl(
				new URL('./icons/icon/bring-to-front.svg', import.meta.url).href,
				opts
			),
			check: formatAssetUrl(new URL('./icons/icon/check.svg', import.meta.url).href, opts),
			'checkbox-checked': formatAssetUrl(
				new URL('./icons/icon/checkbox-checked.svg', import.meta.url).href,
				opts
			),
			'checkbox-empty': formatAssetUrl(
				new URL('./icons/icon/checkbox-empty.svg', import.meta.url).href,
				opts
			),
			'chevron-down': formatAssetUrl(
				new URL('./icons/icon/chevron-down.svg', import.meta.url).href,
				opts
			),
			'chevron-left': formatAssetUrl(
				new URL('./icons/icon/chevron-left.svg', import.meta.url).href,
				opts
			),
			'chevron-right': formatAssetUrl(
				new URL('./icons/icon/chevron-right.svg', import.meta.url).href,
				opts
			),
			'chevron-up': formatAssetUrl(
				new URL('./icons/icon/chevron-up.svg', import.meta.url).href,
				opts
			),
			'chevrons-ne': formatAssetUrl(
				new URL('./icons/icon/chevrons-ne.svg', import.meta.url).href,
				opts
			),
			'chevrons-sw': formatAssetUrl(
				new URL('./icons/icon/chevrons-sw.svg', import.meta.url).href,
				opts
			),
			'clipboard-copied': formatAssetUrl(
				new URL('./icons/icon/clipboard-copied.svg', import.meta.url).href,
				opts
			),
			'clipboard-copy': formatAssetUrl(
				new URL('./icons/icon/clipboard-copy.svg', import.meta.url).href,
				opts
			),
			code: formatAssetUrl(new URL('./icons/icon/code.svg', import.meta.url).href, opts),
			collab: formatAssetUrl(new URL('./icons/icon/collab.svg', import.meta.url).href, opts),
			color: formatAssetUrl(new URL('./icons/icon/color.svg', import.meta.url).href, opts),
			comment: formatAssetUrl(new URL('./icons/icon/comment.svg', import.meta.url).href, opts),
			'cross-2': formatAssetUrl(new URL('./icons/icon/cross-2.svg', import.meta.url).href, opts),
			cross: formatAssetUrl(new URL('./icons/icon/cross.svg', import.meta.url).href, opts),
			'dash-dashed': formatAssetUrl(
				new URL('./icons/icon/dash-dashed.svg', import.meta.url).href,
				opts
			),
			'dash-dotted': formatAssetUrl(
				new URL('./icons/icon/dash-dotted.svg', import.meta.url).href,
				opts
			),
			'dash-draw': formatAssetUrl(
				new URL('./icons/icon/dash-draw.svg', import.meta.url).href,
				opts
			),
			'dash-solid': formatAssetUrl(
				new URL('./icons/icon/dash-solid.svg', import.meta.url).href,
				opts
			),
			discord: formatAssetUrl(new URL('./icons/icon/discord.svg', import.meta.url).href, opts),
			'distribute-horizontal': formatAssetUrl(
				new URL('./icons/icon/distribute-horizontal.svg', import.meta.url).href,
				opts
			),
			'distribute-vertical': formatAssetUrl(
				new URL('./icons/icon/distribute-vertical.svg', import.meta.url).href,
				opts
			),
			dot: formatAssetUrl(new URL('./icons/icon/dot.svg', import.meta.url).href, opts),
			'dots-horizontal': formatAssetUrl(
				new URL('./icons/icon/dots-horizontal.svg', import.meta.url).href,
				opts
			),
			'dots-vertical': formatAssetUrl(
				new URL('./icons/icon/dots-vertical.svg', import.meta.url).href,
				opts
			),
			'drag-handle-dots': formatAssetUrl(
				new URL('./icons/icon/drag-handle-dots.svg', import.meta.url).href,
				opts
			),
			duplicate: formatAssetUrl(new URL('./icons/icon/duplicate.svg', import.meta.url).href, opts),
			edit: formatAssetUrl(new URL('./icons/icon/edit.svg', import.meta.url).href, opts),
			'external-link': formatAssetUrl(
				new URL('./icons/icon/external-link.svg', import.meta.url).href,
				opts
			),
			file: formatAssetUrl(new URL('./icons/icon/file.svg', import.meta.url).href, opts),
			'fill-none': formatAssetUrl(
				new URL('./icons/icon/fill-none.svg', import.meta.url).href,
				opts
			),
			'fill-pattern': formatAssetUrl(
				new URL('./icons/icon/fill-pattern.svg', import.meta.url).href,
				opts
			),
			'fill-semi': formatAssetUrl(
				new URL('./icons/icon/fill-semi.svg', import.meta.url).href,
				opts
			),
			'fill-solid': formatAssetUrl(
				new URL('./icons/icon/fill-solid.svg', import.meta.url).href,
				opts
			),
			follow: formatAssetUrl(new URL('./icons/icon/follow.svg', import.meta.url).href, opts),
			following: formatAssetUrl(new URL('./icons/icon/following.svg', import.meta.url).href, opts),
			'font-draw': formatAssetUrl(
				new URL('./icons/icon/font-draw.svg', import.meta.url).href,
				opts
			),
			'font-mono': formatAssetUrl(
				new URL('./icons/icon/font-mono.svg', import.meta.url).href,
				opts
			),
			'font-sans': formatAssetUrl(
				new URL('./icons/icon/font-sans.svg', import.meta.url).href,
				opts
			),
			'font-serif': formatAssetUrl(
				new URL('./icons/icon/font-serif.svg', import.meta.url).href,
				opts
			),
			'geo-arrow-down': formatAssetUrl(
				new URL('./icons/icon/geo-arrow-down.svg', import.meta.url).href,
				opts
			),
			'geo-arrow-left': formatAssetUrl(
				new URL('./icons/icon/geo-arrow-left.svg', import.meta.url).href,
				opts
			),
			'geo-arrow-right': formatAssetUrl(
				new URL('./icons/icon/geo-arrow-right.svg', import.meta.url).href,
				opts
			),
			'geo-arrow-up': formatAssetUrl(
				new URL('./icons/icon/geo-arrow-up.svg', import.meta.url).href,
				opts
			),
			'geo-check-box': formatAssetUrl(
				new URL('./icons/icon/geo-check-box.svg', import.meta.url).href,
				opts
			),
			'geo-diamond': formatAssetUrl(
				new URL('./icons/icon/geo-diamond.svg', import.meta.url).href,
				opts
			),
			'geo-ellipse': formatAssetUrl(
				new URL('./icons/icon/geo-ellipse.svg', import.meta.url).href,
				opts
			),
			'geo-hexagon': formatAssetUrl(
				new URL('./icons/icon/geo-hexagon.svg', import.meta.url).href,
				opts
			),
			'geo-octagon': formatAssetUrl(
				new URL('./icons/icon/geo-octagon.svg', import.meta.url).href,
				opts
			),
			'geo-oval': formatAssetUrl(new URL('./icons/icon/geo-oval.svg', import.meta.url).href, opts),
			'geo-pentagon': formatAssetUrl(
				new URL('./icons/icon/geo-pentagon.svg', import.meta.url).href,
				opts
			),
			'geo-rectangle': formatAssetUrl(
				new URL('./icons/icon/geo-rectangle.svg', import.meta.url).href,
				opts
			),
			'geo-rhombus-2': formatAssetUrl(
				new URL('./icons/icon/geo-rhombus-2.svg', import.meta.url).href,
				opts
			),
			'geo-rhombus': formatAssetUrl(
				new URL('./icons/icon/geo-rhombus.svg', import.meta.url).href,
				opts
			),
			'geo-star': formatAssetUrl(new URL('./icons/icon/geo-star.svg', import.meta.url).href, opts),
			'geo-trapezoid': formatAssetUrl(
				new URL('./icons/icon/geo-trapezoid.svg', import.meta.url).href,
				opts
			),
			'geo-triangle': formatAssetUrl(
				new URL('./icons/icon/geo-triangle.svg', import.meta.url).href,
				opts
			),
			'geo-x-box': formatAssetUrl(
				new URL('./icons/icon/geo-x-box.svg', import.meta.url).href,
				opts
			),
			github: formatAssetUrl(new URL('./icons/icon/github.svg', import.meta.url).href, opts),
			group: formatAssetUrl(new URL('./icons/icon/group.svg', import.meta.url).href, opts),
			hidden: formatAssetUrl(new URL('./icons/icon/hidden.svg', import.meta.url).href, opts),
			image: formatAssetUrl(new URL('./icons/icon/image.svg', import.meta.url).href, opts),
			'info-circle': formatAssetUrl(
				new URL('./icons/icon/info-circle.svg', import.meta.url).href,
				opts
			),
			leading: formatAssetUrl(new URL('./icons/icon/leading.svg', import.meta.url).href, opts),
			link: formatAssetUrl(new URL('./icons/icon/link.svg', import.meta.url).href, opts),
			'lock-small': formatAssetUrl(
				new URL('./icons/icon/lock-small.svg', import.meta.url).href,
				opts
			),
			lock: formatAssetUrl(new URL('./icons/icon/lock.svg', import.meta.url).href, opts),
			menu: formatAssetUrl(new URL('./icons/icon/menu.svg', import.meta.url).href, opts),
			minus: formatAssetUrl(new URL('./icons/icon/minus.svg', import.meta.url).href, opts),
			mixed: formatAssetUrl(new URL('./icons/icon/mixed.svg', import.meta.url).href, opts),
			pack: formatAssetUrl(new URL('./icons/icon/pack.svg', import.meta.url).href, opts),
			page: formatAssetUrl(new URL('./icons/icon/page.svg', import.meta.url).href, opts),
			plus: formatAssetUrl(new URL('./icons/icon/plus.svg', import.meta.url).href, opts),
			'question-mark-circle': formatAssetUrl(
				new URL('./icons/icon/question-mark-circle.svg', import.meta.url).href,
				opts
			),
			'question-mark': formatAssetUrl(
				new URL('./icons/icon/question-mark.svg', import.meta.url).href,
				opts
			),
			redo: formatAssetUrl(new URL('./icons/icon/redo.svg', import.meta.url).href, opts),
			'reset-zoom': formatAssetUrl(
				new URL('./icons/icon/reset-zoom.svg', import.meta.url).href,
				opts
			),
			'rotate-ccw': formatAssetUrl(
				new URL('./icons/icon/rotate-ccw.svg', import.meta.url).href,
				opts
			),
			'rotate-cw': formatAssetUrl(
				new URL('./icons/icon/rotate-cw.svg', import.meta.url).href,
				opts
			),
			ruler: formatAssetUrl(new URL('./icons/icon/ruler.svg', import.meta.url).href, opts),
			search: formatAssetUrl(new URL('./icons/icon/search.svg', import.meta.url).href, opts),
			'send-backward': formatAssetUrl(
				new URL('./icons/icon/send-backward.svg', import.meta.url).href,
				opts
			),
			'send-to-back': formatAssetUrl(
				new URL('./icons/icon/send-to-back.svg', import.meta.url).href,
				opts
			),
			'settings-horizontal': formatAssetUrl(
				new URL('./icons/icon/settings-horizontal.svg', import.meta.url).href,
				opts
			),
			'settings-vertical-1': formatAssetUrl(
				new URL('./icons/icon/settings-vertical-1.svg', import.meta.url).href,
				opts
			),
			'settings-vertical': formatAssetUrl(
				new URL('./icons/icon/settings-vertical.svg', import.meta.url).href,
				opts
			),
			'share-1': formatAssetUrl(new URL('./icons/icon/share-1.svg', import.meta.url).href, opts),
			'share-2': formatAssetUrl(new URL('./icons/icon/share-2.svg', import.meta.url).href, opts),
			'size-extra-large': formatAssetUrl(
				new URL('./icons/icon/size-extra-large.svg', import.meta.url).href,
				opts
			),
			'size-large': formatAssetUrl(
				new URL('./icons/icon/size-large.svg', import.meta.url).href,
				opts
			),
			'size-medium': formatAssetUrl(
				new URL('./icons/icon/size-medium.svg', import.meta.url).href,
				opts
			),
			'size-small': formatAssetUrl(
				new URL('./icons/icon/size-small.svg', import.meta.url).href,
				opts
			),
			'spline-cubic': formatAssetUrl(
				new URL('./icons/icon/spline-cubic.svg', import.meta.url).href,
				opts
			),
			'spline-line': formatAssetUrl(
				new URL('./icons/icon/spline-line.svg', import.meta.url).href,
				opts
			),
			'stack-horizontal': formatAssetUrl(
				new URL('./icons/icon/stack-horizontal.svg', import.meta.url).href,
				opts
			),
			'stack-vertical': formatAssetUrl(
				new URL('./icons/icon/stack-vertical.svg', import.meta.url).href,
				opts
			),
			'stretch-horizontal': formatAssetUrl(
				new URL('./icons/icon/stretch-horizontal.svg', import.meta.url).href,
				opts
			),
			'stretch-vertical': formatAssetUrl(
				new URL('./icons/icon/stretch-vertical.svg', import.meta.url).href,
				opts
			),
			'text-align-center': formatAssetUrl(
				new URL('./icons/icon/text-align-center.svg', import.meta.url).href,
				opts
			),
			'text-align-justify': formatAssetUrl(
				new URL('./icons/icon/text-align-justify.svg', import.meta.url).href,
				opts
			),
			'text-align-left': formatAssetUrl(
				new URL('./icons/icon/text-align-left.svg', import.meta.url).href,
				opts
			),
			'text-align-right': formatAssetUrl(
				new URL('./icons/icon/text-align-right.svg', import.meta.url).href,
				opts
			),
			'tool-arrow': formatAssetUrl(
				new URL('./icons/icon/tool-arrow.svg', import.meta.url).href,
				opts
			),
			'tool-embed': formatAssetUrl(
				new URL('./icons/icon/tool-embed.svg', import.meta.url).href,
				opts
			),
			'tool-eraser': formatAssetUrl(
				new URL('./icons/icon/tool-eraser.svg', import.meta.url).href,
				opts
			),
			'tool-frame': formatAssetUrl(
				new URL('./icons/icon/tool-frame.svg', import.meta.url).href,
				opts
			),
			'tool-hand': formatAssetUrl(
				new URL('./icons/icon/tool-hand.svg', import.meta.url).href,
				opts
			),
			'tool-highlighter': formatAssetUrl(
				new URL('./icons/icon/tool-highlighter.svg', import.meta.url).href,
				opts
			),
			'tool-line': formatAssetUrl(
				new URL('./icons/icon/tool-line.svg', import.meta.url).href,
				opts
			),
			'tool-media': formatAssetUrl(
				new URL('./icons/icon/tool-media.svg', import.meta.url).href,
				opts
			),
			'tool-note': formatAssetUrl(
				new URL('./icons/icon/tool-note.svg', import.meta.url).href,
				opts
			),
			'tool-pencil': formatAssetUrl(
				new URL('./icons/icon/tool-pencil.svg', import.meta.url).href,
				opts
			),
			'tool-pointer': formatAssetUrl(
				new URL('./icons/icon/tool-pointer.svg', import.meta.url).href,
				opts
			),
			'tool-text': formatAssetUrl(
				new URL('./icons/icon/tool-text.svg', import.meta.url).href,
				opts
			),
			trash: formatAssetUrl(new URL('./icons/icon/trash.svg', import.meta.url).href, opts),
			'triangle-down': formatAssetUrl(
				new URL('./icons/icon/triangle-down.svg', import.meta.url).href,
				opts
			),
			'triangle-up': formatAssetUrl(
				new URL('./icons/icon/triangle-up.svg', import.meta.url).href,
				opts
			),
			twitter: formatAssetUrl(new URL('./icons/icon/twitter.svg', import.meta.url).href, opts),
			undo: formatAssetUrl(new URL('./icons/icon/undo.svg', import.meta.url).href, opts),
			ungroup: formatAssetUrl(new URL('./icons/icon/ungroup.svg', import.meta.url).href, opts),
			'unlock-small': formatAssetUrl(
				new URL('./icons/icon/unlock-small.svg', import.meta.url).href,
				opts
			),
			unlock: formatAssetUrl(new URL('./icons/icon/unlock.svg', import.meta.url).href, opts),
			visible: formatAssetUrl(new URL('./icons/icon/visible.svg', import.meta.url).href, opts),
			'warning-triangle': formatAssetUrl(
				new URL('./icons/icon/warning-triangle.svg', import.meta.url).href,
				opts
			),
			'zoom-in': formatAssetUrl(new URL('./icons/icon/zoom-in.svg', import.meta.url).href, opts),
			'zoom-out': formatAssetUrl(new URL('./icons/icon/zoom-out.svg', import.meta.url).href, opts),
		},
		translations: {
			ar: formatAssetUrl(new URL('./translations/ar.json', import.meta.url).href, opts),
			ca: formatAssetUrl(new URL('./translations/ca.json', import.meta.url).href, opts),
			da: formatAssetUrl(new URL('./translations/da.json', import.meta.url).href, opts),
			de: formatAssetUrl(new URL('./translations/de.json', import.meta.url).href, opts),
			en: formatAssetUrl(new URL('./translations/en.json', import.meta.url).href, opts),
			es: formatAssetUrl(new URL('./translations/es.json', import.meta.url).href, opts),
			fa: formatAssetUrl(new URL('./translations/fa.json', import.meta.url).href, opts),
			fi: formatAssetUrl(new URL('./translations/fi.json', import.meta.url).href, opts),
			fr: formatAssetUrl(new URL('./translations/fr.json', import.meta.url).href, opts),
			gl: formatAssetUrl(new URL('./translations/gl.json', import.meta.url).href, opts),
			he: formatAssetUrl(new URL('./translations/he.json', import.meta.url).href, opts),
			'hi-in': formatAssetUrl(new URL('./translations/hi-in.json', import.meta.url).href, opts),
			hu: formatAssetUrl(new URL('./translations/hu.json', import.meta.url).href, opts),
			it: formatAssetUrl(new URL('./translations/it.json', import.meta.url).href, opts),
			ja: formatAssetUrl(new URL('./translations/ja.json', import.meta.url).href, opts),
			'ko-kr': formatAssetUrl(new URL('./translations/ko-kr.json', import.meta.url).href, opts),
			ku: formatAssetUrl(new URL('./translations/ku.json', import.meta.url).href, opts),
			languages: formatAssetUrl(
				new URL('./translations/languages.json', import.meta.url).href,
				opts
			),
			main: formatAssetUrl(new URL('./translations/main.json', import.meta.url).href, opts),
			my: formatAssetUrl(new URL('./translations/my.json', import.meta.url).href, opts),
			ne: formatAssetUrl(new URL('./translations/ne.json', import.meta.url).href, opts),
			no: formatAssetUrl(new URL('./translations/no.json', import.meta.url).href, opts),
			pl: formatAssetUrl(new URL('./translations/pl.json', import.meta.url).href, opts),
			'pt-br': formatAssetUrl(new URL('./translations/pt-br.json', import.meta.url).href, opts),
			'pt-pt': formatAssetUrl(new URL('./translations/pt-pt.json', import.meta.url).href, opts),
			ro: formatAssetUrl(new URL('./translations/ro.json', import.meta.url).href, opts),
			ru: formatAssetUrl(new URL('./translations/ru.json', import.meta.url).href, opts),
			sv: formatAssetUrl(new URL('./translations/sv.json', import.meta.url).href, opts),
			te: formatAssetUrl(new URL('./translations/te.json', import.meta.url).href, opts),
			th: formatAssetUrl(new URL('./translations/th.json', import.meta.url).href, opts),
			tr: formatAssetUrl(new URL('./translations/tr.json', import.meta.url).href, opts),
			uk: formatAssetUrl(new URL('./translations/uk.json', import.meta.url).href, opts),
			vi: formatAssetUrl(new URL('./translations/vi.json', import.meta.url).href, opts),
			'zh-cn': formatAssetUrl(new URL('./translations/zh-cn.json', import.meta.url).href, opts),
			'zh-tw': formatAssetUrl(new URL('./translations/zh-tw.json', import.meta.url).href, opts),
		},
		embedIcons: {
			codepen: formatAssetUrl(new URL('./embed-icons/codepen.png', import.meta.url).href, opts),
			codesandbox: formatAssetUrl(
				new URL('./embed-icons/codesandbox.png', import.meta.url).href,
				opts
			),
			excalidraw: formatAssetUrl(
				new URL('./embed-icons/excalidraw.png', import.meta.url).href,
				opts
			),
			felt: formatAssetUrl(new URL('./embed-icons/felt.png', import.meta.url).href, opts),
			figma: formatAssetUrl(new URL('./embed-icons/figma.png', import.meta.url).href, opts),
			github_gist: formatAssetUrl(
				new URL('./embed-icons/github_gist.png', import.meta.url).href,
				opts
			),
			google_calendar: formatAssetUrl(
				new URL('./embed-icons/google_calendar.png', import.meta.url).href,
				opts
			),
			google_maps: formatAssetUrl(
				new URL('./embed-icons/google_maps.png', import.meta.url).href,
				opts
			),
			google_slides: formatAssetUrl(
				new URL('./embed-icons/google_slides.png', import.meta.url).href,
				opts
			),
			observable: formatAssetUrl(
				new URL('./embed-icons/observable.png', import.meta.url).href,
				opts
			),
			replit: formatAssetUrl(new URL('./embed-icons/replit.png', import.meta.url).href, opts),
			scratch: formatAssetUrl(new URL('./embed-icons/scratch.png', import.meta.url).href, opts),
			spotify: formatAssetUrl(new URL('./embed-icons/spotify.png', import.meta.url).href, opts),
			tldraw: formatAssetUrl(new URL('./embed-icons/tldraw.png', import.meta.url).href, opts),
			vimeo: formatAssetUrl(new URL('./embed-icons/vimeo.png', import.meta.url).href, opts),
			youtube: formatAssetUrl(new URL('./embed-icons/youtube.png', import.meta.url).href, opts),
		},
	}
}
