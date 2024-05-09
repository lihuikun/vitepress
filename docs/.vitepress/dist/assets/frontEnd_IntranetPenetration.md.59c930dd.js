import{_ as s,o as a,c as n,V as l}from"./chunks/framework.6038b03e.js";const A=JSON.parse('{"title":"内网外射","description":"","frontmatter":{"title":"内网外射"},"headers":[],"relativePath":"frontEnd/IntranetPenetration.md","lastUpdated":1715227708000}'),p={name:"frontEnd/IntranetPenetration.md"},o=l(`<h1 id="内网外射-把本地的一个端口映射为一个外网地址" tabindex="-1">内网外射（把本地的一个端口映射为一个外网地址） <a class="header-anchor" href="#内网外射-把本地的一个端口映射为一个外网地址" aria-label="Permalink to &quot;内网外射（把本地的一个端口映射为一个外网地址）&quot;">​</a></h1><h2 id="将本地项目的项目放到外网来运行" tabindex="-1">将本地项目的项目放到外网来运行 <a class="header-anchor" href="#将本地项目的项目放到外网来运行" aria-label="Permalink to &quot;将本地项目的项目放到外网来运行&quot;">​</a></h2><p>举例：自己写好的 api 接口，vue 项目，node 文件......就能让外网的访问了</p><p>国内免费的方法：<a href="https://natapp.cn/" target="_blank" rel="noreferrer">natapp</a></p><h2 id="以这个简单的-api-接口为例-首先要保证这个端口的服务已启动" tabindex="-1">以这个简单的 api 接口为例（首先要保证这个端口的服务已启动） <a class="header-anchor" href="#以这个简单的-api-接口为例-首先要保证这个端口的服务已启动" aria-label="Permalink to &quot;以这个简单的 api 接口为例（首先要保证这个端口的服务已启动）&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> express </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">express</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">express</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/api/login</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">express server running...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 本地项目中安装</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i localtunnel</span></span>
<span class="line"><span style="color:#A6ACCD;">作用：</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">1.</span><span style="color:#A6ACCD;"> 启动项目</span></span>
<span class="line"><span style="color:#A6ACCD;">    	npm localtunnel </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">port </span><span style="color:#F78C6C;">8080</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 后面的为端口号为项目的端口号</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">2.</span><span style="color:#A6ACCD;"> 然后终端会给你个url地址直接访问就行（域名是随机生成的）</span></span>
<span class="line"><span style="color:#A6ACCD;">    	如果想自定义域名可以这样设置</span></span>
<span class="line"><span style="color:#A6ACCD;">        npm localtunnel </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">port </span><span style="color:#F78C6C;">8080</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">subdomain zxycode    </span><span style="color:#676E95;font-style:italic;">// --subdomain 后面的值就是自定义的域名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 在全局安装一个localtunnel插件</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g localtunnel</span></span>
<span class="line"><span style="color:#A6ACCD;">作用：</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 全局安装的话可以这样启动</span></span>
<span class="line"><span style="color:#A6ACCD;">		lt </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">port </span><span style="color:#F78C6C;">8080</span></span>
<span class="line"><span style="color:#A6ACCD;">		lt </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">port </span><span style="color:#F78C6C;">8080</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">subdomain zxycode</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 以上面的项目为例（全局启动为例并自定义端口号）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 这是发送给你的 网址  https://zxycode.loca.lt/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 访问自己的写的api接口（网站后加上接口地址就可以了）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//zxycode.loca.lt/api/login</span></span></code></pre></div><p>如果你改了项目代码需要重新执行一下</p><p><code>lt --port 8080 --subdomain zxycode</code></p><h3 id="家人们-现在你是不是成功了-哈哈-是不是很简单" tabindex="-1">家人们，现在你是不是成功了，哈哈，是不是很简单! <a class="header-anchor" href="#家人们-现在你是不是成功了-哈哈-是不是很简单" aria-label="Permalink to &quot;家人们，现在你是不是成功了，哈哈，是不是很简单!&quot;">​</a></h3>`,11),e=[o];function t(c,r,y,D,i,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};