### 1. Project name: Learning Web API

### 2. Period : 3 day

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
  `.tag` {
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

- Element.getBoundingClientRect(): Object named Element has function of API regarding coordinate. Element includes all of DOM on browser, such as tag of image and text and so on.

- Top of getBoundingClientRect() is same as X coordinate on browser. Left is same as Y coordinate. In contrast, right is same as right of CSS. Bottom is same as bottom of CSS. Javascript assign default coordinate top left direction. CSS assign default coordinate bottom right direction.

    <img src="./img/coordinate1.png" width="700" height="400">

#### 6-2. Coordinates with scroll bar

- client X,Y: coordinate should be defined basd on documentElement of browser.

- page X,Y : coordinate should be defined based on whole page size itself.

##### 6-2-1. Display coordinates on special div

- `<style>`
  `body` {
  background-color: black;
  }
  `div` {
  width: 250px;
  height: 250px;
  background-color: blanchedalmond;
  margin-bottom: 4px;
  border-radius: 4px;
  }
  `.special` {
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
  `special.addEventListener`('click', event => {
  `const rect` = special.getBoundingClientRect();
  console.log(rect);
  console.log(`client: ${event.clientX}, ${event.clientY}`);
  console.log(`page: ${event.pageX}, ${event.pageY}`);
  })
  `</script>`
  `</body>`

- In case of all codes, Please refer file named `coordinate1.html`.

- If you do not want scrolling, add `overflow: hidden;` on body function in tag of style.

    <img src="./img/output1.png" width="700" height="400">

##### 6-2-2. Move coordinates with buttons

- Please add aside in tag of style as below to put buttons on position of aside.

- `<style>`
  `aside` {
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
  `scrollBy.addEventListener`('click', event => {
  window.scrollBy(0, 100);
  });
  `scrollTo.addEventListener`('click', event => {
  window.scrollTo(0, 100);
  });
  `scrollInto.addEventListener`('click', event => {
  special.scrollIntoView();
  });
  `</script>`

- In case of all codes, Please refer file named `coordinate2.html`.

    <img src="./img/output2.png" width="700" height="400">

#### 6-3. Display coordinates with symbol icon and lines

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

- `body` {
  background-color: black;
  }
  `.line` {
  position: absolute;
  background-color: white;
  }
  `.horizontal` {
  width: 100%;
  height: 1px;
  top: 50%;
  }
  `.target` {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
  `.tag` {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(20px, 20px);
  font-size: 38px;
  }

- In case of all codes, Please refer file named `style.css`.

- In case of Javascript file, immutable variables should be defined relate with classes to oprate dynamically. Coordinates are displayed by below codes on documentElement of browser per event of mousemove.

- document.addEventListener(`'mousemove'`, (event) => {
  const X = event.clientX;
  const Y = event.clientY;
  `vertical.style.left` = `${X}px`;
  `horizontal.style.top` = `${Y}px`;
  `target.style.left` = `${X}px`;
  `target.style.top` = `${Y}px`;
  `tag.style.left` = `${X}px`;
  `tag.style.top` = `${Y}px`;
  `tag.innerHTML` = `${X}px, ${Y}px `;
  });

- In case of all codes, Please refer file named `main.js`.

    <img src="./img/output3.png" width="700" height="400">

#### 6-4. Optimized coordinates with symbol icon and lines

- In fact, application of 6-3 use properties of layout, paint, composition stage. It would be bad choice for rendering. So, optimization is needed. HTML is same between 6-3 and 6-4.

- In case of CSS file, margin of body should be 0% to remove the margin if margin occur on window. CSS property named top and left do not need because javascript use transform except for top and left. Margin of .tag should be added. CSS property named transform would not used on CSS file if javascript use the transfrom.

- `body` {
  background-color: black;
  margin: 0%;
  }
  `.horizontal` {
  width: 100%;
  height: 1px;
  }
  `.vertical` {
  width: 1px;
  height: 100%;
  }
  `.target` {
  position: absolute;
  }
  `.tag` {
  color: white;
  position: absolute;
  margin: 20px;
  font-size: 38px;
  }

- Use addEventListener of load to operate when completed fetching and protect mis-operating. Mis-operating maybe come from not completely fetched HTML data. getBoundingClientRect(), targetRect.width, targetRect.height should be needed to display coordinates and move near default coordinates. CSS property named transform is generally used with translate fucntion on Javascript. Values of translate function could use targetRect.width, targetRect.height on Javascript.

- `window.addEventListener`('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2 ;
  const targetHalfHeight = targetRect.height / 2;
  `document.addEventListener`('mousemove', (event) => {
  const X = event.clientX;
  const Y = event.clientY;
  vertical.style.transform = `translateX(${X}px)`;
  horizontal.style.transform = `translateY(${Y}px)`;
  target.style.transform = `translate(${X-targetHalfWidth}px, ${Y-targetHalfHeight}px)`;
  tag.style.transform = `translate(${X}px, ${Y}px)`;
  tag.innerHTML = `${X}px, ${Y}px `;
  });
  });

    <img src="./img/output6.png" width="700" height="400">

- Effort to optimize application would be not only reduce delay when operating but also improve with high level coding skill.

### 7. Loading sequence on console

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
  window.addEventListener(`'DOMContentLoaded'`, () => {
  console.log('DOMContentLoaded');
  });
  window.addEventListener(`'load'`, () => {
  console.log('load');
  });
  window.addEventListener(`'beforeunload'`, () => {
  console.log('beforeunloaded');
  });
  window.addEventListener(`'unload'`, () => {
  console.log('unloaded');
  });

  `</script>`

    <img src="./img/output4.png" width="700" height="400">

### 8. Find symbol of rabbit

- Add button named Find a rabbit and image with id named rabbit as below.

- `<body>`
  `<button>Find a rabbit</button>`
  `<img id="rabbit" src="img/rabbit.png" alt="rabbit">`
  `</body>`

- In case of symbol of rabbit with button, use function named `scrollIntoView` after variables named button and rabbit defined. use option of block: center if you want to put symbol of rabbit on center of documentElement of browser. rabbit is element of function named scrollIntoView.

- `<script>`
  `const button` = document.querySelector('button');
  `const rabbit` = document.querySelector('#rabbit');
  `button.addEventListener`('click', event => {
  `rabbit.scrollIntoView`({ behavior: 'smooth', block: 'center'});
  });
  `</script>`

- In case of decorating button and put icons on cener, function named button and body would be used as below. CSS function named text-align could place icons horizontally.

- `<style>`
  `body` {
  background-color: black;
  `text-align`: center;
  }
  `img` {
  display: block;
  margin: auto;
  }
  `button` {
  outline: none;
  background-color: tomato;
  color: white;
  font-size: 32px;
  margin: 16px, 0;
  cursor: pointer;
  }
  `</style>`

- In case of all codes, Please refer file named `index.html`.

    <img src="./img/output5.png" width="700" height="400">

### 9. How to operate datas with API by browser

- Object named Node inherits object named EventTarget. So, Event could occur on node because node inherits EventTarget. Document or Element inherit node. So, Event could occur on Document or Element according to DOM tree.
  In addition, browsers creat DOM tree with HTML data to understand and ready to operate correctly itself. For example, TextNode inherits h1 and h1 is inherits section, section inherits body step by step. Please compare HTML codes with DOM tree and find matching connection.

      <img src="./img/node.png" width="700" height="200">

      <img src="./img/dom1.png" width="700" height="400">

- EventTarget API offers 3 methods such as addEventListener(), removeEventListener(), dispatchEvent(). Element or Document also use the methods because element or document inherits node.
  Please refer https://developer.mozilla.org/en-US/docs/Web/API/Node and https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.

- Rendering means getting input named HTML datas and transfer output for user see displayed datas on window. Please refer comprehensive rendering path as below.

    <img src="./img/path.png" width="700" height="400">

- Browser parse HTML datas on request/response stage and load DOMContent, resources on loading stage. Browser transforms loaded datas into objects named DOM, CCSOM on scripting stage. Browser creats render tree for direct user interface on rendering stage. Grouping request/response, loading, scripting, rendering stage is for browser to construct data trees for browser understand datas and ready to operate correctly.

- Browser calculates and defines their layout per output. layout information maybe includes coordinates, width, height, range, position, and so on regarding inline blocks and div blocks.
  Browser creats layers to paint. To fix some of datas quickly when user makes a fault, each range of paint is defined and applied to per layer on paint stage.

- In case whole paint area is defined on only one layer, browser should change all paint datas whenever some of datas are changed. Browser displays arranged layers complying with Z-index on composition stage. If some of arranged layers repositioning, it would be possible to be changed on only composition stage except for layout and paint stage.

- Please refer https://csstriggers.com indicating whether or not choosed CSS property is good. Blink is one of engine on chrome. Gecko is one of engine on firefox. Webkit is one of engine on iOS and safari. EdgeHTML used to be one of engine on older edge browser and up-to-date edge browser use blink engine same as chrome. It would be bad choice of property if use layout, paint, composition stage. Try to use efficient property with less change such as only changed composition or changed paint and composition. For example, browser should use layout, paint, composition stage many times if values of property named `top` and `left` are changed. So, use property named `transform` to use only composition stage.

#### 9-1. DOM tree

- DOM: document object model. DOM mean HTML data is transformed into document object according to DOM tree. For example, tags of HTML is transformed to node of javascript by browser.

     <img src="./img/dom1.png" width="700" height="400">

#### 9.2 CCSOM tree

- CCSOM: CCS object model. CSSOM creats another tree in which tag of style on HTML or CSS file are transformed into CCS object according to DOM tree. CSSOM has computed style with cascading rules.

     <img src="./img/cssom.png" width="700" height="400">

#### 9.3 Render Tree

- Render tree means tree combined with DOM tree and CCSOM tree.
  The render tree do not include meta datas like tag of head that help better buliding up structures for stable.

       <img src="./img/render1.png" width="700" height="400">

- In case tag of span has 0 value of opacity and hidden value of visibility, user can not see span data on window even though render tree has span data.

     <img src="./img/render2.png" width="700" height="400">

- In contrast, in case span has none value of display, user can not see span data on window and render tree also do not have span data.

     <img src="./img/render3.png" width="700" height="400">

### 10.Resolution of failures

- symptom: stangeous values of winow.inner, document.documentElement even though application operate without error. I do not know root cause why browser engine operate trash values. I will check...

     <img src="./img/screen1.png" width="400" height="200">

- countermeasure: type window.inner or document.documentElement on console tap of browser. In case of stangeous values come from browser engine, would be fixed correctly.

     <img src="./img/screen2.png" width="400" height="200">

- symptom: pointer of cursor do not oprated. I do not know root cuase why broswer engine do not operate correctly. I will check...

- countermeasure: class named button is assigned in memory and then changed tag of button. It would be operated correctly.
