### 1. Project name: Learning Web API

### 2. Period : 2 day

### 3. Concept of API

- API: Application Programming Interface. API is protocol to get correct output when operated UI such as clicking button no matter what we don't know logic of offered OS or offered backend service in detail. In addition, offered function format is also one of API.

  <img src="./img/api1.png" width="700" height="400">

  <img src="./img/api2.png" width="700" height="400">

- Web API : offered browser has a variety of APIs. Please refer https://developer.mozilla.org/en-US/docs/Web/API. Https is communication protocol with encrypted security.

  <img src="./img/api3.png" width="700" height="400">

  <img src="./img/api4.png" width="700" height="400">

### 4. Architecture diagram of browser

- Browser is divided to 'Window', 'Document', 'Navigator'. Please refer `console.log(window);` on console of browser or https://developer.mozilla.org/en-US/docs/Web/API/Window.

  <img src="./img/browser1.png" width="700" height="400">

  <img src="./img/browser2.png" width="700" height="400">

- alert() and window.alert() are operated with same output because window is global object. In addition, `console.log(window)` and `console.log(this)` are also operated with same output.

### 5. Window size

- window.screen is size of monitor.
  window.outer is size of browser with URL and tap.
  window.inner is size of displayed page with scroll bar.
  document.documentElement is size of displayed page without scroll bar.

- In case of decorating page, Use CSS generally. However, in case of decorating some of simple comment,
  Use style tag of HTML instead of CSS as below. Please refer README_CSS for good understanding regarding decorating in detail.

- `<style>`
  .tag {
  display: inline-block;
  background-color: thistle;
  padding: 16px;
  margin-top: 16px;
  font-size: 48px;
  }
  `</style>`

- In case you want to operate reactive values, use application and querySelector as below. The values would be changed according to changed size of browser, such as changed window size, outer size, inner size, documentElement size. These means event values. Use function named `updateTag` to load event values on first page. Function named `addEventListener` use callback function `{}` within addEventListener to update event values per event. In addition, arrow function is used within addEventListener. `tag.innerHTML` means new element of HTML is put in tag.

- `<body>`
  `<div class="tag">` Window_size `</div>`
  `<script>`
  const tag = document.querySelector('.tag');
  function updateTag() {
  tag.innerHTML = `window.screen: ${window.screen.width}, ${window.screen.height} </br> window.outer: ${window.outerWidth}, ${window.outerHeight} </br> window.inner: ${window.innerWidth}, ${window.innerHeight} </br> document.documentElement: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`
  }
  window.addEventListener('resize', () => `{` updateTag(); `}`
  )
  updateTag();
  `</script>`
  `</body>`

- In case of all codes, Please refer file named `window-size.html`.

### 6. Coordinate

#### 6-1. Default coordinate

- Element.getBoundingClientRect(): Object named Element has function of API regarding coordinate. Element include all of DOM on browser, such as tag of image and text and so on.

- Top of getBoundingClientRect() is same as X coordinate on browser. Left is same as Y coordinate. In contrast, right is same as right of CSS. Bottom is same as bottom of CSS. Javascript assign default coordinate top left direction. CSS assign default coordinate bottom right direction.

    <img src="./img/coordinate1.png" width="700" height="400">

#### 6-2. Coordinates with scroll bar

- client X,Y: coordinate should be defined basd on documentElement of browser.

- page X,Y : coordinate should be defined based on whole page size itself.

##### 6-2-1. Display coordinates of special div

- `<style>`
  body {
  background-color: black;
  }
  div {
  width: 250px;
  height: 250px;
  background-color: blanchedalmond;
  margin-bottom: 4px;
  border-radius: 4px;
  }
  .special {
  background-color: lightsalmon;
  }
  `</style>`

- In case you want to operate reactive values, use application and querySelector as below. If you use `getBoundingClientRect()`, the values would be displayed according to changed coordinate on div with class named "special" such as client X,Y and page X,Y.

- `<body>`
  `<div></div>`
  `<div></div>`
  `<div></div>`
  `<div></div>`
  `<div></div>`
  `<div></div>`
  `<div class="special"></div>`
  `<div></div>`
  `<div></div>`
  `<div></div>`
  `<script>`
  const special = document.querySelector(".special");
  special.addEventListener('click', event => {
  const rect = special.getBoundingClientRect();
  console.log(rect);
  console.log(`client: ${event.clientX}, ${event.clientY}`);
  console.log(`page: ${event.pageX}, ${event.pageY}`);
  })
  `</script>`
  `</body>`

- In case of all codes, Please refer file named `coordinate1.html`.

- If you do not want scrolling, add `overflow: hidden;` on body function in tag of style.

##### 6-2-2. Move coordinates with buttons

- Please add aside in tag of style as below to put buttons on position of aside.

- `<style>`
  aside {
  position: fixed;
  top: 20px;
  right: 20px;
  }
  `</style>`

- Please Use defined APIs such as scrollBy, scrollTo, scrollIntoView. `scrollBy` and `scrollTo` are method, `scrollIntoView` is property. So, in case use scrollIntoView, element as special is needed to operate as below.

- `<script>`
  const special = document.querySelector(".special");
  const scrollBy = document.querySelector(".scroll-by");
  const scrollTo = document.querySelector(".scroll-to");
  const scrollInto = document.querySelector(".scroll-into");
  scrollBy.addEventListener('click', event => {
  window.scrollBy(0, 100);
  });
  scrollTo.addEventListener('click', event => {
  window.scrollTo(0, 100);
  });
  scrollInto.addEventListener('click', event => {
  special.scrollIntoView();
  });
  `</script>`

- In case of all codes, Please refer file named `coordinate2.html`.

#### 6-3. Display coordinates with image and lines

- Please add sytle.css for decorating with symble and main.js for dynamic event values because of used complicated values except for tage of style on HTML.

- In case of HTML file, add line to display line. add classes named horizontal and verticle in line class to move the lines. Add target to display symbol icon and add tag to display span data.

`<body>`
`<div class="line horizontal"></div>`
`<div class="line vertical"></div>`
`<img class="target" src="img/target.png" alt="target">`
`<span class="tag"></span>`
`</body>`

- In case of all codes, Please refer file named `coordinate3.html`.

- In case of CSS file, position should be absolute to get fixed position. Top is same as client X and left is same as client Y. Use CSS function named transform to reposition symbol icon and span data. Symbol icon is needed parameters named top: -50%, left: 50% to put the icon on center.

- .line {
  position: absolute;
  background-color: white;
  }
  .horizontal {
  width: 100%;
  height: 1px;
  top: 50%;
  }
  .target {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
  .tag {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(20px, 20px);
  font-size: 38px;
  }

- In case of all codes, Please refer file named `style.css`.

- In case of Javascript file, immutable variables should be defined relate with classes to oprate dynamically. Coordinates are displayed by below codes on documentElement of browser per event of mousemove.

- document.addEventListener('mousemove', (event) => {
  const X = event.clientX;
  const Y = event.clientY;
  console.log(`${event.clientX}, ${event.clientY}`);
  vertical.style.left = `${X}px`;
  horizontal.style.top = `${Y}px`;
  target.style.left = `${X}px`;
  target.style.top = `${Y}px`;
  tag.style.left = `${X}px`;
  tag.style.top = `${Y}px`;
  tag.innerHTML = `${X}px, ${Y}px `;
  });

- In case of all codes, Please refer file named `main.js`.

### 7. Load

- In case of Web page, browser download resources in parallel such as image, font, javascript parsing HTML file. Option named defer would be better than others. Please refer operating sequence as below.
  Start to parse HTML file, and then, change DOM elements when tag of title. After parsing HTML completely, one of outputs named 'js loaded' is operated at first because of defer. Second output is DOMContentLoaded. Final output is load. DOMContentLoad deals with only document. Load deals with all resources such as CSS, images, and so on including document. So, speed of operate DOMContentLoad is faster than Load. In case of getting output when before exit page, use event type named beforunload. You could check output when refresh page. In case of getting output when exit page, use event type named unload.

- `<!DOCTYPE html>`
  `<html lang="en">`
  `<head>`
  `<meta charset="UTF-8">`
  `<meta name="viewport" content="width=device-width, initial-scale=1.0" >`
  `<title>Load</title>`
  `<script src="test.js" defer></script>`
  `</head>`
  `<body>`
  `<script>`
  window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  });
  window.addEventListener('load', () => {
  console.log('load');
  });
  window.addEventListener('beforeunload', () => {
  console.log('beforeunloaded');
  });
  window.addEventListener('unload', () => {
  console.log('unloaded');
  });

  `</script>`

### 7.Resolution of failures

- symptom: stangeous values of winow.inner, document.documentElement even though application operate without error. I do not know root cause why browser engine operate trash values. I will check...

     <img src="./img/screen1.png" width="400" height="200">

- countermeasure: type window.inner or document.documentElement on console tap of browser. In case of stangeous values come from browser engine, would be fixed correctly.

     <img src="./img/screen2.png" width="400" height="200">
