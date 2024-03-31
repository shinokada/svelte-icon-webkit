import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: "md" | "xl" | "xs" | "sm" | "lg" | undefined;
        role?: string | undefined;
        class?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ClipboardListOutlineProps = typeof __propDef.props;
export type ClipboardListOutlineEvents = typeof __propDef.events;
export type ClipboardListOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: size?:  "xs" | "sm" | "md" | "lg" | "xl"; = ctx.size || 'md', role, class: classname, ariaLabel;
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class ClipboardListOutline extends SvelteComponent<ClipboardListOutlineProps, ClipboardListOutlineEvents, ClipboardListOutlineSlots> {
}
export {};
