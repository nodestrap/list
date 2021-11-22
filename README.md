# &lt;List&gt;&lt;/List&gt;
Represents a series of content.

## Preview

```jsx
<List tag='ol' theme='primary' size='lg' gradient={true} outlined={true}>
    <ListItem>hello</ListItem>
    <ListItem>world</ListItem>
    <ListSeparatorItem />
    <ListItem theme='danger'>important</ListItem>
    <ListItem actionCtrl={true} onClick={() => console.log('tadaa!')}>click me</ListItem>
    // ...
</List>
```
Rendered to:
```html
<ol class="c1 thPrimary szLg gradient outlined">
    <li>/* ... */</li>
    <li>/* ... */</li>
    <li>/* ... */</li>
</ol>
```

## Features
* Includes all features in [`<ActionControl />`](https://www.npmjs.com/package/@nodestrap/action-control).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/list
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
