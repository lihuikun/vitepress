import{_ as s,o as a,c as n,V as l}from"./chunks/framework.6038b03e.js";const e="/vitepress/assets/textview.d5c3e97a.png",p="/vitepress/assets/带阴影的TextView.eb89a7f2.png",t="/vitepress/assets/实现跑马灯效果的TextView.03b8b4e6.png",_=JSON.parse('{"title":"移动应用与开发","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/Android开发.md","lastUpdated":1715227708000}'),o={name:"frontEnd/Android开发.md"},r=l(`<h1 id="移动应用与开发" tabindex="-1">移动应用与开发 <a class="header-anchor" href="#移动应用与开发" aria-label="Permalink to &quot;移动应用与开发&quot;">​</a></h1><h1 id="赛项-pdf" tabindex="-1">赛项 pdf <a class="header-anchor" href="#赛项-pdf" aria-label="Permalink to &quot;赛项 pdf&quot;">​</a></h1><p><a href="http://www.gszjxx.cn/upload/353a68bb-378a-4992-826b-950cd7813631.pdf" target="_blank" rel="noreferrer">http://www.gszjxx.cn/upload/353a68bb-378a-4992-826b-950cd7813631.pdf</a></p><p>gzqcgg.com/static/file/20220322083730408.pdf</p><p><a href="https://www.acdt.edu.cn/__local/8/2C/9C/9B8CB090520271D913F2C38E5CD_45431D91_988D8.pdf?e=.pdf" target="_blank" rel="noreferrer">https://www.acdt.edu.cn/__local/8/2C/9C/9B8CB090520271D913F2C38E5CD_45431D91_988D8.pdf?e=.pdf</a></p><p><a href="https://blog.csdn.net/synola/article/details/88774022" target="_blank" rel="noreferrer">https://blog.csdn.net/synola/article/details/88774022</a></p><p>api 接口（智慧城市）：<a href="http://124.93.196.45:10001/pdf/%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E5%B9%B3%E5%8F%B0Open%20API_V.3.0.pdf" target="_blank" rel="noreferrer">http://124.93.196.45:10001/pdf/智慧城市平台Open API_V.3.0.pdf</a></p><h1 id="项目目录介绍" tabindex="-1">项目目录介绍 <a class="header-anchor" href="#项目目录介绍" aria-label="Permalink to &quot;项目目录介绍&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">YY</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-.</span><span style="color:#A6ACCD;">gradle</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-.</span><span style="color:#A6ACCD;">idea</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">	  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">build</span></span>
<span class="line"><span style="color:#A6ACCD;">	  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">libs</span></span>
<span class="line"><span style="color:#A6ACCD;">	  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">src </span><span style="color:#676E95;font-style:italic;">// 入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">	      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">main</span></span>
<span class="line"><span style="color:#A6ACCD;">			    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">layout</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">activity_main</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml </span><span style="color:#676E95;font-style:italic;">// 入口文件（相当于index.html）</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">AndroidManifest</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">gradle</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-.</span><span style="color:#A6ACCD;">gitignore</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">build</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gradle</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">gradlew</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">gradlew</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bat</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">settings</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gradle</span></span></code></pre></div><h1 id="控件" tabindex="-1">控件 <a class="header-anchor" href="#控件" aria-label="Permalink to &quot;控件&quot;">​</a></h1><p><strong>相当于 html 中的标签</strong></p><h2 id="textview" tabindex="-1">TextView <a class="header-anchor" href="#textview" aria-label="Permalink to &quot;TextView&quot;">​</a></h2><p><img src="`+e+'" alt=""></p><h2 id="带阴影的-textview" tabindex="-1">带阴影的 Textview <a class="header-anchor" href="#带阴影的-textview" aria-label="Permalink to &quot;带阴影的 Textview&quot;">​</a></h2><p><img src="'+p+'" alt=""></p><h2 id="实现跑马灯效果的-textview" tabindex="-1">实现跑马灯效果的 TextView <a class="header-anchor" href="#实现跑马灯效果的-textview" aria-label="Permalink to &quot;实现跑马灯效果的 TextView&quot;">​</a></h2><p><img src="'+t+'" alt=""></p>',17),c=[r];function i(D,C,A,d,y,h){return a(),n("div",null,c)}const f=s(o,[["render",i]]);export{_ as __pageData,f as default};
