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
      }]
