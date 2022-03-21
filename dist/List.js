// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
mainComposition, 
// styles:
style, imports, 
// rules:
rule, variants, states, 
//combinators:
children, 
// utilities:
escapeSvg, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import { borderRadiuses, } from '@nodestrap/borders'; // configurable borders & border radiuses defs
import spacers from '@nodestrap/spacers'; // configurable spaces defs
import { stripoutList, stripoutFocusableElement, } from '@nodestrap/stripouts';
import { 
// utilities:
isTypeOf, } from '@nodestrap/utilities';
// nodestrap components:
import { 
// hooks:
useTestSemantic, 
// react components:
Element, } from '@nodestrap/element';
import { 
// hooks:
usesSizeVariant, defaultBlockOrientationRuleOptions, normalizeOrientationRule, usesOrientationRule, useOrientationVariant, outlinedOf, mildOf, usesBorder, usesBorderStroke, expandBorderStroke, usesBorderRadius, expandBorderRadius, usesPadding, 
// configs:
cssProps as bcssProps, } from '@nodestrap/basic';
import { 
// hooks:
isActive, isPassive, 
// styles:
usesIndicatorLayout, usesIndicatorVariants, usesIndicatorStates, Indicator, } from '@nodestrap/indicator';
import { 
// hooks:
usesThemeDefault as controlUsesThemeDefault, usesThemeActive as controlUsesThemeActive, isFocus, isArrive, } from '@nodestrap/control';
import { 
// hooks:
isPress, 
// styles:
usesActionControlLayout, usesActionControlVariants, usesActionControlStates, 
// react components:
ActionControl, } from '@nodestrap/action-control';
import { 
// selectors:
selectorIsFirstVisibleChild, selectorIsLastVisibleChild, selectorNotfirstVisibleChild, 
// hooks:
usesBorderAsContainer, usesBorderAsSeparatorBlock, usesBorderAsSeparatorInline, } from '@nodestrap/container';
import { 
// styles:
usesContentBasicLayout, usesContentBasicVariants, usesContentChildren, } from '@nodestrap/content';
import { 
// hooks:
usesIconColor, 
// styles:
usesIconImage, } from '@nodestrap/icon';
import { 
// styles:
usesButtonLayout, useSemanticButton, } from '@nodestrap/button';
// hooks:
// layouts:
export const defaultOrientationRuleOptions = defaultBlockOrientationRuleOptions;
// states:
//#region activePassive
export const markActive = () => style({
    ...imports([
        outlinedOf(null),
        mildOf(null),
        usesThemeActive(), // switch to active theme
    ]),
});
export const dontMarkActive = () => style({
    ...imports([
        outlinedOf(null),
        mildOf(null),
        usesThemeActive(null), // keeps current theme
    ]),
});
// change default parameter from 'secondary' to `null`:
export const usesThemeDefault = (themeName = null) => controlUsesThemeDefault(themeName);
// change default parameter from 'primary' to 'secondary':
export const usesThemeActive = (themeName = 'secondary') => controlUsesThemeActive(themeName);
export const useListVariant = (props) => {
    return {
        class: props.listStyle ? ((Array.isArray(props.listStyle) ? props.listStyle : [props.listStyle]).filter((style) => !!style).join(' ') || null) : null,
    };
};
// styles:
// const wrapperElm  = ['li', '*'];                // inconsistent specificity
export const wrapperElm = '*'; // zero specificity
export const listItemElm = ':where(:first-child)'; // zero specificity
export const stripoutCommonBasicLayout = () => {
    // dependencies:
    // borders:
    const [, , borderStrokeDecls] = usesBorderStroke();
    const [, , borderRadiusDecls] = usesBorderRadius();
    return style({
        // borders:
        // undef border stroke:
        [borderStrokeDecls.border]: null,
        [borderStrokeDecls.borderWidth]: null,
        // undef border radius:
        [borderRadiusDecls.borderStartStartRadius]: null,
        [borderRadiusDecls.borderStartEndRadius]: null,
        [borderRadiusDecls.borderEndStartRadius]: null,
        [borderRadiusDecls.borderEndEndRadius]: null,
    });
};
export const usesListItemInheritMildVariant = () => {
    return style({
        ...variants([
            rule('.mild>*>&', {
                ...imports([
                    mildOf(true),
                ]),
            }),
        ]),
    });
};
export const usesListItemBaseLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(options);
    /*
        a hack with :not(_)
        the total selector combined with parent is something like this: `:not(.inline)>*>.listItem:not(_)`, the specificity weight = 2.1
        the specificity of 2.1 is a bit higher than:
        * `.list.content`             , the specificity weight = 2
        * `.someComponent.togglerBtn` , the specificity weight = 2
        but can be easily overriden by specificity weight >= 3, like:
        * `.list.btn.btn`             , the specificity weight = 3
        * `.someComponent.boo.foo`    , the specificity weight = 3
    */
    const parentOrientationBlockSelector = `${orientationBlockSelector}>*>&:not(_)`;
    const parentOrientationInlineSelector = `${orientationInlineSelector}>*>&:not(_)`;
    return style({
        // borders:
        /*
            Accordion supports: a separator between Accordion's header & body.
            Exploits the borders as a horizontal/vertical separator depending on the List's orientation.
        */
        ...rule(parentOrientationBlockSelector, {
            ...imports([
                usesBorderAsSeparatorBlock(), // must be placed at the last
            ]),
        }),
        ...rule(parentOrientationInlineSelector, {
            ...imports([
                usesBorderAsSeparatorInline(), // must be placed at the last
            ]),
        }),
    });
};
export const usesListItemLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    return style({
        ...imports([
            // layouts:
            usesIndicatorLayout(),
            // resets:
            stripoutCommonBasicLayout(),
            // layouts:
            usesListItemBaseLayout(options), // must be placed at the last
        ]),
        ...style({
            // layouts:
            display: 'block',
            // sizes:
            flex: [[1, 1, 'auto']],
            // customize:
            ...usesGeneralProps(usesPrefixedProps(cssProps, 'item')), // apply general cssProps starting with item***
        }),
    });
};
export const usesListItemVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = {item}PropName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(usesPrefixedProps(cssProps, 'item', false), sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesIndicatorVariants(),
            usesListItemInheritMildVariant(),
            // layouts:
            sizes(),
        ]),
    });
};
export const usesListItemStates = () => {
    return style({
        ...imports([
            // states:
            usesIndicatorStates(),
        ]),
    });
};
export const useListItemSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesListItemLayout(),
        // variants:
        usesListItemVariants(),
        // states:
        usesListItemStates(),
    ])),
], /*sheetId :*/ '2vajf0sgc2'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
export const usesListSeparatorItemLayout = () => {
    // options:
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(defaultOrientationRuleOptions);
    const parentOrientationBlockSelector = `${orientationBlockSelector}>*>&`;
    const parentOrientationInlineSelector = `${orientationInlineSelector}>*>&`;
    // dependencies:
    // colors:
    const [, borderRefs] = usesBorder();
    // spacings:
    const [, , paddingDecls] = usesPadding();
    return style({
        // layouts:
        display: 'flex',
        ...rule(parentOrientationBlockSelector, {
            flexDirection: 'row', // items are stacked horizontally
        }),
        ...rule(parentOrientationInlineSelector, {
            flexDirection: 'column', // items are stacked vertically
        }),
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        // spacings:
        [paddingDecls.paddingInline]: '0px',
        [paddingDecls.paddingBlock]: '0px',
        // children:
        ...children('hr', {
            // foregrounds:
            foreg: borderRefs.borderCol,
            // sizes:
            flex: [[1, 1, 'auto']],
            // appearances:
            opacity: 'unset',
            // spacings:
            margin: 0,
        }),
        ...rule(parentOrientationInlineSelector, {
            // children:
            ...children('hr', {
                // appearances:
                // rotate the <hr> 90 deg:
                writingMode: 'vertical-lr',
            }),
        }),
    });
};
export const useListSeparatorItemSheet = createUseSheet(() => [
    mainComposition(rule('&&', {
        ...imports([
            // layouts:
            usesListSeparatorItemLayout(),
        ]),
    })),
], /*sheetId :*/ 'n8qnfmo0ja'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
export const usesListActionItemLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesActionControlLayout(),
            // resets:
            stripoutCommonBasicLayout(),
            // colors:
            usesThemeDefault(),
        ]),
    });
};
export const usesListActionItemVariants = () => {
    return style({
        ...imports([
            // variants:
            usesActionControlVariants(),
            usesListItemInheritMildVariant(),
        ]),
    });
};
export const usesListActionItemStates = () => {
    return style({
        ...imports([
            // states:
            usesActionControlStates(),
        ]),
        ...states([
            isActive({
                ...imports([
                    markActive(),
                ]),
            }),
            isFocus({
                ...imports([
                    dontMarkActive(),
                ]),
            }),
            isArrive({
                ...imports([
                    dontMarkActive(),
                ]),
            }),
            isPress({
                ...imports([
                    dontMarkActive(),
                ]),
            }),
        ]),
    });
};
export const useListActionItemSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesListActionItemLayout(),
        // variants:
        usesListActionItemVariants(),
        // states:
        usesListActionItemStates(),
    ])),
], /*sheetId :*/ '1jdx2owh1e'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
export const usesListLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(options);
    // dependencies:
    // colors:
    const [border] = usesBorder();
    // borders:
    const [borderStroke] = usesBorderStroke();
    const [borderRadius, , borderRadiusDecls] = usesBorderRadius();
    return style({
        ...imports([
            // resets:
            stripoutFocusableElement(),
            stripoutList(),
            // colors:
            border(),
            // borders:
            // borderStroke(), // moved out to dedicated border stroke for each list & wrapper
            borderRadius(),
            usesBorderAsContainer(options), // make a nicely rounded corners
        ]),
        ...style({
            // layouts:
            ...rule(orientationBlockSelector, {
                display: 'flex',
                flexDirection: 'column', // items are stacked vertically
            }),
            ...rule(orientationInlineSelector, {
                display: 'inline-flex',
                flexDirection: 'row', // items are stacked horizontally
            }),
            justifyContent: 'start',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
            // sizes:
            minInlineSize: 0,
            // borders:
            ...children(['&', wrapperElm], {
                ...imports([
                    borderStroke(), // dedicated border stroke for each list & wrapper
                ]),
            }),
            /*
                A separator between ListItems.
                Exploits the borders as a horizontal/vertical separator depending on the List's orientation.
            */
            ...rule(orientationBlockSelector, {
                // children:
                ...children(wrapperElm, {
                    ...imports([
                        // borders:
                        usesBorderAsSeparatorBlock(), // must be placed at the last
                    ]),
                }),
            }),
            ...rule(orientationInlineSelector, {
                // children:
                ...children(wrapperElm, {
                    ...imports([
                        // borders:
                        usesBorderAsSeparatorInline(), // must be placed at the last
                    ]),
                }),
            }),
            // children:
            ...children(wrapperElm, {
                // layouts:
                display: 'flex',
                flexDirection: 'inherit',
                justifyContent: 'inherit',
                alignItems: 'inherit',
                flexWrap: 'inherit',
                // sizes:
                flex: [[1, 1, 'auto']], // growable, shrinkable, initial from it's height (for variant `.block`) or width (for variant `.inline`)
            }),
            ...rule(orientationBlockSelector, {
                // children:
                ...children(wrapperElm, {
                    // children:
                    /*
                        a hack with :not(_)
                        the total selector combined with parent is something like this: `.list:not(.inline)>*>:not(_):where(:first-child)`, the specificity weight = 2.1
                        the specificity of 2.1 is a bit higher than:
                        * `.list.content`             , the specificity weight = 2
                        * `.someComponent.togglerBtn` , the specificity weight = 2
                        but can be easily overriden by specificity weight >= 3, like:
                        * `.list.btn.btn`             , the specificity weight = 3
                        * `.someComponent.boo.foo`    , the specificity weight = 3
                    */
                    ...children(':not(_)', {
                        ...rule(selectorIsFirstVisibleChild, {
                            // borders:
                            // add rounded corners on top:
                            [borderRadiusDecls.borderStartStartRadius]: 'inherit',
                            [borderRadiusDecls.borderStartEndRadius]: 'inherit', // copy wrapper's borderRadius
                        }),
                        ...rule(selectorIsLastVisibleChild, {
                            // borders:
                            // add rounded corners on bottom:
                            [borderRadiusDecls.borderEndStartRadius]: 'inherit',
                            [borderRadiusDecls.borderEndEndRadius]: 'inherit', // copy wrapper's borderRadius
                        }),
                    }),
                }),
            }),
            ...rule(orientationInlineSelector, {
                // children:
                ...children(wrapperElm, {
                    // children:
                    /*
                        a hack with :not(_)
                        the total selector combined with parent is something like this: `.list:not(.inline)>*>:not(_):where(:first-child)`, the specificity weight = 2.1
                        the specificity of 2.1 is a bit higher than:
                        * `.list.content`             , the specificity weight = 2
                        * `.someComponent.togglerBtn` , the specificity weight = 2
                        but can be easily overriden by specificity weight >= 3, like:
                        * `.list.btn.btn`             , the specificity weight = 3
                        * `.someComponent.boo.foo`    , the specificity weight = 3
                    */
                    ...children(':not(_)', {
                        ...rule(selectorIsFirstVisibleChild, {
                            // borders:
                            // add rounded corners on left:
                            [borderRadiusDecls.borderStartStartRadius]: 'inherit',
                            [borderRadiusDecls.borderEndStartRadius]: 'inherit', // copy wrapper's borderRadius
                        }),
                        ...rule(selectorIsLastVisibleChild, {
                            // borders:
                            // add rounded corners on right:
                            [borderRadiusDecls.borderStartEndRadius]: 'inherit',
                            [borderRadiusDecls.borderEndEndRadius]: 'inherit', // copy wrapper's borderRadius
                        }),
                    }),
                }),
            }),
            // customize:
            ...usesGeneralProps(cssProps),
            // borders:
            ...children(['&', wrapperElm], {
                // borders:
                ...expandBorderStroke(), // expand borderStroke css vars
            }),
            ...expandBorderRadius(), // expand borderRadius css vars
        }),
    });
};
export const usesListBasicVariants = (options) => {
    // options:
    const { additionRemoveBorderSelector, additionRemoveSeparatorSelector, specificityWeight, } = options ?? {};
    // dependencies:
    // borders:
    const [, , borderStrokeDecls] = usesBorderStroke();
    const [, , borderRadiusDecls] = usesBorderRadius();
    return style({
        ...variants([
            rule(['.flat', '.flush', additionRemoveBorderSelector], {
                // borders:
                // kill borders surrounding List:
                [borderStrokeDecls.borderWidth]: '0px',
                // remove rounded corners on top:
                [borderRadiusDecls.borderStartStartRadius]: '0px',
                [borderRadiusDecls.borderStartEndRadius]: '0px',
                // remove rounded corners on bottom:
                [borderRadiusDecls.borderEndStartRadius]: '0px',
                [borderRadiusDecls.borderEndEndRadius]: '0px',
            }),
            rule(['.flat', '.joined', additionRemoveSeparatorSelector], {
                // children:
                ...children(wrapperElm, {
                    // borders:
                    // kill separator between items:
                    [borderStrokeDecls.borderWidth]: '0px',
                }),
            }),
        ], { specificityWeight }),
    });
};
export const usesListVariants = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(options);
    const parentOrientationBlockSelector = `${orientationBlockSelector}&`;
    const parentOrientationInlineSelector = `${orientationInlineSelector}&`;
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    // colors:
    const [, , borderDecls] = usesBorder();
    const [iconColor, iconColorRefs] = usesIconColor();
    // borders:
    const [borderStroke, borderStrokeRefs,] = usesBorderStroke();
    const [, , borderRadiusDecls] = usesBorderRadius();
    return style({
        ...imports([
            // variants:
            usesIndicatorVariants(),
            // layouts:
            sizes(),
        ]),
        ...variants([
            rule('.content', {
                ...imports([
                    // variants:
                    usesContentBasicVariants(),
                ]),
                // children:
                ...children(wrapperElm, {
                    // children:
                    ...children('*', {
                        ...imports([
                            // layouts:
                            usesContentBasicLayout(),
                            // children:
                            usesContentChildren(),
                        ]),
                    }),
                }),
            }),
        ]),
        ...imports([
            usesListBasicVariants({
                additionRemoveBorderSelector: ['.btn', '.tab', '.breadcrumb', '.bullet'],
                additionRemoveSeparatorSelector: ['.btn', '.tab', '.breadcrumb', '.bullet'],
                // specificityWeight            : 1, // not needed
            }),
        ]),
        ...variants([
            rule('.btn', {
                // spacings:
                // add space between buttons:
                gap: cssProps.btnSpacing,
                // children:
                ...children(wrapperElm, {
                    // children:
                    ...children(listItemElm, {
                        ...imports([
                            // layouts:
                            usesButtonLayout(),
                        ]),
                        ...style({
                            // accessibilities:
                            // undef cursor:
                            cursor: null,
                            // customize:
                            ...usesGeneralProps(usesPrefixedProps(cssProps, 'btn')), // apply general cssProps starting with btn***
                        }),
                    }),
                }),
            }),
            rule('.tab', {
                // layouts:
                ...rule(orientationBlockSelector, {
                    // tab directions are block (down) but List direction are inline:
                    display: 'inline-flex',
                    // borders:
                    // kill border [top, left, bottom] surrounding tab:
                    borderBlockWidth: 0,
                    borderInlineStartWidth: 0,
                }),
                ...rule(orientationInlineSelector, {
                    // tab directions are inline (right) but List direction are block:
                    display: 'flex',
                    // borders:
                    // kill border [left, top, right] surrounding tab:
                    borderInlineWidth: 0,
                    borderBlockStartWidth: 0,
                }),
                // children:
                ...rule(orientationBlockSelector, {
                    // children:
                    ...children(wrapperElm, {
                        // spacings:
                        // shift the items to right a bit, so the `active item` can hide the `borderRight`:
                        marginInlineEnd: `calc(0px - ${borderStrokeRefs.borderWidth})`,
                    }),
                }),
                ...rule(orientationInlineSelector, {
                    // children:
                    ...children(wrapperElm, {
                        // spacings:
                        // shift the items to bottom a bit, so the `active item` can hide the `borderBottom`:
                        marginBlockEnd: `calc(0px - ${borderStrokeRefs.borderWidth})`,
                    }),
                }),
                ...children(wrapperElm, {
                    // children:
                    ...children(listItemElm, {
                        ...imports([
                            // borders:
                            borderStroke(),
                        ]),
                        ...style({
                            // borders:
                            ...expandBorderStroke(),
                            [borderDecls.borderCol]: 'inherit',
                            backgroundClip: 'padding-box',
                            // customize:
                            ...usesGeneralProps(usesPrefixedProps(cssProps, 'tab')),
                            borderRadius: null, // tab borderRadius has been handled
                        }),
                        ...states([
                            isPassive({
                                ...rule(parentOrientationBlockSelector, {
                                    // borders:
                                    // show parent border right:
                                    borderBlockWidth: '0px',
                                    borderInlineStartColor: 'transparent',
                                }),
                                ...rule(parentOrientationInlineSelector, {
                                    // borders:
                                    // show parent border bottom:
                                    borderInlineWidth: '0px',
                                    borderBlockStartColor: 'transparent',
                                }),
                            }),
                            isActive({
                                ...rule(parentOrientationBlockSelector, {
                                    // borders:
                                    // hide parent border right:
                                    borderInlineEndWidth: '0px',
                                    // add rounded corners on left:
                                    [borderRadiusDecls.borderStartStartRadius]: cssProps.tabBorderRadius,
                                    [borderRadiusDecls.borderEndStartRadius]: cssProps.tabBorderRadius,
                                }),
                                ...rule(parentOrientationInlineSelector, {
                                    // borders:
                                    // hide parent border bottom:
                                    borderBlockEndWidth: '0px',
                                    // add rounded corners on top:
                                    [borderRadiusDecls.borderStartStartRadius]: cssProps.tabBorderRadius,
                                    [borderRadiusDecls.borderStartEndRadius]: cssProps.tabBorderRadius,
                                }),
                            }),
                        ]),
                    }),
                }),
            }),
            rule('.breadcrumb', {
                // children:
                ...children(wrapperElm, {
                    ...rule(selectorNotfirstVisibleChild, {
                        ...imports([
                            // colors:
                            iconColor(), // do not import `iconColor()` on pseudo `::before`
                        ]),
                        // children:
                        ...children('::before', {
                            ...imports([
                                usesIconImage(
                                /*iconImage: */ cssProps.breadcrumbSeparatorImg, 
                                /*iconColor: */ iconColorRefs.iconCol),
                            ]),
                            ...style({
                                // layouts:
                                display: 'block',
                                content: '""',
                                // sizes:
                                flex: [[0, 0, 'auto']],
                                // customize:
                                ...usesGeneralProps(usesPrefixedProps(cssProps, 'breadcrumbSeparator')), // apply general cssProps starting with breadcrumbSeparator***
                            }),
                        }),
                    }),
                    ...children(listItemElm, {
                        // typos:
                        lineHeight: 1,
                        // customize:
                        ...usesGeneralProps(usesPrefixedProps(cssProps, 'breadcrumb')), // apply general cssProps starting with breadcrumb***
                    }),
                }),
                // customize:
                ...rule(orientationBlockSelector, {
                    // children:
                    ...children(wrapperElm, {
                        ...rule(selectorNotfirstVisibleChild, {
                            // children:
                            ...children('::before', {
                                // overwrites propName = {breadcrumbSeparator}PropName{Block}:
                                ...overwriteProps(cssDecls, usesSuffixedProps(usesPrefixedProps(cssProps, 'breadcrumbSeparator', false), 'block')),
                            }),
                        }),
                    }),
                }),
            }),
            rule('.bullet', {
                // layouts:
                justifyContent: 'space-between',
                alignItems: 'center',
                // spacings:
                // add space between bullets:
                gap: cssProps.bulletSpacing,
                // children:
                ...children(wrapperElm, {
                    // sizes:
                    flex: [[0, 0, 'auto']],
                    // children:
                    ...children(listItemElm, {
                        ...imports([
                            // borders:
                            borderStroke(),
                        ]),
                        ...style({
                            // layouts:
                            display: 'flex',
                            flexDirection: 'inherit',
                            justifyContent: 'inherit',
                            alignItems: 'inherit',
                            flexWrap: 'inherit',
                            // sizes:
                            flex: 'inherit',
                            // borders:
                            ...expandBorderStroke(),
                            // big rounded corners on top:
                            [borderRadiusDecls.borderStartStartRadius]: borderRadiuses.pill,
                            [borderRadiusDecls.borderStartEndRadius]: borderRadiuses.pill,
                            // big rounded corners on bottom:
                            [borderRadiusDecls.borderEndStartRadius]: borderRadiuses.pill,
                            [borderRadiusDecls.borderEndEndRadius]: borderRadiuses.pill,
                            overflow: 'hidden',
                            // customize:
                            ...usesGeneralProps(usesPrefixedProps(cssProps, 'bullet')), // apply general cssProps starting with bullet***
                        }),
                    }),
                }),
            }),
            rule('.numbered', {
                // counters:
                counterReset: 'ListNumber',
                // children:
                ...children(wrapperElm, {
                    // children:
                    ...children(listItemElm, {
                        ...rule(':not(.void)', {
                            // children:
                            ...children('::before', {
                                // counters:
                                counterIncrement: 'ListNumber',
                                // customize:
                                ...usesGeneralProps(usesPrefixedProps(cssProps, 'numbered')), // apply general cssProps starting with numbered***
                            }),
                        }),
                    }),
                }),
            }),
        ], { specificityWeight: 2 }),
        /*
            the total selector combined with parent is something like this: `.list.btn.btn`, the specificity weight = 3
            the specificity of 3 is a bit higher than:
            *      `:not(.inline)>*>.listItem:not(_)`           , the specificity weight = 2.1 (listItem's borderSeparator)
            * `.list:not(.inline)>*>:not(_):where(:first-child)`, the specificity weight = 2.1 (listItem's borderRadius)
        */
    });
};
export const usesListStates = () => {
    return style({
        ...imports([
            // states:
            usesIndicatorStates(),
        ]),
    });
};
export const useListSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesListLayout(),
        // variants:
        usesListVariants(),
        // states:
        usesListStates(),
    ])),
], /*sheetId :*/ 'dj4jw72kyr'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        btnSpacing: spacers.sm,
        btnSpacingSm: spacers.xs,
        btnSpacingLg: spacers.md,
        tabTextAlign: 'center',
        tabBorderRadius: bcssProps.borderRadius,
        tabBorderRadiusSm: bcssProps.borderRadiusSm,
        tabBorderRadiusLg: bcssProps.borderRadiusLg,
        breadcrumbPaddingInline: bcssProps.paddingBlock,
        breadcrumbPaddingBlock: bcssProps.paddingBlock,
        breadcrumbPaddingInlineSm: bcssProps.paddingBlockSm,
        breadcrumbPaddingBlockSm: bcssProps.paddingBlockSm,
        breadcrumbPaddingInlineLg: bcssProps.paddingBlockLg,
        breadcrumbPaddingBlockLg: bcssProps.paddingBlockLg,
        breadcrumbSeparatorImg: `url("data:image/svg+xml,${escapeSvg("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><polyline points='7.5 3 16.5 12 7.5 21' fill='none' stroke='#000' stroke-linecap='square' stroke-width='3'/></svg>")}")`,
        breadcrumbSeparatorImgBlock: `url("data:image/svg+xml,${escapeSvg("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><polyline points='7.5 3 16.5 12 7.5 21' fill='none' stroke='#000' stroke-linecap='square' stroke-width='3' transform-origin='center' transform='rotate(90)'/></svg>")}")`,
        breadcrumbSeparatorInlineSize: '0.8em',
        breadcrumbSeparatorBlockSize: 'auto',
        breadcrumbSeparatorInlineSizeBlock: 'auto',
        breadcrumbSeparatorBlockSizeBlock: '0.8em',
        breadcrumbSeparatorMarginInline: '0.25em',
        breadcrumbSeparatorMarginBlock: 0,
        breadcrumbSeparatorMarginInlineBlock: 0,
        breadcrumbSeparatorMarginBlockBlock: '0.25em',
        bulletSpacing: spacers.sm,
        bulletSpacingSm: spacers.xs,
        bulletSpacingLg: spacers.md,
        bulletPadding: spacers.xs,
        bulletPaddingSm: spacers.xxs,
        bulletPaddingLg: spacers.sm,
        /* a non_nested counter */
        numberedContent: [[
                'counter(ListNumber)',
                '". "'
            ]],
        /* a nested counter */
        // numberedContent   : [[
        //     'counters(ListNumber, ".")',
        //     '". "'
        // ]],
    };
}, { prefix: 'lst' });
export function ListItem(props) {
    // styles:
    const sheet = useListItemSheet();
    const sheetAction = useListActionItemSheet();
    // fn props:
    const { semanticTag, semanticRole, isSemanticBtn, tag: buttonTag, type: buttonType, } = useSemanticButton(props);
    const isDefaultButton = isSemanticBtn && (props.tag === undefined);
    const tag = (isDefaultButton ? (props.tag ?? '') : buttonTag);
    const type = (isDefaultButton ? props.type : buttonType);
    // jsx:
    return (props.actionCtrl
        ?
            React.createElement(ActionControl, { ...props, 
                // semantics:
                semanticTag: semanticTag, semanticRole: semanticRole, tag: tag, 
                // accessibilities:
                inheritActive: props.inheritActive ?? true, 
                // variants:
                mild: props.mild ?? false, 
                // classes:
                mainClass: props.mainClass ?? [sheet.main, sheetAction.main].join(' '), ...{
                    // actions:
                    type,
                } })
        :
            React.createElement(Indicator, { ...props, 
                // semantics:
                tag: tag, 
                // accessibilities:
                inheritActive: props.inheritActive ?? true, 
                // variants:
                mild: props.mild ?? false, 
                // classes:
                mainClass: props.mainClass ?? sheet.main }));
}
export { ListItem as Item };
export function ListSeparatorItem(props) {
    // styles:
    const sheet = useListItemSheet();
    const sheetSeparator = useListSeparatorItemSheet();
    // jsx:
    return (React.createElement(ListItem, { ...props, 
        // behaviors:
        actionCtrl: false, 
        // classes:
        mainClass: props.mainClass ?? [sheet.main, sheetSeparator.main, 'void'].join(' ') },
        React.createElement("hr", null)));
}
ListSeparatorItem.prototype = ListItem.prototype; // mark as ListItem compatible
export function List(props) {
    // styles:
    const sheet = useListSheet();
    // variants:
    const orientationVariant = useOrientationVariant(props);
    const orientationHorizontal = (orientationVariant.class === 'inline');
    const listVariant = useListVariant(props);
    // rest props:
    const { 
    // behaviors:
    actionCtrl, 
    // children:
    children, ...restProps } = props;
    // fn props:
    const listTag = ['ul', 'ol'];
    const listRole = 'list';
    const semanticTag = props.semanticTag ?? listTag;
    const semanticRole = props.semanticRole ?? listRole;
    const [, , isList, isSemanticList] = useTestSemantic({ tag: props.tag, role: props.role, semanticTag, semanticRole }, { semanticTag: listTag, semanticRole: listRole });
    const wrapSemanticTag = (isSemanticList ? 'li' : [null]);
    const wrapSemanticRole = (isList ? 'listitem' : [null]);
    // jsx:
    return (React.createElement(Indicator, { ...restProps, 
        // semantics:
        semanticTag: semanticTag, semanticRole: semanticRole, "aria-orientation": props['aria-orientation'] ?? (orientationHorizontal ? 'horizontal' : 'vertical'), 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            orientationVariant.class,
            listVariant.class,
        ] }, React.Children.map(children, (child, index) => {
        // handlers:
        const handleAnimationEnd = (e) => {
            // triggers `List`'s onAnimationEnd event
            e.currentTarget.parentElement?.parentElement?.dispatchEvent(new AnimationEvent('animationend', { animationName: e.animationName, bubbles: true }));
        };
        // jsx:
        return (React.createElement(Element
        // essentials:
        , { 
            // essentials:
            key: index, 
            // semantics:
            semanticTag: wrapSemanticTag, semanticRole: wrapSemanticRole }, isTypeOf(child, ListItem)
            ?
                React.createElement(child.type
                // other props:
                , { ...child.props, 
                    // behaviors:
                    actionCtrl: child.props.actionCtrl ?? actionCtrl, 
                    // events:
                    onAnimationEnd: (e) => {
                        child.props.onAnimationEnd?.(e);
                        handleAnimationEnd(e);
                    } })
            :
                React.createElement(ListItem
                // behaviors:
                , { 
                    // behaviors:
                    actionCtrl: actionCtrl, 
                    // events:
                    onAnimationEnd: handleAnimationEnd }, child)));
    })));
}
export { List as default };
