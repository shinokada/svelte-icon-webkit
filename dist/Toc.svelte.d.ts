import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        headingSelector: string;
    } & {
        extract?: ((x: HTMLElement) => {
            name: string;
            href?: string | undefined;
            rel?: string | undefined;
            active?: boolean | undefined;
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TocProps = typeof __propDef.props;
export type TocEvents = typeof __propDef.events;
export type TocSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class Toc extends SvelteComponent<TocProps, TocEvents, TocSlots> {
    get extract(): (x: HTMLElement) => {
        name: string;
        href?: string | undefined;
        rel?: string | undefined;
        active?: boolean | undefined;
    };
}
export {};