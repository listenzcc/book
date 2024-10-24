var store = [{
        "title": "Help Center",
        "excerpt":"Jekyll   https://jekyllrb.com/   Minimal Mistakes   https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/  ","categories": [],
        "tags": [],
        "url": "/book/help-center/",
        "teaser": null
      },{
        "title": "Search page",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/book/search/",
        "teaser": null
      },{
        "title": "Sorted by Categories",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/book/categories/",
        "teaser": null
      },{
        "title": "Sorted by Years",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/book/year-archive/",
        "teaser": null
      },{
        "title": "Book manual",
        "excerpt":"The top level things about writing with markdown, serving with Jekyll, and publishing with github page. [toc] Cold startup In the root directory, it is necessary to create the ./docs directory to start the project from the ground. Since the github page supports the page in the ./docs. The ./init-jekyll-site.ps1...","categories": ["Intro","Markdown","Jekyll","MinimalMistakes"],
        "tags": [],
        "url": "/book/intro/markdown/jekyll/minimalmistakes/2024/10/10/startup.html",
        "teaser": null
      },{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll","update"],
        "tags": [],
        "url": "/book/jekyll/update/2024/10/10/welcome-to-jekyll.html",
        "teaser": null
      },{
        "title": "Entropy explains n-doors problem",
        "excerpt":"这是一个思想实验（或者说是游戏），游戏有 N 扇门，其中某一扇是正确的门。游戏有玩家和主持人参与，主持人知道正确的门，玩家的任务是找到正确的门。游戏进行三轮，第一轮由玩家选择一扇门，第二轮主持人在没有选择的 N-1 扇门中打开 N-2 扇确定不是正确的门，第三轮由玩家选择是否更换自己的选择，即选择没有被主持人打开的那扇门。 对于这个实验的解释众说纷纭，我在这里提供一个信息量的视角。结果似乎说明，如果玩家选择更换的话，他取胜的概率会增加，N 越大胜率增加的就越多。 [toc] 玩家视角 玩家面对的初始问题记为问题1，面前有$n$扇门，有且仅有一扇门是正确的门，由于他不知道门后的任何信息，因此每一扇门为正确门的概率相同均为 \\[p_0 = \\frac{1}{n}\\] 易见，问题1的信息熵为 \\[H_1 = n \\cdot (-p_0 \\log{p_0}) = \\log{n}\\] 在做出选择后，他的问题转换成了问题2，将$n$扇门分成两组，组A是选择的门，组B是其他$n-1$扇门。易见，正确门在组A和组B中的概率分别为 \\[\\begin{cases} p_A = \\frac{1}{n}\\\\ p_B = \\frac{n-1}{n} \\end{cases}\\] 此时问题2的信息熵为 \\[H_2 = \\frac{1}{n}\\log{n}+\\frac{n-1}{n}\\log{\\frac{n}{n-1}}\\] 主持人视角 主持人的角色是在玩家做出决策后介入的，此时的局势有两种可能情况 事件A发生，即正确的门在组A中； 事件B发生，即正确的门在组B中。 当事件A发生时，主持人可以任意选择$n-2$扇门打开，但这些操作无法提供任何信息，因为每扇门都不是正确的门，即 \\[H_a=0\\] 当事件B发生时，主持人要小心地避开正确的门，因此他实际上提供了，或者说他的操作需要他具有的信息量为 \\[H_b = \\log{n-1}\\] 综合起来可以得到主持人提供的信息量为 \\[H_B =...","categories": ["Entropy"],
        "tags": [],
        "url": "/book/entropy/2024/10/13/n-doors-problem-with-entropy.html",
        "teaser": null
      },{
        "title": "Boltzmann distribution",
        "excerpt":"平均能量约束下，使熵达到极大值的分布是Boltzmann分布。 这个结论非常有意思，因此本文将其证明简要地记录下来。 [toc] 概率与信息熵 假设系统中包含大量元素，每个元素处于某个状态$i$，状态服从概率分布$p_i$。因此系统的信息熵为 \\[H = -\\sum_i^N p_i \\log{p_i}\\] 约束条件 考虑任意可测函数$f(\\varepsilon_i)$，它在全部状态下都有良好的性质，满足 \\[\\sum_i^N p_i f(\\varepsilon_i) = \\text{Const.}\\] 其中，$\\varepsilon_i$代表该状态下的状态函数。利用爱因斯坦求和约定（即上下标的$i$取遍全部值并求和），上式可以简写为， \\[p_if^i = \\sum_i^N p_i f(\\varepsilon_i)\\] 这样的函数可以有多个，简记为 \\[\\begin{cases} c_1 = p_i f_1^i\\\\ c_2 = p_i f_2^i\\\\ \\dots \\\\ c_m = p_i f_m^i \\end{cases}\\] 求极大熵 采用拉格朗日法求熵的极值，构造拉格朗日函数 \\[L = H + \\lambda^j \\cdot (p_i f_j^i-c_j)\\]...","categories": ["BoltzmannDistribution","Entropy"],
        "tags": [],
        "url": "/book/boltzmanndistribution/entropy/2024/10/21/boltzmann-distribution.html",
        "teaser": null
      },{
        "title": "Docker踩坑记",
        "excerpt":"按道理说docker是一种常见的技术，但由于魔法长城和版本更新的存在，这个东西并没有想象中那么好用。本文对我在Win11机器上安装和使用docker时遇到的有意思的事情进行记录，留作日后避坑之用。 [toc] 安装 安装docker非常简单，只需要在他们的官网下载和安装最新的安装包即可。但拉取centos镜像时我立即遇到一个奇怪的问题，那就是它试图读取某个不存在的目录。我尝试了stackoverflow上的解决方案，思路是将docker切换到windows支持的模式，而不是留在linux模式。虽然这个方法很有道理，但并没有解决我的问题。 # Error message when pull or search centos &lt;# Possible solution (Not working in my case): $ 'C:\\Program Files\\Docker\\Docker\\DockerCli.exe' -SwitchDaemon Url: https://stackoverflow.com/questions/40459280/docker-cannot-start-on-windows #&gt; # Expect: error during connect: Post \"http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/v1.47/images/create?fromImage=centos&amp;tag=latest\": open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified. docker pull centos # How to switch...","categories": ["IT","Docker"],
        "tags": [],
        "url": "/book/it/docker/2024/10/24/docker.html",
        "teaser": null
      }]
