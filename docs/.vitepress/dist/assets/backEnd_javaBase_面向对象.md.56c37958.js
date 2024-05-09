import{_ as s,o as l,c as a,V as n}from"./chunks/framework.6038b03e.js";const F=JSON.parse('{"title":"面向对象","description":"","frontmatter":{},"headers":[],"relativePath":"backEnd/javaBase/面向对象.md","lastUpdated":1715227708000}'),p={name:"backEnd/javaBase/面向对象.md"},o=n(`<h1 id="面向对象" tabindex="-1">面向对象 <a class="header-anchor" href="#面向对象" aria-label="Permalink to &quot;面向对象&quot;">​</a></h1><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><ol><li><p>面向对象内容的三条主线：</p><ul><li>Java类及类的成员：（重点）属性、方法、构造器；（熟悉）代码块、内部类</li><li>面向对象的特征；封装、继承、多态、（抽象）</li><li>其他关键字的使用：this、super、package、import、static、final、interface、abstract等</li></ul></li><li><p>面向过程编程（POP：Process oriented programming） vs 面向对象编程（OOP：object-oriented programming）</p></li></ol><ul><li><p>2.1 简单的语言描述二者的区别</p></li><li><blockquote><p>面向过程：</p></blockquote><ul><li>以 “函数” 为组织单位</li><li>是一种 “执行者思维”， 适合解决简单问题。扩展能力差、后期维护难度较大。</li></ul></li><li><blockquote><p>面向对象：</p></blockquote><ul><li>以 “类” 为组织单位。每种实物都具备自己的 “属性” 和 “行为/功能”。</li><li>是一种 “设计者思维”， 适合解决复杂问题。代码扩展性强、可维护性高。</li></ul></li></ul><ul><li><p>2.2 二者关系</p><blockquote><p>我们千万不要把面向过程和面向对象对立起来。他们是相辅相成的。面向对象离不开面向过程！</p></blockquote></li></ul><ol start="3"><li><p>面向对象编程的两个核心概念：类（Class）、对象（Object）</p><blockquote><p>谈谈对这两个概念的理解？</p><p>类：具有相同特征的事物的抽象描述，是‘抽象的’、概念上的定义。</p><p>对象：实际存在的该类事物的&quot;每个个体&quot;，是 “具体的”， 因而也称为“实例（instance）”</p></blockquote></li><li><p>面向对象完成具体功能的操作的三步流程（非常重要）</p><ul><li>步骤1：创建类，并设计类的内部成员（属性、方法）</li><li>步骤2：创建类的对象。比如：Phone p1 = new Phone()</li><li>步骤3：通过对象，调用其内部声明的属性或方法，完成相关功能</li></ul></li></ol><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><ol><li><p>变量的分类：</p><ul><li>角度一：按照数据类型来分；基本数据类型（8种）、引用数据类型（数组、类、接口、枚举、注释、记录）</li><li>角度二：按照变量在类中声明的位置不同；成员变量（或属性）、局部变量（方法内、方法形参、构造器内、构造器形参、代码块内等）</li></ul></li><li><p>属性的几个称谓：成员变量、属性、field（字段、域）</p></li><li><p>区分成员变量 VS 局部变量</p><ul><li><p>3.1 相同点</p><ul><li>变量声明的格式相同：数据类型 变量 = 变量值</li><li>变量都有其有效的作用域。出了作用域，就失效了</li><li>变量必须先声明，后赋值，再使用</li></ul></li><li><p>3.2 不同点</p><ul><li><p>1.类中声明的位置不同：</p><p>属性：声明在类内，方法外的变量</p><p>局部变量：声明方法、构造器内部的变量</p></li><li><p>2.在内存中分配的位置不同（难）</p><p>属性：随着对象的创建，存储在堆空间中。</p><p>局部变量：存储在栈空间中</p></li><li><p>3.生命周期：</p><p>属性：随着对象的创建而创建，随着对象的消亡而消亡</p><p>局部变量：随着方法对应的栈帧入栈，局部变量会在栈中分配；随着方法对应的栈帧出栈，局部变量消亡</p></li><li><p>4.作用域：</p><p>属性：在整个类的内部都是有效的</p><p>局部变量：仅限于声明此局部变量所在的方法（或构造器、代码块）中</p></li><li><p>5.是否可以有权限修饰符进行修饰：</p><p>都有哪些权限修饰符：public、protected、缺省、private。（用于表明所修饰的结构可调用的范围大小）</p><p>属性：是可以使用权限修饰符进行修饰的。（PS：暂时还未讲封装性，所以大小先不用写任何修饰符）。</p><p>而局部变量：不能使用任何权限修饰符进行修饰的。</p></li><li><p>6.是否有默认值：（重点）</p><p>属性：都有默认初始化值</p><p>​ 意味着，如果没有给属性进行显示初始化赋值，则会有默认初始化值。</p><p>局部变量：都没有默认初始化值。</p><p>​ 意味着，在使用局部变量之前，必须要显式的赋值，否则报错。</p></li></ul></li></ul></li></ol><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Employee.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 声明EmployeeTest测试类，并在main方法中，创建2个员工对象，并为属性赋值，并打印两个员工的信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Employee</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> id</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 编号</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 姓名</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 年龄</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> salary</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 薪资</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// EmployeeTest.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EmployeeTest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 创建类的实例（或创建类的对象，类的实例化）</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">emp1内存地址：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> emp1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        emp1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1001</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emp1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emp1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emp1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">salary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12999.00</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> emp1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,name = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> emp1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,age = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> emp1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,salary = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> emp1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">salary</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 再创建一个Employee的第二个对象</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Employee emp2 = emp1;  // 错误写法</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Employee</span><span style="color:#A6ACCD;"> emp2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Employee</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1002</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">李四</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">salary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8299.00</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,name = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,age = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,salary = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> emp2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">salary</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="方法-method" tabindex="-1">方法（method） <a class="header-anchor" href="#方法-method" aria-label="Permalink to &quot;方法（method）&quot;">​</a></h2><ol><li><p>使用方法的好处</p><p>方法的理解：“方法” 是类或对象行为特征的抽象，用来完成某个功能操作。</p><p>方法的好处：实现代码重用、减少冗余、简化代码</p></li><li><p>使用示例</p><ul><li>Math.random()的random()方法</li><li>Math.sqrt(x)的sqrt(x)方法</li><li>System.out.println(x)的println(x)方法</li><li>new Scanner(System.in).nextInt()的nextInt()方法</li><li>Arrays类中的binarySearch()方法、sort()方法、equals()方法</li></ul></li><li><p>声明举例</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">eat</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sleep</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">interests</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> hoboy</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getAge</span><span style="color:#89DDFF;">()</span></span></code></pre></div></li><li><p>方法声明的格式（重点）</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">权限修饰符  [其它修饰符] 返回值类型 </span><span style="color:#82AAFF;">方法名</span><span style="color:#A6ACCD;">(形参列表) [throws 异常类型] </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">   </span><span style="color:#676E95;font-style:italic;">// 方法头</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">​          </span><span style="color:#676E95;font-style:italic;">// 方法体</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">注意：[]中的内部不是必须的，以后再说</span></span></code></pre></div></li><li><p>具体的方法声明的细节</p><p>5.1 权限修饰符</p><p>​ ① Java规定了哪些权限修饰符呢？有四种：private \\ 缺省 \\ protected \\ public（放到封装讲）</p><p>​ 暂时大家声明方法时，可以先都写成public的。</p><p>5.2 返回值类型：描述当调用完此方法时，是否需要返回一个结果</p><p>​ 分类：</p><p>​ &gt; 无返回值类型：使用void表示即可。比如：System.out.println(x)的println(x)的方法、Arrays类中的binarySearch()方法、sort()方法、equals()方法</p><p>​ &gt; 有具体的返回值类型：需要指明返回的数据的类型。可以是基本数据类型，也可以引用数据类型</p><p>​ &gt; 需要在方法内部配合使用 “return + 返回值类型的变量或常亮”</p><p>​ 比如：Math.random()、new Scanner(System.in).nextInt()等</p><p>​ 【经验】我们在声明方法时，要不要提供返回值类型呢?</p><p>​ &gt; 根据方法具体实现的功能来决定。换句话说，具体问题具体分析</p><p>​ &gt; 根据题目要求</p><p>5.3 方法名：属于标识符。需要满足标识符的规定和规范。“见名知意”</p><p>5.4 形参列表：形参，属于局部变量，且可以声明多个。</p><p>​ 格式：（形参类型1 形参1，形参类型2 形参2，.......）</p><p>​ 分类：无形参列表、有形参列表</p><p>​ &gt; 无形参列表：不能省略一对()。比如：Math.random()</p><p>​ &gt; 有形参列表：根据方法调用时，需要的不确定的变量的类型和个数，确定形参的类型和个数。</p><p>​ 比如：Arrays类中的binarySearch()方法、sort()方法、equals()方法</p><p>​ 【经验】我们在声明方法时，是否需要形参列表呢？</p><p>​ &gt; 根据方法具体实现的功能来决定。换句话说，具体问题具体分析</p><p>​ &gt; 根据题目要求</p><p>5.5 方法体：当我们调用一个方法时，真正执行的代码。体现了此方法的功能。</p></li><li><p>注意点</p><ul><li>java里的方法“不能独立存在”，所有的方法必须定义在类里。</li><li>Java中的方法不调用，不执行。没调用一次，就执行一次。</li><li>方法内可以调用本类中的（其他）方法或属性</li><li>方法内不能定义方法。</li></ul></li><li><p>关键字：return</p><p>7.1 return的作用</p><pre><code> - 作用1：结束一个方法
 - 作用2：结束一个方法的同时，可以返回数据给方法的调用者（方法声明中如果有返回值类型，则防范内需要搭配return使用）
</code></pre><p>7.2 使用注意点：</p><ul><li>return后面不能声明执行语句</li></ul></li><li><p>方法调用的内存解析：</p><ul><li>形参：</li><li>实参：</li></ul></li></ol><p>​ 过程概述：</p><h2 id="对象数组" tabindex="-1">对象数组 <a class="header-anchor" href="#对象数组" aria-label="Permalink to &quot;对象数组&quot;">​</a></h2><ol><li>什么是对象数组？如何理解？</li></ol><blockquote><p>数组的元素可以是基本数据类型，也可以是引用数据类型。当元素是引用类型中的类时，我们称为对象数组。</p></blockquote><ol start="2"><li>举例：</li></ol><blockquote><p>String[]、Person[]、Student[]、Customer[]等</p></blockquote><ol start="3"><li>案例：</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">1. 定义类Student,包含三个属性：学号number(int)，年级state(int)，成绩score(int)。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">2. 创建20个学生对象，学号为1到20，年级和成绩都有随机数确定。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">问题一：打印出三年级（state值为3）的学生信息。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">问题二：使用冒泡排序按学生成绩排序，并遍历所有学生信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">提示：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">①：生成随机数：Math.random()，返回值类型double</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">②：四舍五入取整：Math.round(double d)，返回值类型long</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">年级【1,6】：（int）（Math.random() * 6 + 1）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">分数[0,100]：（int）（Math.random() * 101）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span></code></pre></div><ol start="4"><li>内存解析</li></ol><h2 id="方法的重载-overload" tabindex="-1">方法的重载（overload） <a class="header-anchor" href="#方法的重载-overload" aria-label="Permalink to &quot;方法的重载（overload）&quot;">​</a></h2><ol><li><p>定义：在同一个类中，允许存在一个以上的同名方法，只要他们的参数列表不同即可。</p><p>​ 满足这样特征的多个方法，彼此之间构成方法的重载。</p></li><li><p>总结为：“两同一不同”</p></li></ol><p>​ 两同：同一个类、相同的方法名</p><p>​ 一不同：参数列表不同。①参数个数不同 ②参数类型不同</p><p>​ 注意：方法的重载与形参的名、权限修饰符、返回值类型都没有关系。</p><ol start="3"><li><p>举例</p></li><li><p>如何判断两个方法是相同的呢？（换句话说，编辑器是如何确定调用的某个具体方法呢？）</p></li></ol><p>方法相同，且参数列表相同。（形参列表相同指的是参数个数和类型都相同，与形参名没关系）</p><p>要求：在一个类中，允许存在多个相同名字的方法，只要他们的参数列表不同即可。</p><p>编辑器是如何确定调用的某个具体的方法呢？先通过方法名确定了一波重载的方法，进而通过不同的参数形参，确定具体的某一个方法。</p><ol start="5"><li>在同一个类中不允许定义两个相同的方法。</li></ol>`,31),e=[o];function t(c,r,i,y,D,C){return l(),a("div",null,e)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
