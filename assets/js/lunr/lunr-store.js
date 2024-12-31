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
      },{
        "title": "TCP准时同步的可行性实验",
        "excerpt":"本文进行了简易的 TCP 通信实验，结果表明在网络条件较好的情况下，该通信方式有可能达到准时效果。但该实验同时表明，此通信方式容易受到网络负载的影响。   [toc]   理想情况   这是一个简单的demo，它利用python的socket包进行TCP/IP通信，通信的双方分别称为近端和远端，其中近端为本地PC，远端为Ubuntu服务器。通信过程过程简化如下图，每次信息发送都携带有本地时间戳。         远端   首先，在远端（信息的接收端）接收信息时，将接收到的时间戳（近端的时间）与本地时间进行比较，得到差值如下图所示。   \\[\\text{Trigger delay} = T_{\\text{Far}}(\\text{hello}) - T_{\\text{Near}}(\\text{hello})\\]  结果表明进行100次通信时，差值稳定在145.78毫秒左右。它代表两机的时间戳绝对值有一定差距，但每次通信的随机延时相对稳定，稳定性用方差表示，标准差大小为0.09毫秒。      近端   为了度量两机通信的随机延时，我将远端返回的消息进行统计。这个统计在近端进行，对于某一条消息，近端将发送时的时间戳与接收到的回执时的时间戳进行比较。   \\[\\text{Loop delay} = T_{\\text{Near}}(\\text{welcome}) - T_{\\text{Near}}(\\text{hello})\\]  结果表明消息从发送到接收回执的延时平均值稳定在0.69毫秒左右，其最大延时为1.62毫秒，标准差为0.47毫秒。这基本满足毫秒级的通信要求。      网络拥堵情况   由于TCP/IP通信需要通过网络通信，因此不可避免地受到网络负载的影响。我通过scp上传大数据的方法模拟了网络拥堵的极端情况。结果表明在111.2MB/s的传输速率下，通信最大延时达到了10毫秒。虽然有办法对该延时进行补偿，但具体部署时还需要注意这类极端情况。     ","categories": ["IT","TCP"],
        "tags": [],
        "url": "/book/it/tcp/2024/10/31/TCP%E5%87%86%E6%97%B6%E5%90%8C%E6%AD%A5%E7%9A%84%E5%8F%AF%E8%A1%8C%E6%80%A7%E5%AE%9E%E9%AA%8C-130dc9c7091480d3b07fc37fd1bdf712.html",
        "teaser": null
      },{
        "title": "时间都去哪了？全国时间利用调查公报",
        "excerpt":"2024 年 10 月 31 日，国家统计局发布了“第三次全国时间利用调查公报（第二号）”，其中的内容十分有趣。一名普通劳动者每个工作日留给自己的时间是1小时35分钟。好好利用吧，因为根据“一万小时定律”，你需要花 30 年的时间才能有所收获。 另外，我还发现适龄劳动人口有 8%未参与有酬劳动，但他们还强于2.7%的人口，他们没有失业，但他们的劳动是无酬的。怎么样，感恩不？ [toc] 适龄劳动人口有 8%未参与有酬劳动 根据国家统计局发布的统计数据，2022 年末“16—59 岁劳动年龄人口为 87556 万人，占62.0%”，这个数字在 2 年内不会有大的变化，因此即使在 2024 年，我也按此值进行估算。 公报表明有酬劳动的参与率为54.1%。也就是说，有7.9%的劳动年龄人口未参与有酬劳动。但“全国城镇调查失业率为5.3%”，按这个口径来说，全国有约2.7%的人口没有失业，但他们的劳动是无酬的，换算成数字约为 \\[N_{\\text{nopay}} \\approx 140000 \\times 2.7\\%=3780 \\text{(万人)}\\] 参与者平均日工作时长达到 9 小时 参与“有酬劳动领域包括劳动就业活动大类中除无酬实习等就业活动外的其他活动类别”活动的人，按双休计算，他的每日工作时间为 \\[T_1 = (6 + \\frac{23}{60}) \\times \\frac{7}{5} = 8.9367 \\text{(小时)} = 8 \\text{小时} 56 \\text{分钟}\\] 你还剩下几个小时？ 从公报是看，个人生理必需活动领域的平均时间为12小时27分钟。一名普通劳动者，工作时间将占据8小时56分钟，剩下2小时37分钟。平均交通活动时间为1小时2分钟，那么他还剩下1小时35分钟。...","categories": ["News"],
        "tags": [],
        "url": "/book/news/2024/11/03/%E6%97%B6%E9%97%B4%E9%83%BD%E5%8E%BB%E5%93%AA%E4%BA%86-%E5%85%A8%E5%9B%BD%E6%97%B6%E9%97%B4%E5%88%A9%E7%94%A8%E8%B0%83%E6%9F%A5%E5%85%AC%E6%8A%A5-133dc9c70914802db4e6d007f14067b6.html",
        "teaser": null
      },{
        "title": "用度量的方法挖掘时间数据",
        "excerpt":"本文使用模拟采样和度量分析的方法对“第三次全国时间利用调查公报”的数据进行深入挖掘。得出的分析结果与日常生活的经验，或者说刻板印象是符合的，比如学生不事生产，从事家务较多的人分身乏术等等。纯数值模拟竟然能与客观实际相互符合，这十分有趣。 [toc] 公开报表 这些是从公开报表中提取的已知信息，这些信息包括中国人从事 6 项活动的平均时间（timesStr）和参与率（participantRatio），其中参与率表示每 100 人中有多少人参与了这项活动。比如，有酬劳动的参与率为54.1代表参与调研的人员中有 $51.1\\%$的人参与了这项活动。另外，平均时间是以时-分的形式表示的，因此需要以小数的形式换算为小时（spendHours）。比如，12 小时 27 分钟对应$12.45$小时。 挖掘目标与结果 这张表格的形式相当不令人满意，因为它除了提供了时间的边缘分布之外没有提供其他信息。所谓其他信息是一种联合信息，即花时间从事某项活动的人还花时间做了哪些其他的事情。比如人除了从事基本的生理活动之外，还可以在同一天从事劳动、学习、交通、自由支配等。 好在每个人一天的时间都是24小时，因此我也许有办法通过数值模拟的方法，从已有的公开信息中把感兴趣的联合信息提取出来。 模拟与度量分析 简单来讲，我采取的是生成模拟数据并随机采样的方法，利用符合约束的模拟数据回推联合特征。 生成模拟数据与随机采样 首先，我们已知的是从事某个活动的平均时间和参与率，从这两个指标中可以得到若干维度的信息，并生成对应的数值 首先，建立一个样本数量是 $N=10000$人的总体，每个人相互独立； 其次，对于某项活动来讲，可以按参与率 $r_i$计算出参与这项活动的人数 $n_i=N \\times r_i$； 再次，假设这些人参与这项活动所花的时间服从正态分布 $t_i \\sim \\mathcal{N}(m_i, \\delta_i^2)$，均值已知，方差未知。由于公开数据中完全不含有方差信息，因此我可以指定某个值作为方差。 这样生成的模拟数据用矩阵表示 \\[\\tag{1} X \\in \\mathcal{R}^{N \\times 6}\\] 矩阵中的每个元素代表这名成员在该项活动中所花费的时间 \\[x_{ij} \\sim \\mathcal{N}(m_i, \\delta_i^2)\\] 为了方便起见，我首先将它们有序排列起来，如左图所示，颜色越亮代表所花费的时间越长，颜色越黑代表越短。 另外，我还能按每项活动对数据进行shuffle（随机地重新排序），如右图所示。经过shuffle之后的数据开始具有了一项非常有意思的特性，那就是矩阵按列相加得到的和数有可能等于 24 \\[\\sum_{j=1}^{6} x_{ij} = 24...","categories": ["News"],
        "tags": [],
        "url": "/book/news/2024/11/05/%E7%94%A8%E5%BA%A6%E9%87%8F%E7%9A%84%E6%96%B9%E6%B3%95%E6%8C%96%E6%8E%98%E6%97%B6%E9%97%B4%E6%95%B0%E6%8D%AE.html",
        "teaser": null
      },{
        "title": "美国两党在参众两院的席位数量趋势",
        "excerpt":"本文从两党在两院中的席位数量解释了美国在这一届民主党任期内怪事不断的原因：掌管白宫的和掌管两院的是两拨人，这能不乱就怪了！另外，从两党席位数量靠近的程度来看，由于席位数量彼此接近，因此，近几年内，美国内部也不会很团结。（民主的绝对多数在这种情况下几乎就是个笑话。）   [toc]   多数带来的误解   这其实是民主制的一个问题。假设有100人投票，规定多数者胜，那么获得多数支持即可获胜。但多数这个数值就很有意思，因为99是多数，51也是多数。假设获得了99的多数，那么可以说剩下的1是少数派，力量有限；假设只获得了51的多数，那么余下的49，你就很难统一他们的思想和预测他们的行为。   不难发现，多数的边界很模糊。这导致民主多数不必然导向团结的结果。   多数不代表团结   为了将以上问题实例化，我搜集了美国参、众两院席位数量年表（见参考材料），从中提取出了民主党（democrats）和共和党（republicans）在其中的席位数量，并将它们绘制在下图中。图中反映了三个信息      首先，从 1850 年至今，美国参议院（senate）的席位数量基本保持稳定，且席位数量较少。在有限的席位中，两党保持轮流长期坐庄的状态。二战及之后一段时间（1930s~1990s）民主党占多数；而近期（2000 年之后）共和党占多数的时间较长。   其次，民主党占多数时，领先的席位数量较多；近期两党的席位数量比较胶着，多数地位易手也较为频繁。   再次，众议院（House of representatives）的席位数量到 1900s 之前一直在稳步增加，近百年来则保持稳定。   最后，众议院与参议院的趋势相似，近代以来，民主党更占据优势；但近期共和党开始抬头。与参议院相同的，在近几年中，众议院中两党席位的差距也越来越小，甚至达到了势均力敌的水平。      接下来，我还将两党在两院分别占多数的时间进行交叉比对，得到协方差矩阵如下图。左图为全部时间的统计结果，右图为 2000 年后的统计结果。所谓协方差可以代表某事件发生时另一事件发生的权重，值越大代表权重越高，因此从图中可以得到两点结论      首先，总体来看，美国是两党轮流坐庄，即两院同属于民主党或同属于共和党的概率都达到了36%以上，这代表美国两院分别由不同政党控制的时间比较短，（两党碰撞也最激烈）。   另外，在 2000 年之后，共和党独霸两院的时间比例达到了50%，其控制参议院的比例甚至达到了75%，而民主党在两院中占多数的时间降到了个位数，仅有8%。   这也部分解释了美国在这一届民主党任期内怪事不断的原因：掌管白宫的和掌管两院的是两拨人，这能不乱就怪了！   另外，从两党席位数量靠近的程度来看，由于席位数量彼此接近，因此，近几年内，美国内部也不会很团结。（民主的绝对多数在这种情况下几乎就是个笑话。）      参考材料   Senate: https://www.senate.gov/history/partydiv.htm   House of representatives: https://history.house.gov/Institution/Party-Divisions/Party-Divisions  ","categories": ["News"],
        "tags": [],
        "url": "/book/news/2024/11/11/%E7%BE%8E%E5%9B%BD%E4%B8%A4%E5%85%9A%E5%9C%A8%E5%8F%82%E4%BC%97%E4%B8%A4%E9%99%A2%E7%9A%84%E5%B8%AD%E4%BD%8D%E6%95%B0%E9%87%8F%E8%B6%8B%E5%8A%BF-13bdc9c70914803fb4abd28fa21b635c.html",
        "teaser": null
      },{
        "title": "定位你和你的代理的桌面程序",
        "excerpt":"这是一个基于 tkinter 的桌面 GUI 程序，它调用公共 API 定位你和你的代理（也称为梯子）所在的位置，并且 mapbox 将位置绘制在地图上。你的代理的位置很重要，因为有些厂商（比如 apple）不允许特定地区（比如 Russia）的代理登陆，这会极大降低你的翻墙体验。 可以在我的 github 仓库找到这个程序。 IP-location-app.git [toc] 程序 GUI 演示 这是该程序的界面，界面显示我的本地信息是在中国北京，而我的 proxy 则在大洋彼岸的某个地方。这里 proxy 的位置很重要，因为有些厂商（比如 OpenAI、Apple 等）不允许特定地区（比如 Russia）的代理登陆，一旦这种事情发生，我就发现 ChatGPT、Apple 等服务就会断开。这种情况也正是我动手写这个工具的动机之一。 获取你和你代理的 IP 及其 location 我使用 amazonaws 提供的服务定位 IP 信息，进而通过 ip-api 提供的服务进行地理位置定位，获取过程见附件中的get_ip_address函数和get_location函数。简单来说，ip 信息是一串标准的 IPv4 地址，它代表服务器是如何对你的信息进行路由的；location 信息是一个 json 包，其中包含有时区、服务商、经纬度等地理信息。 amazonaws ip-api Mapbox 地图...","categories": ["IT","Application"],
        "tags": [],
        "url": "/book/it/application/2024/11/17/%E5%AE%9A%E4%BD%8D%E4%BD%A0%E5%92%8C%E4%BD%A0%E7%9A%84%E4%BB%A3%E7%90%86%E7%9A%84%E6%A1%8C%E9%9D%A2%E7%A8%8B%E5%BA%8F-141dc9c70914803fb252ebe5ffa72df6.html",
        "teaser": null
      },{
        "title": "二项分布二三事（一）",
        "excerpt":"在古典概率模型中，概率总可以表示成大量重复实验的叠加结果。 二项分布针对实验结果为二元值时（比如发生与否、成功与否等）的统计量进行计算，是十分有用的统计工具。 本系列尝试使用尽量简单明了的方法，将它的内涵与外延记录下来。 [toc] 定义 假设 $ X \\sim B(p, N) $，这指的是两个方面： 在一次实验中，事件发生与否，且发生的概率为 $ p $。 在 $ N $ 次独立实验中，事件发生了 $ x $ 次。 因此，$ X $ 的概率分布为： \\[P(x) = C_N^x \\cdot p^x \\cdot q^{N-x}\\] 其中 $ p+q=1 $，且 $ C_N^x $ 表示从 $ N $ 中选择 $ x...","categories": ["Probability","Binomial"],
        "tags": [],
        "url": "/book/probability/binomial/2024/11/22/binomial-distribution-1.html",
        "teaser": null
      },{
        "title": "二项分布二三事（二）",
        "excerpt":"二项分布的概率密度函数以排列组合为基础，但用排列组合的方式推导其高阶矩却是不怎么优雅的方法。 本文通过二项分布的矩母函数对其二阶矩进行计算，通过简洁的微分形式表示二项分布的一阶原点矩（均值）和二阶中心矩（方差）。 [toc] 二项分布的矩母函数 二项分布的概率密度函数满足 \\[p(x) = C_n^x \\cdot p^x \\cdot q^{n-x}\\] 其中，$x \\in [0, 1 \\dots n]$，且$p+q=1$。 其矩母函数为$E(e^{xt})$ \\[M(t) = \\sum_{x=0}^{n} e^{xt} \\cdot C_n^x \\cdot p^x \\cdot q^{n-x}\\] 整理得 \\[M(t) = (q + p e^t)^n\\] 则，其一阶矩$E(X)$为 $$M’ _{t=0}=n(q+p e^t)^{n-1} \\cdot p e^t _{t=0} = np$$ 其二阶矩$E(X^2)$亦可通过二阶导数求得 \\[M'' = npe^t(n-1)(q+p...","categories": ["Probability","Binomial","MomentGenerating"],
        "tags": [],
        "url": "/book/probability/binomial/momentgenerating/2024/11/22/binomial-distribution-2-moment-generating.html",
        "teaser": null
      },{
        "title": "二项分布二三事（三）",
        "excerpt":"这就是著名的“德国坦克”统计问题。 该问题可以简单地描述成这样一句话： 我面前是一个黑箱，箱子里面的元素按顺序编号。我从中无放回地采样10次，得到的最大标号为100，那么请问这个箱子里的元素数量是多少？ 这个问题十分有趣，因为贝叶斯学派和频率学派分别给出了不同的估计结果。 而且两派各有道理。 本文尝试从贝叶斯学派的观点来解释这个问题，之后再尝试记录频率学派的分析结果。 写在前面： 因为这个问题涉及的知识比较繁杂，我目前还没有完全理清楚，因此暂时写出来放在这里。 现阶段想到哪里写到哪里，没有到校对和整理的阶段，因此不同章节的符号使用可能略有不同。 我习惯用vim进行笔记，这个东西（尤其是在输入公式时）对中文输入法并不友好，因此草稿以英文为主。 严格来说这也并不是二项分布问题，但由于组合数的存在，这个问题总是容易与二项分布联系起来。 [toc] Problem Description There are $m$ (unknown) items, numbered as $0, 1 \\dots m$. Randomly choice $k$ items without replacement. And the maximum number of chosen items is $n$. Find the solution of \\[\\tag{1} \\hat{m} = \\arg\\max_m \\varphi(k, n,...","categories": ["Probability","Binomial","Bayesian","GermanTank"],
        "tags": [],
        "url": "/book/probability/binomial/bayesian/germantank/2024/11/29/german-tank-problem-1.html",
        "teaser": null
      },{
        "title": "二项分布二三事（四）",
        "excerpt":"本文对“German tanks problem”的贝叶斯估计问题进行定量求解，证明了前文列出的概率密度函数的归一性，并给出了其分布的均值。二者都是用超几何分布，经简单推导即可得到。 还遗漏了它的二阶矩的相关计算，目前还没想到简单的算法。 [toc] Probabilities dense Using the notions: $t$, the total number which is unknown. $m$, the obtained maximum number. $k$, the count of the observations. where we naturally have $t \\ge m \\ge k$. Take $T$ is random variable, the credibility of $t$ is \\[\\tag{1} p(T=t \\vert...","categories": ["Probability","Binomial","Bayesian","GermanTank"],
        "tags": [],
        "url": "/book/probability/binomial/bayesian/germantank/2024/12/09/german-tank-problem-2.html",
        "teaser": null
      },{
        "title": "二项分布二三事（五）",
        "excerpt":"本文还是对“German tanks problem”的贝叶斯估计问题进行定量求解，完成了它的二阶矩的相关计算，目前的方法还算简单。 [toc] Probabilities dense Using the notions: $t$, the total number which is unknown. $m$, the obtained maximum number. $k$, the count of the observations. where we naturally have $t \\ge m \\ge k$. Take $T$ is random variable, the credibility of $t$ is \\[\\tag{1} p(T=t \\vert m,...","categories": ["Probability","Binomial","Bayesian","GermanTank"],
        "tags": [],
        "url": "/book/probability/binomial/bayesian/germantank/2024/12/16/german-tank-problem-3.html",
        "teaser": null
      },{
        "title": "二项分布二三事（六）",
        "excerpt":"本文从频率学派的思路对“German tanks problem”问题进行求解，得到了与 Bayesian 方法不同的点估计结果。 [toc] Frequency analysis Using the notions: $t$, the total number which is unknown. $m$, the obtained maximum number. $k$, the count of the observations. where we naturally have $t \\ge m \\ge k$. Take $T$ and $M$ are random variables, what we control is how...","categories": ["Probability","Binomial","Frequency","GermanTank"],
        "tags": [],
        "url": "/book/probability/binomial/frequency/germantank/2024/12/26/german-tank-problem-4.html",
        "teaser": null
      },{
        "title": "点估计的两种策略",
        "excerpt":"本文是对前面几篇短文的小结，小结了“德国坦克问题”的两种估计方法。 本文讨论了通过小量观测样本估计总体数量的两种方法：频率方法和贝叶斯方法。 频率方法基于样本的最大值进行估计，随着样本数量增加，估计值趋于真实值。 贝叶斯方法利用后验概率和贝叶斯公式进行估计，尽管估计值偏高，但在样本数量足够大时也趋于真实值。 问题描述 这是通过小量观测样本，估计总体数量的问题，描述如下 某一个有限集，每个元素按自然数编号，编号为 $1, 2, \\dots T$，$T$ 代表集合的规模。 $T$ 未知。 从集合中均匀、无放回地抽样 $k$ 次。 采集到的样本按标号从小到大排列，它们的标号计为 $x_1, x_2, \\dots x_k$。 问题是如何从采集到的样本中估计 $\\hat{T}$ 值。 用统计学的语言可以表示为观测到 $k$ 个随机变量 \\[X_1, X_2, …, X_k \\in X\\] 通过它们构造统计量 $f(X)$，并通过计算 $g(f(X))$ 得到 $T$ 的估计。其中， $f$ 和 $g$ 代表某种代数方法。 那么问题就转换成了如何找到合适的代数方法。 统计量的构造 构造统计量的方法是计算样本中的最大值 \\[f(X) = \\max(X)\\]...","categories": ["binomial","distribution"],
        "tags": [],
        "url": "/book/binomial/distribution/2024/12/31/german-tank-problem-5.html",
        "teaser": null
      }]
