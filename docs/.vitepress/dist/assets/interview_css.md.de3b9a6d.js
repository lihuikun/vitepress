import{_ as a,o as s,c as o,V as e}from"./chunks/framework.6038b03e.js";const F=JSON.parse('{"title":"css","description":"","frontmatter":{"title":"css"},"headers":[],"relativePath":"interview/css.md","lastUpdated":1715227708000}'),l={name:"interview/css.md"},n=e(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><h2 id="画一个三角形" tabindex="-1">画一个三角形 <a class="header-anchor" href="#画一个三角形" aria-label="Permalink to &quot;画一个三角形&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> solid transparent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-bottom-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="flex-布局怎么把元素怎么放到右上角-右下角" tabindex="-1">flex 布局怎么把元素怎么放到右上角/右下角 <a class="header-anchor" href="#flex-布局怎么把元素怎么放到右上角-右下角" aria-label="Permalink to &quot;flex 布局怎么把元素怎么放到右上角/右下角&quot;">​</a></h2><h2 id="点击高亮的选项卡怎么实现" tabindex="-1">点击高亮的选项卡怎么实现 <a class="header-anchor" href="#点击高亮的选项卡怎么实现" aria-label="Permalink to &quot;点击高亮的选项卡怎么实现&quot;">​</a></h2><h2 id="怎么清除浮动" tabindex="-1">怎么清除浮动 <a class="header-anchor" href="#怎么清除浮动" aria-label="Permalink to &quot;怎么清除浮动&quot;">​</a></h2><h2 id="div-怎么垂直水平居中" tabindex="-1">div 怎么垂直水平居中 <a class="header-anchor" href="#div-怎么垂直水平居中" aria-label="Permalink to &quot;div 怎么垂直水平居中&quot;">​</a></h2><h2 id="怎么画-0-5px-的线" tabindex="-1">怎么画 0.5px 的线 <a class="header-anchor" href="#怎么画-0-5px-的线" aria-label="Permalink to &quot;怎么画 0.5px 的线&quot;">​</a></h2><h2 id="说一下盒模型" tabindex="-1">说一下盒模型 <a class="header-anchor" href="#说一下盒模型" aria-label="Permalink to &quot;说一下盒模型&quot;">​</a></h2><blockquote><p>可以认为每个 html 标签都是一个方块，然后这个方块又包了几个小方块，如果盒子一层层的包裹着，这就是所谓的盒模型</p></blockquote><blockquote><p>每个 HTML 元素都可以看作一个盒子，这个盒子由里到外由这个元素的内容 content 边框 border 内边距 padding 外边距 margin 组成</p></blockquote><blockquote><p>盒模型分为标准盒模型(W3C 标准盒模型)和 IE 盒模型(怪异盒模型)</p></blockquote><ol><li><p>标准盒模型：</p><ul><li><p>属性 width、height、只包含内容 content，不包含 border 和 padding</p></li><li><p>总宽度 = width + border + padding + margin</p></li></ul></li><li><p>IE 盒模型：</p><ul><li><p>属性 width,height 包含 border 和 padding，指的是 content+padding+border</p></li><li><p>width 不是内容的宽度</p></li><li><p>width = content + 内边距 + 边框</p></li></ul></li></ol><blockquote><p>正常情况默认是标准盒模型，但是我们可以通过 box-sizing 属性来指定盒模型类型。<br> 标准盒模型：box-sizing: content-box;<br> IE 盒模型：box-sizing: border-box;</p></blockquote><h2 id="为什么在标签上用用-style-写样式有弊" tabindex="-1">为什么在标签上用用 style 写样式有弊？ <a class="header-anchor" href="#为什么在标签上用用-style-写样式有弊" aria-label="Permalink to &quot;为什么在标签上用用 style 写样式有弊？&quot;">​</a></h2><h2 id="bfc-是什么" tabindex="-1">BFC 是什么？ <a class="header-anchor" href="#bfc-是什么" aria-label="Permalink to &quot;BFC 是什么？&quot;">​</a></h2><p><code>BFC</code>全称：<code>Block Formatting Context</code>， 名为 &quot;块级格式化上下文&quot;。</p><p><code>W3C</code>官方解释为：<code>BFC</code>它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，<code>Block Formatting Context</code>提供了一个环境，<code>HTML</code></p><p>简单来说就是，<code>BFC</code>是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。那么怎么使用<code>BFC</code>呢，<code>BFC</code>可以看做是一个<code>CSS</code>元素属性</p><h3 id="怎样触发-bfc" tabindex="-1">怎样触发 BFC <a class="header-anchor" href="#怎样触发-bfc" aria-label="Permalink to &quot;怎样触发 BFC&quot;">​</a></h3><p>这里简单列举几个触发<code>BFC</code>使用的<code>CSS</code>属性</p><ul><li>overflow: hidden</li><li>display: inline-block</li><li>position: absolute</li><li>position: fixed</li><li>display: table-cell</li><li>display: flex</li></ul>`,23),t=[n];function p(c,i,r,d,h,C){return s(),o("div",null,t)}const D=a(l,[["render",p]]);export{F as __pageData,D as default};