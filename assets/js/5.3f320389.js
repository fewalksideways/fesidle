(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{220:function(t,s,a){t.exports=a.p+"assets/img/15427013565705.2dc949b8.jpg"},225:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_4-布局和包含块（layout-and-the-containing-block）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-布局和包含块（layout-and-the-containing-block）","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 布局和包含块（Layout and The Containing Block）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 1 概念")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[n("p",[t._v("定义：一个元素的尺寸和位置经常受 "),n("strong",[t._v("包含块（The Containing Block）")]),t._v(" 影响。大多数情况下，"),n("strong",[t._v("包含块(The Containing Block)")]),t._v(" 就是这个元素最近的祖先 "),n("strong",[t._v("块级元素(Block Level)")]),t._v(" 的 "),n("strong",[t._v("内容区(Content Area)")]),t._v("，但也不总是这样")])]),t._v(" "),n("li",[n("p",[t._v("示例图：当浏览器展示一个文档的时候，每一个元素都会生成一个盒子。每个盒子都被划分成四个区域")]),t._v(" "),n("ul",[n("li",[t._v("内容区(Content Area)")]),t._v(" "),n("li",[t._v("填充区(Padding Area)")]),t._v(" "),n("li",[t._v("边界区(Border Area)")]),t._v(" "),n("li",[t._v("隔离区(Margin Area)：意为元素的隔离间隙\n"),n("img",{attrs:{src:a(220),alt:"-w433"}})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("很多开发者认为 "),s("strong",[this._v("一个元素的包含块")]),this._v(" 就是 "),s("strong",[this._v("它父元素的内容区")]),this._v("，但事实并非如此")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-包含块的影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-包含块的影响","aria-hidden":"true"}},[this._v("#")]),this._v(" 2 包含块的影响")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("元素的尺寸和位置常常受它的包含块的影响。对于一些 CSS 属性，如 width、height、padding、height、绝对定位元素(position 被设置为 absolute 或 fixed)的偏移值，"),s("strong",[this._v("我们对这些属性设置为 百分比 时")]),this._v("，这些值的计算值是由元素的包含块决定")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-确定包含块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-确定包含块","aria-hidden":"true"}},[this._v("#")]),this._v(" 3 确定包含块")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("方法：确定"),a("strong",[t._v("一个元素的包含块")]),t._v("的过程完全依赖于"),a("strong",[t._v("这个元素的 position 属性")])]),t._v(" "),a("ol",[a("li",[t._v("若 "),a("code",[t._v("position")]),t._v(" 的值为 "),a("code",[t._v("static")]),t._v(" 或 "),a("code",[t._v("relative")]),t._v("，包含块就是由它的最近的祖先"),a("strong",[t._v("块容器(a block container)")]),t._v("(如 inline-block、block、list-item element), 和"),a("strong",[t._v("形成格式化上下文的元素")]),t._v("(如 table container、flex container、grid container、the block container itself)，的"),a("strong",[t._v("内容区")]),t._v("的边缘组成(the edge of the content box)\n"),a("ul",[a("li",[t._v("疑问???(content box 指的是什么，与 box-sizing 的关系)")])])]),t._v(" "),a("li",[t._v("若 "),a("code",[t._v("position")]),t._v(" 的值为 "),a("code",[t._v("absolute")]),t._v("，包含块由它最近的祖先元素(其 "),a("strong",[t._v("position 的值非 static")]),t._v("，也就是 relative、absolute、fixed、sticky)，的"),a("strong",[t._v("填充区的边缘")]),t._v("组成")]),t._v(" "),a("li",[t._v("若 "),a("code",[t._v("position")]),t._v(" 的值为 "),a("code",[t._v("fixed")]),t._v("，包含块由 "),a("strong",[t._v("视口")]),t._v("(在"),a("strong",[t._v("连续媒体")]),t._v("的情况下) 或 "),a("strong",[t._v("页面区域")]),t._v("(在"),a("strong",[t._v("分页媒体")]),t._v("的情况下)")]),t._v(" "),a("li",[t._v("若 "),a("code",[t._v("position")]),t._v(" 的值为 "),a("code",[t._v("absolute")]),t._v(" 或 "),a("code",[t._v("fixed")]),t._v("，包含块也可能由它最近的祖先元素的"),a("strong",[t._v("填充区的边缘")]),t._v("组成。最近的祖先元素需要满足的条件如下：\n"),a("ul",[a("li",[t._v("值不为 "),a("code",[t._v("none")]),t._v(" 的 "),a("code",[t._v("transform")]),t._v(" 属性 或值不为 "),a("code",[t._v("none")]),t._v(" 的 "),a("code",[t._v("perspective")]),t._v(" 属性")]),t._v(" "),a("li",[t._v("值为 "),a("code",[t._v("transform")]),t._v(" 或 "),a("code",[t._v("perspective")]),t._v(" 的 "),a("code",[t._v("will-change")]),t._v(" 属性")]),t._v(" "),a("li",[t._v("值不为 "),a("code",[t._v("none")]),t._v(" 属性的 "),a("code",[t._v("filter")]),t._v(" 属性")]),t._v(" "),a("li",[t._v("特殊：值为 "),a("code",[t._v("filter")]),t._v(" 的 "),a("code",[t._v("will-change")]),t._v(" 属性(仅在火狐下)")])])])])]),t._v(" "),a("li",[a("p",[t._v("注意：根元素 "),a("code",[t._v("<html>")]),t._v(" 的包含块是一个被称为 "),a("strong",[t._v("初始包含块(the initial containing block)")]),t._v(" 的 矩形。它具有 视口(连续媒体) 或 页面区域(分页媒体) 的尺寸")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-从包含块计算百分比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-从包含块计算百分比","aria-hidden":"true"}},[this._v("#")]),this._v(" 4 从包含块计算百分比")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("如上所诉，当一个元素的某些属性的属性值设置为"),a("strong",[t._v("百分比")]),t._v("时，"),a("strong",[t._v("计算值")]),t._v("(the computed value) 取决于该元素。")])]),t._v(" "),a("li",[a("p",[t._v("这些属性有"),a("strong",[t._v("盒模型属性")]),t._v("和"),a("strong",[t._v("偏移属性")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("要计算 "),a("code",[t._v("height")]),t._v("、"),a("code",[t._v("top")]),t._v("、"),a("code",[t._v("bottom")]),t._v(" 的百分比值，是通过 "),a("strong",[t._v("包含块的高")]),t._v(" 决定的\n"),a("ul",[a("li",[t._v("若包含块(包含块的 "),a("code",[t._v("position")]),t._v(" 的值为 "),a("code",[t._v("relative")]),t._v(" 或 "),a("code",[t._v("static")]),t._v(")的高是依赖于内容的变化，则这些值为 0")])])]),t._v(" "),a("li",[t._v("要计算 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v("、"),a("code",[t._v("padding")]),t._v("、"),a("code",[t._v("margin")]),t._v(" 的百分比值，是通过 "),a("strong",[t._v("包含块的宽")]),t._v(" 决定的")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-实践测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-实践测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 5 实践测试")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is a paragraph!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-1-示例1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-示例1","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.1 示例1")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("css 代码")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" beige"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("section")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 160px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightgray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == 400px * .5 = 200px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == 160px * .25 = 40px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == 400px * .05 = 20px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == 400px * .05 = 20px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("分析：p 元素的 "),a("code",[t._v("position")]),t._v(" 为 "),a("code",[t._v("static")]),t._v("，所以它的包含块为 "),a("code",[t._v("section")]),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("原因：距离最近的祖先元素 "),a("code",[t._v("section")]),t._v(" 是一个 "),a("strong",[t._v("块容器(a block container)")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-2-示例2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-示例2","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.2 示例2")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("css 代码")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" beige"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("section")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightgray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == half the body's width */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Note: a percentage would be 0 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("分析：p 元素的包含块为 "),a("code",[t._v("body")]),t._v(" 元素")]),t._v(" "),a("ul",[a("li",[t._v("原因："),a("code",[t._v("section")]),t._v(" 不再是一个块容器，并且没有形成一个格式化上下文")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-3-示例3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-示例3","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.3 示例3")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("场景：自身元素 "),a("code",[t._v("position")]),t._v("为 "),a("code",[t._v("absolute")]),t._v("，且最近的祖先元素的 "),a("code",[t._v("position")]),t._v(" 为 "),a("code",[t._v("absolute")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("css 代码")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" beige"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("section")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 160px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightgray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == (400px + 20px + 20px) * .5 = 220px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == (160px + 30px + 30px) * .25 = 55px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == (400px + 20px + 20px) * .05 = 22px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == (400px + 20px + 20px) * .05 = 22px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("分析：p 元素的包含块为 "),a("code",[t._v("section")]),t._v(" 元素")]),t._v(" "),a("ul",[a("li",[t._v("原因：自身元素 "),a("code",[t._v("position")]),t._v(" 为 "),a("code",[t._v("absolute")]),t._v("，最近的祖先元素 "),a("code",[t._v("section")]),t._v(" 的 "),a("code",[t._v("position")]),t._v(" 为 "),a("code",[t._v("absolute")]),t._v(".\n"),a("ul",[a("li",[t._v("p 元素的 "),a("strong",[t._v("百分比值")]),t._v(" 会受到 "),a("strong",[t._v("包含块的 padding")]),t._v(" 影响")]),t._v(" "),a("li",[t._v("若 "),a("strong",[t._v("包含块的 box-sizing")]),t._v(" 值设置为 "),a("code",[t._v("border-box")]),t._v("，就没有该问题")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-4-示例4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-示例4","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.4 示例4")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("场景：自身元素的 "),s("code",[this._v("position")]),this._v(" 为 "),s("code",[this._v("fixed")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("css 代码")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" beige"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("section")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 480px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightgray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == (50vw - (width of vertical scrollbar)) */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == (50vh - (height of horizontal scrollbar)) */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == (5vw - (width of vertical scrollbar)) */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == (5vw - (width of vertical scrollbar)) */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("分析：p 元素的包含块为 初始包含块（在屏幕上，即 viewport），尺寸就随浏览器窗框大小变化而变化")]),t._v(" "),a("ul",[a("li",[t._v("原因：自身元素的 "),a("code",[t._v("position")]),t._v(" 为 "),a("code",[t._v("fixed")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-5-示例5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-示例5","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.5 示例5")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("场景：自身元素的 "),a("code",[t._v("position")]),t._v(" 为 "),a("code",[t._v("absolute")]),t._v("，最近的祖先元素的 "),a("code",[t._v("transform")]),t._v(" 的属性值不为 "),a("code",[t._v("none")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("css 代码")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" beige"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("section")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 160px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightgray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == 200px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == 40px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == 20px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* == 20px */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("分析：p 元素的包含块为 "),a("code",[t._v("section")]),t._v(" 元素")]),t._v(" "),a("ul",[a("li",[t._v("原因：自身元素的 "),a("code",[t._v("position")]),t._v(" 属性值为 "),a("code",[t._v("absolute")]),t._v("，距离最近的祖先元素的 "),a("code",[t._v("transform")]),t._v(" 属性值不为 "),a("code",[t._v("none")])])])])])}],e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("误区理解：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("以下示例都使用该 html 代码段")]),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("场景：自身元素 position 属性 为 static || relative")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("场景：祖先元素不再是块容器")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("gitalk")],1)},n,!1,null,null,null);s.default=r.exports}}]);