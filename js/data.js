const SITE_DATA = {
  site: {
    name: "yast",
    title: "yast的小窝",
    subtitle: "记录生活与成长",
    description: "一个热爱生活、喜欢记录日常的普通人",
    avatar: "https://i1.hdslb.com/bfs/face/b85002dc46770c364d85dfcedc5d3bef9d83d01c.jpg@240w_240h_1c_1s_!web-avatar-nav.webp",
    author: "yast",
    email: "xiaomo2024@coze.email",
    github: "https://github.com",
    bilibili: "https://space.bilibili.com/",
    discord: "https://discord.com/"
  },
  categories: [
    { id: 1, name: "技术", icon: "code" },
    { id: 2, name: "设计", icon: "palette" },
    { id: 3, name: "生活", icon: "heart" },
    { id: 4, name: "教程", icon: "book" },
    { id: 5, name: "随笔", icon: "file" }
  ],
  tags: [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "CSS" },
    { id: 3, name: "React" },
    { id: 4, name: "Vue" },
    { id: 5, name: "Node.js" },
    { id: 6, name: "Python" },
    { id: 7, name: "TypeScript" },
    { id: 8, name: "Web" },
    { id: 9, name: "前端" },
    { id: 10, name: "后端" },
    { id: 11, name: "数据库" },
    { id: 12, name: "Docker" },
    { id: 13, name: "Git" },
    { id: 14, name: "UI/UX" },
    { id: 15, name: "动画" },
    { id: 16, name: "性能" },
    { id: 17, name: "AI" },
    { id: 18, name: "阅读" },
    { id: 19, name: "摄影" },
    { id: 20, name: "旅行" },
    { id: 21, name: "美食" },
    { id: 22, name: "日常" }
  ],
  banners: [
    {
      image: "https://esa-img.mint.ac.cn/i/pc/img310.webp",
      title: "yast的小窝",
      subtitle: "记录生活与成长",
      tags: ["技术", "生活", "日常"]
    },
    {
      image: "https://esa-img.loliapi.cn/i/pc/img2.webp",
      title: "我的博客",
      subtitle: "分享技术与生活",
      tags: ["动漫", "壁纸", "美图"]
    },
    {
      image: "https://eo-img.mint.ac.cn/i/pc/img3.webp",
      title: "技术与艺术",
      subtitle: "代码也可以很美",
      tags: ["前端", "设计", "创意"]
    },
    {
      image: "https://esa-img.iloli.love/i/pc/img4.webp",
      title: "发现美好",
      subtitle: "用心感受每一天",
      tags: ["摄影", "旅行", "感悟"]
    },
    {
      image: "https://eo-img.544521.xyz/i/pc/img5.webp",
      title: "创意无限",
      subtitle: "灵感就在身边",
      tags: ["灵感", "创意", "设计"]
    }
  ],
  posts: [
    {
      id: 1,
      title: "现代JavaScript入门指南",
      excerpt: "JavaScript这些年发展很快。本文探讨每个开发者都应该了解的现代特性。",
      cover: "https://picsum.photos/600/400?random=11",
      category: 1,
      tags: [1, 7, 9],
      author: "yast",
      date: "2024-01-15",
      content: `<h2 id="introduction">前言</h2>
<p>JavaScript是世界上最流行的编程语言之一。它驱动着网页，并为服务器端开发、移动应用等提供了支持。现代JavaScript包含了让代码更易读、更易维护、更高效的特性。</p>
<h2 id="es6-features">ES6+ 特性</h2>
<p>ES6引入了许多强大的特性，改变了我们编写JavaScript的方式。让我们来探索一些最重要的特性。</p>
<h3 id="arrow-functions">箭头函数</h3>
<p>箭头函数提供了简洁的函数编写语法。它们还 lexical 绑定了 <code>this</code> 的值。</p>
<pre><code>const add = (a, b) => a + b;
const multiply = (x) => x * 2;</code></pre>
<h3 id="destructuring">解构</h3>
<p>解构允许你从数组中提取值或从对象中提取属性到不同的变量中。</p>
<pre><code>const [first, second] = [1, 2, 3];
const { name, age } = person;</code></pre>
<h3 id="async-await">Async/Await</h3>
<p>Async/await让我们处理Promise变得更加愉快。它允许你写出看起来像同步代码的异步代码。</p>
<pre><code>async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}</code></pre>
<h2 id="best-practices">最佳实践</h2>
<ul>
<li>默认使用 <code>const</code>，需要重新赋值时使用 <code>let</code></li>
<li>使用有意义的变量和函数名</li>
<li>编写具有清晰职责的模块化代码</li>
<li>使用 try/catch 块正确处理错误</li>
<li>使用现代语法如可选链和空值合并运算符</li>
</ul>
<h2 id="conclusion">结语</h2>
<p>现代JavaScript提供了强大的特性，可以显著改善你的开发体验。关注最新的ECMAScript提案，不断学习写出更好的代码。</p>`
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: 何时使用哪个",
      excerpt: "CSS Grid和Flexbox都是强大的布局系统，但它们有不同的用途。学习何时使用它们以获得最佳效果。",
      cover: "https://picsum.photos/600/400?random=12",
      category: 2,
      tags: [2, 14, 9],
      author: "yast",
      date: "2024-01-12",
      content: `<h2 id="overview">概述</h2>
<p>CSS Grid和Flexbox是两个不同的CSS布局模块，它们是为了解决不同的问题而创建的。了解何时使用它们可以让开发过程更加顺畅。</p>
<h2 id="flexbox">Flexbox</h2>
<p>Flexbox专为单维布局而设计——要么是一行，要么是一列。它非常适合在容器内对齐项目并分配空间。</p>
<h3 id="flexbox-use-cases">何时使用Flexbox</h3>
<ul>
<li>导航菜单</li>
<li>容器内的卡片组件</li>
<li>居中元素</li>
<li>在项目之间分配空间</li>
</ul>
<h2 id="grid">CSS Grid</h2>
<p>CSS Grid专为二维布局而设计——同时处理行和列。它让你对项目的放置有精确的控制。</p>
<h3 id="grid-use-cases">何时使用CSS Grid</h3>
<ul>
<li>整体页面布局</li>
<li>照片画廊</li>
<li>有多个部分的仪表板</li>
<li>复杂的卡片布局</li>
</ul>
<h2 id="combination">结合使用</h2>
<p>最好的方法通常是两者结合使用！用Grid做整体页面结构，用Flexbox做组件级布局。这种组合给你最大的灵活性。</p>
<h2 id="conclusion">结语</h2>
<p>Flexbox和CSS Grid没有哪个"更好"——它们服务于不同的目的。掌握两者，在每种情况下使用正确的工具。</p>`
    },
    {
      id: 3,
      title: "使用Node.js构建RESTful API",
      excerpt: "学习如何使用Node.js、Express和MongoDB创建一个完整的RESTful API。从设置到部署。",
      cover: "https://picsum.photos/600/400?random=13",
      category: 4,
      tags: [5, 10, 1],
      author: "yast",
      date: "2024-01-10",
      content: `<h2 id="introduction">前言</h2>
<p>RESTful API是现代Web应用的支柱。在这个教程中，我们将从头开始使用Node.js和Express构建一个完整的RESTful API。</p>
<h2 id="setup">项目设置</h2>
<p>首先，让我们用必要的依赖项设置项目。我们将使用Express作为服务器，Mongoose与MongoDB交互，以及其他有用的包。</p>
<pre><code>npm init -y
npm install express mongoose cors dotenv</code></pre>
<h2 id="project-structure">项目结构</h2>
<p>一个组织良好的项目结构对于可维护性至关重要。这里有一个推荐的结构：</p>
<ul>
<li><code>/routes</code> - API路由定义</li>
<li><code>/controllers</code> - 业务逻辑</li>
<li><code>/models</code> - 数据库模型</li>
<li><code>/middleware</code> - 自定义中间件</li>
</ul>
<h2 id="crud-operations">CRUD操作</h2>
<p>RESTful API遵循标准HTTP方法：</p>
<ul>
<li><strong>GET</strong> - 检索资源</li>
<li><strong>POST</strong> - 创建新资源</li>
<li><strong>PUT</strong> - 更新现有资源</li>
<li><strong>DELETE</strong> - 删除资源</li>
</ul>
<h2 id="error-handling">错误处理</h2>
<p>正确的错误处理至关重要。始终返回适当的状态码和有意义的错误消息。</p>
<h2 id="conclusion">结语</h2>
<p>构建RESTful API是任何后端开发者的基本技能。练习这些概念，你就能为任何应用创建强大的API。</p>`
    },
    {
      id: 4,
      title: "极简设计的艺术",
      excerpt: "极简主义不是关于删除东西。它是关于只保留重要的东西。探索极简设计的原则。",
      cover: "https://picsum.photos/600/400?random=14",
      category: 2,
      tags: [14, 8, 15],
      author: "yast",
      date: "2024-01-08",
      content: `<h2 id="philosophy">哲学</h2>
<p>极简设计是关于去除不必要的东西以揭示本质。它不是让东西变空——而是让东西变得清晰。</p>
<h2 id="key-principles">关键原则</h2>
<h3 id="simplicity">简洁</h3>
<p>每个元素都应该有目的。如果它不增加价值，就删除它。这适用于颜色、字体、图片，甚至空白。</p>
<h3 id="typography">排版</h3>
<p>排版在极简设计中至关重要。选择一两种字体并坚持使用。注意字体大小、行高和字间距。</p>
<h3 id="whitespace">留白</h3>
<p>不要害怕空白。留白不是浪费空间——它帮助眼睛休息并聚焦于重要内容。</p>
<h3 id="color">色彩</h3>
<p>使用有限的调色板。大多数极简设计使用黑色、白色和一种强调色。</p>
<h2 id="conclusion">结语</h2>
<p>极简设计是关于有意识的选择。每一件添加到设计中的东西都应该有充分的理由。</p>`
    },
    {
      id: 5,
      title: "Python数据分析入门",
      excerpt: "学习使用Python和Pandas进行数据分析的基础知识。",
      cover: "https://picsum.photos/600/400?random=15",
      category: 4,
      tags: [6, 10, 17],
      author: "yast",
      date: "2024-01-05",
      content: `<h2 id="introduction">数据分析简介</h2>
<p>数据分析是从原始数据中提取洞察的过程。Python是数据分析的最佳工具之一，因为它有丰富的库生态系统。</p>
<h2 id="pandas">Pandas基础</h2>
<p>Pandas是Python中最流行的数据分析库。它提供了DataFrame数据结构，使数据操作变得简单。</p>
<pre><code>import pandas as pd
df = pd.read_csv('data.csv')
print(df.head())</code></pre>
<h2 id="visualization">数据可视化</h2>
<p>Matplotlib和Seaborn是Python中常用的可视化库。它们可以帮助你创建从简单图表到复杂统计图形的各种图表。</p>
<h2 id="conclusion">结语</h2>
<p>数据分析是一项有价值的技能。无论你是数据科学家、业务分析师还是开发者，了解数据都能帮助你做出更好的决策。</p>`
    },
    {
      id: 6,
      title: "Vue 3 组合式API详解",
      excerpt: "深入了解Vue 3的组合式API，以及如何用它来构建更好的应用。",
      cover: "https://picsum.photos/600/400?random=16",
      category: 1,
      tags: [4, 9, 1],
      author: "yast",
      date: "2024-01-03",
      content: `<h2 id="composition-api">组合式API简介</h2>
<p>Vue 3引入了组合式API，这是一种组织组件逻辑的新方式。与选项式API相比，它提供了更好的逻辑复用和更灵活的代码组织。</p>
<h2 id="setup-function">setup函数</h2>
<p>组合式API的核心是setup函数。它在组件实例创建之前执行，在那里你可以使用Composition API的所有功能。</p>
<pre><code>export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    return { count, doubleCount }
  }
}</code></pre>
<h2 id="lifecycle">生命周期钩子</h2>
<p>在组合式API中，生命周期钩子被导入为函数。每个函数必须在setup期间同步调用。</p>
<h2 id="conclusion">结语</h2>
<p>组合式API是Vue 3最重要的特性之一。它让你更容易组织代码、复用逻辑，以及编写类型安全的组件。</p>`
    },
    {
      id: 7,
      title: "我的2023年度总结",
      excerpt: "回顾过去一年的成长与收获，分享我的年度总结。",
      cover: "https://picsum.photos/600/400?random=17",
      category: 3,
      tags: [22, 18, 19],
      author: "yast",
      date: "2024-01-01",
      content: `<h2 id="growth">成长</h2>
<p>2023年是充实的一年。在技术方面，我深入学习了Vue 3和TypeScript，完成了好几个有趣的项目。在生活方面，我开始学习摄影，用镜头记录身边的美好。</p>
<h2 id="achievements">收获</h2>
<ul>
<li>完成了5个完整的前端项目</li>
<li>博客访问量突破1万</li>
<li>开始学习摄影</li>
<li>读了12本书</li>
</ul>
<h2 id="plans">计划</h2>
<p>2024年，我希望能继续保持学习和记录的习惯，尝试更多新的事物，成为更好的自己。</p>`
    },
    {
      id: 8,
      title: "TypeScript最佳实践",
      excerpt: "掌握TypeScript的正确用法，写出更健壮的代码。",
      cover: "https://picsum.photos/600/400?random=18",
      category: 1,
      tags: [7, 9, 1],
      author: "yast",
      date: "2023-12-28",
      content: `<h2 id="why-typescript">为什么使用TypeScript</h2>
<p>TypeScript为JavaScript添加了静态类型检查。它可以帮助你在编译时发现错误，而不是在运行时。</p>
<h2 id="basic-types">基础类型</h2>
<p>TypeScript支持多种基础类型：number、string、boolean、array、tuple等。</p>
<pre><code>let name: string = 'yast';
let age: number = 25;
let isStudent: boolean = false;</code></pre>
<h2 id="interfaces">接口</h2>
<p>接口用于定义对象的结构。它们帮助你在编译时检查代码的正确性。</p>
<pre><code>interface User {
  name: string;
  age: number;
  email?: string;
}</code></pre>
<h2 id="conclusion">结语</h2>
<p>TypeScript是编写大型JavaScript应用的强大工具。投资时间学习它将会在长期内为你节省大量调试时间。</p>`
    },
    {
      id: 9,
      title: "React Hooks完全指南",
      excerpt: "全面了解React Hooks的使用方法和最佳实践。",
      cover: "https://picsum.photos/600/400?random=19",
      category: 1,
      tags: [3, 9, 1],
      author: "yast",
      date: "2023-12-25",
      content: `<h2 id="what-are-hooks">什么是Hooks</h2>
<p>Hooks是React 16.8引入的新特性。它们让你在不编写类的情况下使用state和其他React特性。</p>
<h2 id="use-state">useState</h2>
<p>useState是最基本的Hook。它允许你在函数组件中添加state。</p>
<pre><code>const [count, setCount] = useState(0);</code></pre>
<h2 id="use-effect">useEffect</h2>
<p>useEffect用于处理副作用，比如数据获取、订阅、手动DOM操作等。</p>
<pre><code>useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);</code></pre>
<h2 id="custom-hooks">自定义Hooks</h2>
<p>自定义Hooks允许你提取组件逻辑到可重用的函数中。</p>
<h2 id="conclusion">结语</h2>
<p>Hooks简化了React代码，使其更容易理解和测试。掌握它们是现代React开发的必备技能。</p>`
    },
    {
      id: 10,
      title: "CSS动画性能优化",
      excerpt: "学习如何创建高性能的CSS动画，提升用户体验。",
      cover: "https://picsum.photos/600/400?random=20",
      category: 2,
      tags: [2, 15, 16],
      author: "yast",
      date: "2023-12-22",
      content: `<h2 id="why-performance">为什么性能很重要</h2>
<p>动画性能直接影响用户体验。卡顿的动画会让应用感觉迟钝和廉价。</p>
<h2 id="transform-vs-position">transform vs position</h2>
<p>使用transform和opacity创建动画比使用top、left等属性性能更好，因为前者可以由GPU加速。</p>
<pre><code>.box {
  transform: translateX(100px);
  will-change: transform;
}</code></pre>
<h2 id="will-change">will-change属性</h2>
<p>will-change告诉浏览器元素将要改变，这样浏览器可以提前优化。</p>
<h2 id="conclusion">结语</h2>
<p>通过遵循这些最佳实践，你可以创建流畅、高性能的动画，为用户提供更好的体验。</p>`
    },
    {
      id: 11,
      title: "Git版本控制入门",
      excerpt: "Git是现代开发者必备的工具。这篇文章带你入门Git基础。",
      cover: "https://picsum.photos/600/400?random=21",
      category: 4,
      tags: [13, 1, 8],
      author: "yast",
      date: "2023-12-20",
      content: `<h2 id="what-is-git">什么是Git</h2>
<p>Git是一个分布式版本控制系统。它可以追踪文件的变更，让你与他人协作开发项目。</p>
<h2 id="basic-commands">基础命令</h2>
<pre><code>git init
git add .
git commit -m "Initial commit"
git push origin main</code></pre>
<h2 id="branches">分支</h2>
<p>分支允许你在不影响主线的情况下开发新功能。</p>
<pre><code>git branch feature
git checkout feature</code></pre>
<h2 id="conclusion">结语</h2>
<p>掌握Git是每个开发者的必备技能。花时间学习它，你会感谢自己的。</p>`
    },
    {
      id: 12,
      title: "Docker容器化实战",
      excerpt: "学习使用Docker容器化你的应用，简化部署流程。",
      cover: "https://picsum.photos/600/400?random=22",
      category: 1,
      tags: [12, 10, 1],
      author: "yast",
      date: "2023-12-18",
      content: `<h2 id="why-docker">为什么使用Docker</h2>
<p>Docker让你可以将应用及其所有依赖打包成一个轻量级的容器。这样可以确保应用在任何环境中都能一致运行。</p>
<h2 id="dockerfile">Dockerfile</h2>
<p>Dockerfile定义了如何构建Docker镜像。</p>
<pre><code>FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]</code></pre>
<h2 id="docker-compose">Docker Compose</h2>
<p>Docker Compose让你可以定义和运行多容器Docker应用。</p>
<h2 id="conclusion">结语</h2>
<p>Docker已经成为现代开发和部署的标准。掌握它会让你的开发流程更加高效。</p>`
    },
    {
      id: 13,
      title: "我的书单推荐",
      excerpt: "分享一些我读过的好书，涵盖技术、文学、个人成长等多个领域。",
      cover: "https://picsum.photos/600/400?random=23",
      category: 3,
      tags: [18, 22, 3],
      author: "yast",
      date: "2023-12-15",
      content: `<h2 id="tech-books">技术书籍</h2>
<p>作为一名开发者，持续学习新技术是必不可少的。以下是我读过觉得不错的技术书籍推荐。</p>
<h3 id="frontend">前端相关</h3>
<ul>
<li>《JavaScript高级程序设计》- 深入理解JS基础</li>
<li>《你不知道的JavaScript》- 带你探索JS的深层原理</li>
<li>《CSS权威指南》- 夯实CSS基础</li>
</ul>
<h3 id="architecture">架构设计</h3>
<p>《架构整洁之道》是我最近在读的一本书，它教会了我如何设计更好的软件架构。</p>
<h2 id="fiction">文学作品</h2>
<p>除了技术书籍，我也喜欢阅读文学作品来放松身心。</p>
<ul>
<li>《活着》- 余华</li>
<li>《挪威的森林》- 村上春树</li>
<li>《小王子》- 圣埃克苏佩里</li>
</ul>
<h2 id="growth">个人成长</h2>
<p>《原子习惯》这本书改变了我对习惯养成的认知，非常推荐给大家。</p>`
    },
    {
      id: 14,
      title: "北京周末旅行记",
      excerpt: "分享一个在北京度过的愉快周末，探索这座古老又现代的城市。",
      cover: "https://picsum.photos/600/400?random=24",
      category: 3,
      tags: [20, 19, 22],
      author: "yast",
      date: "2023-12-10",
      content: `<h2 id="day1">第一天：故宫与胡同</h2>
<p>周末清晨，我踏上了前往北京的旅程。第一站是故宫，这座宏伟的宫殿见证了六百多年的历史变迁。</p>
<h3 id="morning">上午：故宫</h3>
<p>从天安门进入，穿过端门，来到午门。故宫的规模比我想象中还要大，一天时间根本看不完。</p>
<h3 id="afternoon">下午：南锣鼓巷</h3>
<p>下午我来到了南锣鼓巷，这条古老的街道充满了文艺气息。两旁是各式各样的小店，售卖着特色手工艺品。</p>
<h2 id="day2">第二天：长城</h2>
<p>第二天一大早，我就出发去八达岭长城。站在长城上，俯瞰连绵的山峦，心中涌起一股豪迈之情。</p>
<h2 id="food">美食推荐</h2>
<ul>
<li>北京烤鸭 - 必吃的经典美食</li>
<li>炸酱面 - 老北京的特色面食</li>
<li>豆汁儿 - 极具地方特色的小吃</li>
</ul>`
    },
    {
      id: 15,
      title: "Node.js异步编程深入理解",
      excerpt: "详细解析Node.js中的异步编程模式，包括回调、Promise和async/await。",
      cover: "https://picsum.photos/600/400?random=25",
      category: 1,
      tags: [5, 1, 9],
      author: "yast",
      date: "2023-12-08",
      content: `<h2 id="callback">回调函数</h2>
<p>Node.js以异步非阻塞IO著称，回调函数是最基础的异步模式。</p>
<pre><code>fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});</code></pre>
<h2 id="promise">Promise</h2>
<p>Promise解决了回调地狱的问题，让代码更加清晰。</p>
<pre><code>const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};</code></pre>
<h2 id="async-await">async/await</h2>
<p>async/await是Promise的语法糖，让异步代码看起来像同步代码。</p>
<pre><code>async function main() {
  const data = await readFile('test.txt');
  console.log(data);
}</code></pre>
<h2 id="best-practices">最佳实践</h2>
<ul>
<li>总是使用async/await处理异步操作</li>
<li>注意错误处理，使用try/catch</li>
<li>避免在循环中使用await</li>
</ul>`
    },
    {
      id: 16,
      title: "家常美食做法分享",
      excerpt: "分享几道我拿手的家常菜做法，简单易学又美味。",
      cover: "https://picsum.photos/600/400?random=26",
      category: 3,
      tags: [21, 22, 18],
      author: "yast",
      date: "2023-12-05",
      content: `<h2 id="intro">下厨房的乐趣</h2>
<p>学会做饭之后，我发现生活中多了一项乐趣。周末在家下厨，既健康又有成就感。</p>
<h2 id="dish1">番茄炒蛋</h2>
<p>这是最简单也是最经典的家常菜。</p>
<h3 id="ingredients">食材</h3>
<ul>
<li>番茄2个</li>
<li>鸡蛋3个</li>
<li>葱花适量</li>
<li>盐、糖少许</li>
</ul>
<h3 id="steps">步骤</h3>
<p>鸡蛋打散加少许盐，番茄切块。先炒鸡蛋盛出，再炒番茄出汁，最后加入鸡蛋翻炒均匀即可。</p>
<h2 id="dish2">可乐鸡翅</h2>
<p>这道菜是我家逢年过节的保留菜品。</p>
<h3 id="ingredients2">食材</h3>
<ul>
<li>鸡翅中10个</li>
<li>可乐一罐</li>
<li>生抽、老抽适量</li>
<li>姜片、料酒</li>
</ul>
<h3 id="steps2">步骤</h3>
<p>鸡翅焯水去腥，热锅下油煎至两面金黄，加入可乐和调料，小火焖煮20分钟即可。</p>`
    },
    {
      id: 17,
      title: "Linux常用命令总结",
      excerpt: "整理了一些日常开发中常用的Linux命令，提高工作效率。",
      cover: "https://picsum.photos/600/400?random=27",
      category: 1,
      tags: [10, 8, 1],
      author: "yast",
      date: "2023-12-02",
      content: `<h2 id="file-ops">文件操作</h2>
<h3 id="ls">ls - 列出目录</h3>
<pre><code>ls -la         # 列出详细信息
ls -lh         # 人性化显示大小
ls -lt         # 按修改时间排序</code></pre>
<h3 id="cd">cd - 切换目录</h3>
<pre><code>cd ~          # 回到家目录
cd -          # 返回上一个目录
cd ..         # 返回上级目录</code></pre>
<h2 id="search">搜索命令</h2>
<h3 id="grep">grep - 文本搜索</h3>
<pre><code>grep -r "keyword" ./   # 递归搜索
grep -n "keyword" file # 显示行号
grep -i "keyword" file # 忽略大小写</code></pre>
<h3 id="find">find - 文件查找</h3>
<pre><code>find . -name "*.js"     # 按名称查找
find . -type f         # 查找文件
find . -mtime -7       # 查找7天内修改的文件</code></pre>
<h2 id="system">系统监控</h2>
<pre><code>top              # 查看进程
df -h            # 查看磁盘
free -h          # 查看内存</code></pre>`
    },
    {
      id: 18,
      title: "React状态管理方案对比",
      excerpt: "对比Redux、Context API和Zustand等React状态管理方案，帮助你选择合适的工具。",
      cover: "https://picsum.photos/600/400?random=28",
      category: 1,
      tags: [3, 9, 1],
      author: "yast",
      date: "2023-11-28",
      content: `<h2 id="context">Context API</h2>
<p>React内置的Context API适合简单的全局状态共享。</p>
<pre><code>const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Component />
    </ThemeContext.Provider>
  );
}</code></pre>
<h2 id="redux">Redux</h2>
<p>Redux是最成熟的状态管理方案，适合大型复杂应用。</p>
<h3 id="redux-toolkit">Redux Toolkit</h3>
<p>Redux Toolkit简化了Redux的使用，减少了样板代码。</p>
<pre><code>const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; }
  }
});</code></pre>
<h2 id="zustand">Zustand</h2>
<p>Zustand是一个轻量级的状态管理库，API简洁。</p>
<pre><code>const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 }))
}));</code></pre>
<h2 id="conclusion">选择建议</h2>
<ul>
<li>小型项目：Context API</li>
<li>中型项目：Zustand</li>
<li>大型项目：Redux Toolkit</li>
</ul>`
    },
    {
      id: 19,
      title: "摄影初学者指南",
      excerpt: "分享一些摄影入门知识，帮助你用镜头记录美好瞬间。",
      cover: "https://picsum.photos/600/400?random=29",
      category: 5,
      tags: [19, 22, 18],
      author: "yast",
      date: "2023-11-25",
      content: `<h2 id="basics">摄影基础</h2>
<p>摄影是一门用光的艺术。以下是几个最基本的概念。</p>
<h3 id="exposure">曝光三要素</h3>
<ul>
<li><strong>光圈</strong> - 控制进光量，影响景深</li>
<li><strong>快门速度</strong> - 决定曝光时间，影响运动模糊</li>
<li><strong>ISO</strong> - 感光度，影响噪点</li>
</ul>
<h2 id="composition">构图技巧</h2>
<h3 id="rule-thirds">三分法</h3>
<p>将画面横竖各分成三等份，把主体放在交叉点上。</p>
<h3 id="leading-lines">引导线</h3>
<p>利用画面中的线条引导观众视线。</p>
<h3 id="frame">框架构图</h3>
<p>利用门窗、树枝等自然框架来构图。</p>
<h2 id="tips">实用技巧</h2>
<ul>
<li>黄金时段拍摄：日出后和日落前</li>
<li>多角度尝试：不要只用眼睛平视的高度</li>
<li>后期适当调整：但不要过度</li>
</ul>`
    },
    {
      id: 20,
      title: "Web性能优化实战",
      excerpt: "从多个角度分享Web性能优化的实践经验。",
      cover: "https://picsum.photos/600/400?random=30",
      category: 1,
      tags: [16, 8, 9],
      author: "yast",
      date: "2023-11-22",
      content: `<h2 id="critical-rendering">关键渲染路径</h2>
<p>优化关键渲染路径可以显著提升首屏加载速度。</p>
<h3 id="css-optimize">CSS优化</h3>
<ul>
<li>提取关键CSS</li>
<li>使用CSS Containment</li>
<li>避免CSS阻塞渲染</li>
</ul>
<h2 id="image-optimize">图片优化</h2>
<h3 id="format">图片格式</h3>
<p>根据场景选择合适的图片格式：</p>
<ul>
<li>JPEG - 照片</li>
<li>PNG - 需要透明度的图片</li>
<li>WebP - 现代浏览器首选</li>
<li>SVG - 图标和矢量图形</li>
</ul>
<h3 id="lazy-load">懒加载</h3>
<p>使用懒加载延迟加载非首屏图片。</p>
<pre><code><img loading="lazy" src="image.jpg" alt="描述"></code></pre>
<h2 id="js-optimize">JavaScript优化</h2>
<ul>
<li>代码分割</li>
<li>Tree Shaking</li>
<li>压缩和混淆</li>
</ul>`
    },
    {
      id: 21,
      title: "Vue3组件库搭建指南",
      excerpt: "从零开始搭建一个Vue3组件库，包含按钮、表单、弹窗等基础组件。",
      cover: "https://picsum.photos/600/400?random=31",
      category: 4,
      tags: [4, 9, 2],
      author: "yast",
      date: "2023-11-18",
      content: `<h2 id="setup">项目初始化</h2>
<p>使用Vite创建一个新的Vue3项目作为组件库的基础。</p>
<pre><code>npm create vite@latest my-ui -- --vue
cd my-ui
npm install</code></pre>
<h2 id="structure">目录结构</h2>
<p>建议的目录结构：</p>
<pre><code>src/
  components/
    Button/
      index.vue
      Button.vue
    Input/
  styles/
    variables.css
    mixins.scss</code></pre>
<h2 id="button">Button组件</h2>
<p>一个完整的Button组件应该支持多种变体和尺寸。</p>
<pre><code><template>
  <button :class="['btn', \`btn-\${type}\`, \`btn-\${size}\`]">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'primary' },
  size: { type: String, default: 'medium' }
});
</script></code></pre>
<h2 id="publish">发布组件库</h2>
<p>使用Vue CLI或VitePress来构建和发布你的组件库。</p>`
    },
    {
      id: 22,
      title: "数据库设计原则",
      excerpt: "分享数据库设计的基本原则和最佳实践。",
      cover: "https://picsum.photos/600/400?random=32",
      category: 1,
      tags: [11, 10, 6],
      author: "yast",
      date: "2023-11-15",
      content: `<h2 id="normalization">规范化</h2>
<p>数据库规范化是减少数据冗余和提高数据完整性的过程。</p>
<h3 id="1nf">第一范式(1NF)</h3>
<p>每个列都是不可分割的原子值。</p>
<h3 id="2nf">第二范式(2NF)</h3>
<p>满足1NF，且非主键列完全依赖于主键。</p>
<h3 id="3nf">第三范式(3NF)</h3>
<p>满足2NF，且非主键列之间不存在传递依赖。</p>
<h2 id="index">索引设计</h2>
<h3 id="when-index">何时创建索引</h3>
<ul>
<li>WHERE子句中经常使用的列</li>
<li>JOIN操作中涉及的列</li>
<li>ORDER BY和GROUP BY的列</li>
</ul>
<h3 id="index-types">索引类型</h3>
<ul>
<li>B-Tree索引 - 默认，适用于大多数场景</li>
<li>Hash索引 - 适用于精确匹配</li>
<li>全文索引 - 适用于文本搜索</li>
</ul>
<h2 id="security">安全设计</h2>
<p>敏感数据要加密存储，使用参数化查询防止SQL注入。</p>`
    },
    {
      id: 23,
      title: "AI工具使用心得",
      excerpt: "分享使用各种AI工具的经验，包括ChatGPT、Midjourney等。",
      cover: "https://picsum.photos/600/400?random=33",
      category: 5,
      tags: [17, 18, 15],
      author: "yast",
      date: "2023-11-12",
      content: `<h2 id="chatgpt">ChatGPT使用技巧</h2>
<h3 id="prompts">提示词技巧</h3>
<p>好的提示词可以让AI生成更准确的结果。</p>
<ul>
<li>明确你的角色和目标</li>
<li>提供足够的上下文</li>
<li>分解复杂任务</li>
<li>迭代优化提示词</li>
</ul>
<h3 id="coding">编程辅助</h3>
<p>ChatGPT可以帮助你：</p>
<ul>
<li>解释代码逻辑</li>
<li>找出Bug</li>
<li>提供优化建议</li>
<li>生成测试用例</li>
</ul>
<h2 id="midjourney">Midjourney绘画</h2>
<p>使用Midjourney生成图片时，描述词很关键。</p>
<h3 id="mj-tips">技巧分享</h3>
<ul>
<li>使用风格关键词：realistic, anime, oil painting</li>
<li>指定艺术家风格：in the style of Monet</li>
<li>添加细节描述：8k, detailed, photorealistic</li>
</ul>
<h2 id="summary">总结</h2>
<p>AI是强大的工具，但关键在于如何正确使用它。学会与AI协作可以大大提高效率。</p>`
    },
    {
      id: 24,
      title: "游戏推荐与评测",
      excerpt: "推荐几款我玩过的优秀游戏，包括主机和PC游戏。",
      cover: "https://picsum.photos/600/400?random=34",
      category: 5,
      tags: [18, 22, 15],
      author: "yast",
      date: "2023-11-08",
      content: `<h2 id="rpg">RPG游戏</h2>
<h3 id="genshin">原神</h3>
<p>这款游戏虽然是手游，但其开放世界的设计质量完全不输主机游戏。</p>
<ul>
<li>精美的画面和音乐</li>
<li>丰富的角色养成系统</li>
<li>持续更新的剧情内容</li>
</ul>
<h3 id="botw">塞尔达传说：旷野之息</h3>
<p>Switch必玩游戏，开放世界的标杆之作。</p>
<h2 id="simulation">模拟经营</h2>
<h3 id="stardew">星露谷物语</h3>
<p>一款可以让你放松身心的农场模拟游戏。</p>
<p>游戏融合了种田、钓鱼、采矿、社交等多种元素，非常适合休闲玩家。</p>
<h2 id="indie">独立游戏</h2>
<h3 id="hollow">空洞骑士</h3>
<p>一款优秀的类银河战士恶魔城游戏，手感出色，剧情深邃。</p>
<h3 id="deadcells">死亡细胞</h3>
<p>Roguelike与类魂结合的杰作，每一次死亡都是新的开始。</p>`
    },
    {
      id: 25,
      title: "TypeScript类型体操入门",
      excerpt: "深入学习TypeScript的高级类型系统，掌握类型编程的技巧。",
      cover: "https://picsum.photos/600/400?random=35",
      category: 1,
      tags: [7, 9, 1],
      author: "yast",
      date: "2023-11-05",
      content: `<h2 id="basic">基础类型</h2>
<p>TypeScript的基础类型包括string、number、boolean等。</p>
<pre><code>let name: string = 'yast';
let age: number = 25;
let isStudent: boolean = false;</code></pre>
<h2 id="utility">工具类型</h2>
<h3 id="partial">Partial<T></h3>
<p>将所有属性变为可选的。</p>
<pre><code>type User = { name: string; age: number };
type PartialUser = Partial<User>;
// 等同于 { name?: string; age?: number; }</code></pre>
<h3 id="pick">Pick<T, K></h3>
<p>从T中选择一组属性来构造新的类型。</p>
<pre><code>type User = { name: string; age: number; email: string };
type UserPreview = Pick<User, 'name' | 'email'>;</code></pre>
<h2 id="advanced">高级技巧</h2>
<h3 id="conditional">条件类型</h3>
<pre><code>type IsString<T> = T extends string ? true : false;</code></pre>
<h3 id="infer">infer关键字</h3>
<p>用于在条件类型中推断类型。</p>
<pre><code>type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;</code></pre>`
    },
    {
      id: 26,
      title: "我的2024新年计划",
      excerpt: "制定新年的学习和生活目标，希望能在新的一年有所成长。",
      cover: "https://picsum.photos/600/400?random=36",
      category: 5,
      tags: [22, 18, 17],
      author: "yast",
      date: "2023-11-01",
      content: `<h2 id="tech-goals">技术目标</h2>
<h3 id="frontend-goals">前端方向</h3>
<ul>
<li>深入学习TypeScript</li>
<li>掌握至少一个新的框架（如Solid.js）</li>
<li>完成一个完整的全栈项目</li>
</ul>
<h3 id="devops-goals">DevOps方向</h3>
<ul>
<li>学习Kubernetes基础</li>
<li>了解CI/CD流程</li>
<li>搭建自己的开发环境</li>
</ul>
<h2 id="life-goals">生活目标</h2>
<h3 id="health">健康</h3>
<p>每周至少运动3次，保持良好的作息习惯。</p>
<h3 id="reading">阅读</h3>
<p>计划每月读完2本书，全年24本。</p>
<h2 id="skills">技能提升</h2>
<ul>
<li>学习摄影后期处理</li>
<li>提升英语听说能力</li>
<li>开始学习日语基础</li>
</ul>
<h2 id="summary">结语</h2>
<p>新的一年，新的开始。希望通过努力，能够成为更好的自己。</p>`
    },
    {
      id: 27,
      title: "Git工作流实践",
      excerpt: "介绍几种常用的Git工作流，包括Git Flow和GitHub Flow。",
      cover: "https://picsum.photos/600/400?random=37",
      category: 1,
      tags: [13, 1, 8],
      author: "yast",
      date: "2023-10-28",
      content: `<h2 id="gitflow">Git Flow</h2>
<p>Git Flow是一种成熟的分支管理模型，适合有固定发布周期的项目。</p>
<h3 id="branches">分支类型</h3>
<ul>
<li><strong>main</strong> - 主分支，永远保持可发布状态</li>
<li><strong>develop</strong> - 开发分支，集成所有功能分支</li>
<li><strong>feature/*</strong> - 功能分支</li>
<li><strong>release/*</strong> - 发布分支</li>
<li><strong>hotfix/*</strong> - 热修复分支</li>
</ul>
<h2 id="githubflow">GitHub Flow</h2>
<p>GitHub Flow是一种更简单的流程，适合持续部署的项目。</p>
<pre><code>1. 创建分支
2. 添加提交
3. 创建Pull Request
4. 合并分支
5. 删除分支</code></pre>
<h2 id="commit">提交规范</h2>
<p>使用约定式提交（Conventional Commits）：</p>
<pre><code>feat: 添加新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 重构
test: 测试相关
chore: 构建或辅助工具更新</code></pre>`
    },
    {
      id: 28,
      title: "CSS创意动画效果",
      excerpt: "分享一些有趣的CSS动画效果，包括3D变换、路径动画等。",
      cover: "https://picsum.photos/600/400?random=38",
      category: 2,
      tags: [2, 15, 9],
      author: "yast",
      date: "2023-10-25",
      content: `<h2 id="3d">3D变换</h2>
<p>CSS的transform属性支持3D变换，可以创建丰富的视觉效果。</p>
<pre><code>.card {
  transform: perspective(1000px) rotateY(15deg);
  transition: transform 0.5s ease;
}
.card:hover {
  transform: perspective(1000px) rotateY(0deg);
}</code></pre>
<h2 id="keyframes">关键帧动画</h2>
<pre><code>@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.element {
  animation: bounce 1s ease infinite;
}</code></pre>
<h2 id="path">路径动画</h2>
<p>使用motion path可以让元素沿任意路径运动。</p>
<pre><code>.airplane {
  offset-path: path('M 0 0 Q 100 100 200 0');
  animation: fly 3s linear infinite;
}</code></pre>
<h2 id="loading">加载动画</h2>
<p>分享几个实用的加载动画代码片段。</p>
<pre><code>.loader {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}</code></pre>`
    },
    {
      id: 29,
      title: "咖啡品鉴入门",
      excerpt: "分享一些关于咖啡的知识，从选豆到冲泡的完整指南。",
      cover: "https://picsum.photos/600/400?random=39",
      category: 5,
      tags: [18, 22, 21],
      author: "yast",
      date: "2023-10-22",
      content: `<h2 id="beans">咖啡豆种类</h2>
<h3 id="arabica">阿拉比卡</h3>
<p>最常见的商业咖啡豆，口感柔和，酸度适中。</p>
<h3 id="robusta">罗布斯塔</h3>
<p>咖啡因含量高，味道较苦，常用于意式浓缩。</p>
<h2 id="roast">烘焙程度</h2>
<ul>
<li><strong>浅烘</strong> - 保留更多原产地风味，酸度明显</li>
<li><strong>中烘</strong> - 平衡酸度和苦味</li>
<li><strong>深烘</strong> - 苦味突出，带有焦糖化风味</li>
</ul>
<h2 id="brewing">冲泡方式</h2>
<h3 id="pour-over">手冲咖啡</h3>
<p>最考验技术和器具的方式，但能最大程度展现咖啡风味。</p>
<h3 id="french-press">法压壶</h3>
<p>操作简单，适合在家制作。</p>
<h3 id="espresso">意式浓缩</h3>
<p>所有意式咖啡的基础，crema是判断质量的关键。</p>
<h2 id="tips">品鉴技巧</h2>
<p>品鉴咖啡时关注：香气、酸度、醇厚度、余韵和平衡感。</p>`
    },
    {
      id: 30,
      title: "移动端适配最佳实践",
      excerpt: "详细讲解如何做好移动端网页适配，包括响应式设计和PWA。",
      cover: "https://picsum.photos/600/400?random=40",
      category: 1,
      tags: [8, 2, 16],
      author: "yast",
      date: "2023-10-18",
      content: `<h2 id="viewport">Viewport设置</h2>
<p>移动端适配的第一步是正确设置viewport。</p>
<pre><code><meta name="viewport" content="width=device-width, initial-scale=1.0"></code></pre>
<h2 id="responsive">响应式设计</h2>
<h3 id="media-queries">媒体查询</h3>
<pre><code>/* 移动优先 */
.mobile-layout { ... }

/* 平板 */
@media (min-width: 768px) {
  .tablet-layout { ... }
}

/* 桌面 */
@media (min-width: 1024px) {
  .desktop-layout { ... }
}</code></pre>
<h3 id="flex-grid">弹性布局</h3>
<p>使用Flexbox和Grid创建灵活的布局系统。</p>
<h2 id="pwa">PWA应用</h2>
<p>Progressive Web App让网页具有原生应用般的体验。</p>
<h3 id="manifest">Web App Manifest</h3>
<pre><code>{
  "name": "yast的小窝",
  "short_name": "yast",
  "start_url": "/",
  "display": "standalone",
  "icons": [...]
}</code></pre>
<h3 id="service-worker">Service Worker</h3>
<p>实现离线缓存和推送通知功能。</p>`
    }
  ]
};
