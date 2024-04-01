import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: "md" | "lg" | "xl" | "xs" | "sm" | undefined;
        role?: string | undefined;
        class?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ExpandOutlineProps = typeof __propDef.props;
export type ExpandOutlineEvents = typeof __propDef.events;
export type ExpandOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: size?:  "xs" | "sm" | "md" | "lg" | "xl"; = ctx.size || 'md', role, class: classname, ariaLabel;
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class ExpandOutline extends SvelteComponent<ExpandOutlineProps, ExpandOutlineEvents, ExpandOutlineSlots> {
}
export {};
