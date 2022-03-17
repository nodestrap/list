import { default as React } from 'react';
import type { SingleOrArray } from '@cssfn/types';
import { SelectorCollection } from '@cssfn/cssfn';
import { OrientationName, OrientationRuleOptions, OrientationVariant, ThemeName } from '@nodestrap/basic';
import { IndicatorProps } from '@nodestrap/indicator';
import { SemanticButtonProps } from '@nodestrap/button';
export declare const defaultOrientationRuleOptions: OrientationRuleOptions;
export declare const markActive: () => import("@cssfn/cssfn").Rule;
export declare const dontMarkActive: () => import("@cssfn/cssfn").Rule;
export declare const usesThemeDefault: (themeName?: ThemeName | null) => import("@cssfn/cssfn").Rule;
export declare const usesThemeActive: (themeName?: ThemeName | null) => import("@cssfn/cssfn").Rule;
export declare type ListBasicStyle = 'flat' | 'flush' | 'joined';
export declare type ListStyle = ListBasicStyle | 'content' | 'btn' | 'tab' | 'breadcrumb' | 'bullet' | 'numbered';
export interface ListVariant {
    listStyle?: SingleOrArray<ListStyle>;
}
export declare const useListVariant: (props: ListVariant) => {
    class: string | null;
};
export declare const wrapperElm = "*";
export declare const listItemElm = ":where(:first-child)";
export declare const stripoutCommonBasicLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesListItemInheritMildVariant: () => import("@cssfn/cssfn").Rule;
export declare const usesListItemBaseLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").Rule;
export declare const usesListItemLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").Rule;
export declare const usesListItemVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesListItemStates: () => import("@cssfn/cssfn").Rule;
export declare const useListItemSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const usesListSeparatorItemLayout: () => import("@cssfn/cssfn").Rule;
export declare const useListSeparatorItemSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const usesListActionItemLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesListActionItemVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesListActionItemStates: () => import("@cssfn/cssfn").Rule;
export declare const useListActionItemSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const usesListLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").Rule;
export interface ListBasicVariantOptions {
    additionRemoveBorderSelector?: SelectorCollection;
    additionRemoveSeparatorSelector?: SelectorCollection;
    specificityWeight?: number;
}
export declare const usesListBasicVariants: (options?: ListBasicVariantOptions | undefined) => import("@cssfn/cssfn").Rule;
export declare const usesListVariants: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").Rule;
export declare const usesListStates: () => import("@cssfn/cssfn").Rule;
export declare const useListSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    btnSpacing: import("@cssfn/css-types").Cust.Ref;
    btnSpacingSm: import("@cssfn/css-types").Cust.Ref;
    btnSpacingLg: import("@cssfn/css-types").Cust.Ref;
    tabTextAlign: string;
    tabBorderRadius: import("@cssfn/css-types").Cust.Ref;
    tabBorderRadiusSm: import("@cssfn/css-types").Cust.Ref;
    tabBorderRadiusLg: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingInline: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingBlock: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingInlineSm: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingBlockSm: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingInlineLg: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingBlockLg: import("@cssfn/css-types").Cust.Ref;
    breadcrumbSeparatorImg: string;
    breadcrumbSeparatorInlineSize: string;
    breadcrumbSeparatorMarginInline: string;
    bulletSpacing: import("@cssfn/css-types").Cust.Ref;
    bulletSpacingSm: import("@cssfn/css-types").Cust.Ref;
    bulletSpacingLg: import("@cssfn/css-types").Cust.Ref;
    bulletPadding: import("@cssfn/css-types").Cust.Ref;
    bulletPaddingSm: import("@cssfn/css-types").Cust.Ref;
    bulletPaddingLg: import("@cssfn/css-types").Cust.Ref;
    numberedContent: string[][];
}>, cssDecls: import("@cssfn/css-config").Decls<{
    btnSpacing: import("@cssfn/css-types").Cust.Ref;
    btnSpacingSm: import("@cssfn/css-types").Cust.Ref;
    btnSpacingLg: import("@cssfn/css-types").Cust.Ref;
    tabTextAlign: string;
    tabBorderRadius: import("@cssfn/css-types").Cust.Ref;
    tabBorderRadiusSm: import("@cssfn/css-types").Cust.Ref;
    tabBorderRadiusLg: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingInline: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingBlock: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingInlineSm: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingBlockSm: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingInlineLg: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingBlockLg: import("@cssfn/css-types").Cust.Ref;
    breadcrumbSeparatorImg: string;
    breadcrumbSeparatorInlineSize: string;
    breadcrumbSeparatorMarginInline: string;
    bulletSpacing: import("@cssfn/css-types").Cust.Ref;
    bulletSpacingSm: import("@cssfn/css-types").Cust.Ref;
    bulletSpacingLg: import("@cssfn/css-types").Cust.Ref;
    bulletPadding: import("@cssfn/css-types").Cust.Ref;
    bulletPaddingSm: import("@cssfn/css-types").Cust.Ref;
    bulletPaddingLg: import("@cssfn/css-types").Cust.Ref;
    numberedContent: string[][];
}>, cssVals: import("@cssfn/css-config").Vals<{
    btnSpacing: import("@cssfn/css-types").Cust.Ref;
    btnSpacingSm: import("@cssfn/css-types").Cust.Ref;
    btnSpacingLg: import("@cssfn/css-types").Cust.Ref;
    tabTextAlign: string;
    tabBorderRadius: import("@cssfn/css-types").Cust.Ref;
    tabBorderRadiusSm: import("@cssfn/css-types").Cust.Ref;
    tabBorderRadiusLg: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingInline: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingBlock: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingInlineSm: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingBlockSm: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingInlineLg: import("@cssfn/css-types").Cust.Ref;
    breadcrumbPaddingBlockLg: import("@cssfn/css-types").Cust.Ref;
    breadcrumbSeparatorImg: string;
    breadcrumbSeparatorInlineSize: string;
    breadcrumbSeparatorMarginInline: string;
    bulletSpacing: import("@cssfn/css-types").Cust.Ref;
    bulletSpacingSm: import("@cssfn/css-types").Cust.Ref;
    bulletSpacingLg: import("@cssfn/css-types").Cust.Ref;
    bulletPadding: import("@cssfn/css-types").Cust.Ref;
    bulletPaddingSm: import("@cssfn/css-types").Cust.Ref;
    bulletPaddingLg: import("@cssfn/css-types").Cust.Ref;
    numberedContent: string[][];
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface ListItemProps<TElement extends HTMLElement = HTMLElement> extends SemanticButtonProps<TElement> {
    /**
     * `undefined` : same as `true`.
     * `true`      : inherits `active` from `List`.
     * `false`     : independent `active`.
     */
    inheritActive?: boolean;
    actionCtrl?: boolean;
    children?: React.ReactNode;
}
export declare function ListItem<TElement extends HTMLElement = HTMLElement>(props: ListItemProps<TElement>): JSX.Element;
export type { ListItemProps as ItemProps };
export { ListItem as Item };
export declare function ListSeparatorItem<TElement extends HTMLElement = HTMLElement>(props: ListItemProps<TElement>): JSX.Element;
export declare namespace ListSeparatorItem {
    var prototype: any;
}
export interface ListProps<TElement extends HTMLElement = HTMLElement> extends IndicatorProps<TElement>, OrientationVariant, ListVariant {
    actionCtrl?: boolean;
}
export declare function List<TElement extends HTMLElement = HTMLElement>(props: ListProps<TElement>): JSX.Element;
export { List as default };
export type { OrientationName, OrientationVariant };
