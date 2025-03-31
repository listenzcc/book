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
      },{
        "title": "频谱泄露的特点",
        "excerpt":"本文尝试说明频谱泄露的程度只取决于信号截断的位置，而几乎与信号的总长度无关，并且频谱泄露的程度随截断位置呈现周期性变化的趋势。 为了说明这个命题，我使用 Manim 动画分别绘制了长度约为200和800的序列被非整周期截断时的功率谱。结果表明频谱泄露现象与序列总长度无关，而仅与截断位置有关。 [toc] 重要结论 由于对于绝对可积函数$f(t)$，始终有$f(t)(u(t) - u(t - T))$的傅里叶变换为 \\[\\tag{1} \\frac{1}{2\\pi}F(\\omega)*\\left[\\left(1 - e^{-j\\omega T}\\right)\\left(\\frac{1}{j\\omega}+\\pi\\delta(\\omega)\\right)\\right]\\] 因此，频谱泄露的程度只取决于信号截断的位置，而几乎与信号的总长度无关，并且频谱泄露的程度随下式呈现周期性变化的趋势 \\[\\omega T \\in (2(n-1)\\pi, 2n\\pi)\\] 我使用 Manim 动画分别绘制了长度约为200和800的序列被非整周期截断时的功率谱，动画中的曲线分别是截断位置与整周期相差0-19个采样点时的频谱密度曲线，它们不是冲激函数，这就是频谱泄露现象。 动画中从左向右的曲线代表200长序列的频谱、从右向左的曲线代表800长序列的频谱。结果表明频谱泄露现象与序列总长度无关，而仅与截断位置有关。 解决 $f(t)(u(t)−u(t−T))$ 的傅里叶变换 回顾傅里叶变换的相关性质 乘积定理：若$f_1(t)$的傅里叶变换为$F_1(\\omega)$，$f_2(t)$的傅里叶变换为$F_2(\\omega)$，那么$f_1(t)f_2(t)$的傅里叶变换为$\\frac{1}{2\\pi}F_1(\\omega)F_2(\\omega)$，其中“$$”表示卷积运算。 时移性质：若$f(t)$的傅里叶变换为$F(\\omega)$，则$f(t - t_0)$的傅里叶变换为$e^{-j\\omega t_0}F(\\omega)$。 求$u(t)$和$u(t - T)$的傅里叶变换 已知单位阶跃函数$u(t)$的傅里叶变换$U(\\omega)=\\frac{1}{j\\omega}+\\pi\\delta(\\omega)$。 对于$u(t - T)$，根据时移性质，其傅里叶变换为$U_T(\\omega)=e^{-j\\omega T}\\left(\\frac{1}{j\\omega}+\\pi\\delta(\\omega)\\right)$。 求$f(t)(u(t) - u(t - T))$的傅里叶变换 设$f(t)$的傅里叶变换为$F(\\omega)$，根据乘积定理，$f(t)(u(t) -...","categories": ["signalProcessing","spectrum"],
        "tags": [],
        "url": "/book/signalprocessing/spectrum/2025/01/07/spectrum-leakage.html",
        "teaser": null
      },{
        "title": "数据党：洛杉矶大火",
        "excerpt":"洛杉矶大火诱因有很多，其中主要因素我想可以归为两条，一是野火为何开始；二是野火如何蔓延。野火为何开始的原因很直接：地中海气候地区容易引发森林火灾。野火蔓延的因素则往往与城市规划和植被建设有关。本文通过考据一些简单的数据和新闻说明这两因素在这次大火中的可能情况。 [toc] 气候因素：地中海气候 冬天下雨，夏天干旱的地中海气候（ Mediterranean climate ）是引起野火的客观原因。针对气候成因的论述有很多，该气候的成因也很复杂，简而言之是一种比较奇怪的气候现象。受这种气候影响的地区往往临海，但冬天气温较低时降水较多，但夏天气温较高时降水较少。具体表现为夏天温度高、无降水、气候干燥。 之所以说它奇怪是因为这种地区较少，也不符合大众对天气的感知。因为全球大部分地区的天气是热天时容易下雨，也就是如下图所示。我将全球超过100万人口的主要城市近10年的气候数据，下图中横坐标代表气温，纵坐标代表降水量。图中可见降水量较多的情况多见于气温较高的时候。但图中左侧的峰值代表气温较低时，也有一些地区有较多降水。地中海气候地区就在其中。 为了进一步说明洛杉矶的气候特点，我拉了三个城市作为对比，分别为伦敦、北京和上海。在左上角图中可见，洛杉矶的降水特点是气温低时降水，降水集中在12月到4月之间。左下角图中的北京与之相反，是气温高时降水，降水集中在4-10月之间。其右侧的上海降水更多，降水时间也更长，但仍然呈现夏秋降水多的特点。右上角的伦敦兼具洛杉矶和上海的特点，不管气温高低几乎全年都有降水。看样子是个空气湿润的好地方。 回到洛杉矶，这个地方几乎已经旱了半年，快熬到雨季时突发山火，也算是倒霉。 野火与植被：更多还是更少 对于山火如何演变成城区大火的原因莫衷一是，有人说是因为绿化搞得不够所以起火，有人说是胡乱种树引来了大火。先看第一种说法，我找到了一篇碳排放的新闻说2020年到2023年期间，洛杉矶地区的森林覆盖率有所降低。 In 2020, Los Angeles had 199 kha of natural forest, extending over 19% of its land area. In 2023, it lost 64 ha of natural forest, equivalent to 12.1 kt of CO₂ emissions. [Los Angeles, California, United States Deforestation Rates &amp; Statistics GFW](https://www.globalforestwatch.org/dashboards/country/USA/5/19/?category=forest-change) 但我对比了植被减少区域（下图中粉色区域）和本次过火区域（下图中红色区域）发现植被减少区域主要集中在西侧山地，而过火区域集中在圣莫妮卡西北的近山平原。彼此并不重叠。这说明植被减少并不是引起大火蔓延的直接原因。 再看第二种说法，这种说法有一定道理。因为我找到2022年的一则新闻，说是洛杉矶需要9万棵树对抗极端高温。也就是说这两年洛杉矶确实是多种树的。 In 2019, Mayor Eric...","categories": ["News"],
        "tags": [],
        "url": "/book/news/2025/01/16/%E6%95%B0%E6%8D%AE%E5%85%9A-%E6%B4%9B%E6%9D%89%E7%9F%B6%E5%A4%A7%E7%81%AB.html",
        "teaser": null
      },{
        "title": "与AI合作：Skewed Distribution Demo",
        "excerpt":"本文记述与AI合作时遇到的小问题，那就是不了解数学原理的AI盲目调用API引起失效。 本次合作要完成的工作是源于一条新闻，那就是美国大使馆发布了一则新闻，说美国家庭平均净资产价值120万美元，而中位数仅为9.6万美元。 于是从统计学的角度上说，有了这两个数值，如果假定户均财富服从lognorm分布，那么整个国家的财富分布是可以估计出来的。这就是简单的点估计问题。 工作过程是这样的，AI帮我搭建了框架，但在检查代码时发现它遇到了自己解决不了的困难，我觉得这个困难与一开始的点估计问题相比似乎更有意思，所以本文是同时记录这两件事情。 中文部分是我写的，英文部分是AI在我改完的代码的基础上写的。我觉得AI写得比我好。 [toc] 论AI工具之不好用 首先，我最近频繁使用AI工具进行辅助编程，堪称事半功倍。但AI也有不好用的时候。 它不好用的场景很多，本文是其中比较典型的一种失效场景，我称为 不了解数学原理的AI盲目调用API引起失效。 具体来说，我想要是这样一个分布 lognorm， 它是一种由正态分布衍生的偏态的（skewed）分布。 \\[pdf = \\frac{1}{\\sigma x \\sqrt{2\\pi}} \\cdot \\exp\\left(-\\frac{(\\log(x) - \\mu)^2}{2 \\sigma^2}\\right)\\] 从概率密度函数可见，它在指数项与分母项中含有随机变量$X$，但偏移项$\\mu$只存在于分母项中。 而scipy工具中提供的对应API不支持这种$\\mu$参数，而是仅能通过loc变量进行整体偏移。 scipy-lognorm-doc 因此在我希望AI生成合适的lognorm概率密度曲线时，它遇到了困难，几乎无法完成我想要的工作。 于是我不得不重写这个方法（见code部分）。 def lognormal_pdf(x, mean, median): ''' Compute the PDF of a log-normal distribution given the mean and median. :param x: The x values...","categories": ["skewed","estimation","ai"],
        "tags": [],
        "url": "/book/skewed/estimation/ai/2025/01/22/skewed-distribution-demo.html",
        "teaser": null
      },{
        "title": "看懂历年新生儿数量变化",
        "excerpt":"国家统计局报道说2024年中国新生儿数量达到950万，手上又恰好有合适的历史数据，特写本文，希望能说明白历年新生儿数量变化的规律。 [toc] Visualizations Population of Males by Year Population of Females by Year 上图是比较完整的中国人口结构图，包含很多信息。其中的曲线代表不同年份出生的人口数量年度变化，曲线的颜色代表人口出生的年份。红点代表当年出生人口的数量，因此曲线总是以红色点开始，逐渐降低到零结束。图中不从红点开始的曲线代表1950年之前出生的人口，由于数据中查不到这些年份的信息因此省略。 图中灰色的点代表年龄为25和35岁的人口数量，蓝色点代表年龄在25-35岁这个范围内的人口数量平均值。在分析这些曲线时需要考虑横坐标，横坐标代表数据年份。以蓝色线的峰值为例，峰值出现在1998年处，这个年龄段内，男性（M）和女性（F）人口的按年龄平均数量在12-13百万之间。而当年出生的人口数量在8-9百万之间。 峰值与谷点1998 注意到1998年时，25-35岁的人口数量处于局部和全局峰值，但当年的出生人口接近局部谷点，这代表当时适龄生育人口的生育意愿并不强烈。 事实上下降并没有止于1998，而是继续下降直到2002年才出现反弹。 千禧宝宝 值得一提的是2000年所谓的“千禧宝宝”，这是个世纪之交的称谓上的好彩头。从生育数据上来看，它确实在新生儿数量下降的过程中出现了一个小的峰值。说明这样的彩头还是有助于提升当年生育意愿的。 有趣的是，2025年这批“千禧宝宝”恰好25岁，不知道他们为950万“龙宝宝”做了多少贡献。 1998之后 2002年9月施行的《中华人民共和国人口与计划生育法》明确规定，国家稳定现行生育政策，鼓励公民晚婚晚育，提倡一对夫妻生育一个子女;符合法律、法规规定条件的，可以要求安排生育第二个子女。 2013年11月，启动实施一方是独生子女的夫妇可生育两个孩子的政策，逐步调整完善生育政策，促进人口长期均衡发展。 2015年10月29日，全面实施一对夫妇可生育两个孩子政策，积极开展应对人口老龄化行动。 这导致了在此期间新生儿数量缓慢回升。之后就是持续下降。 我们以2015年为界，对之前的上升和之后的下降进行分别分析： 在2002-2015年这段时间里，适龄生育人口继续下降，但新生儿却增多了。这代表计划生育政策放开确实起到了“逆周期调节”的作用，生育意愿确有上升。 尤其是在2010年这个时间点，适龄生育人口与新生儿数量开始同步上升，如果生育意愿继续升高，甚至能保持不变的话，新生数量就不会跳水。 然而，时间到了2015年之后，适龄生育人口与新生儿数量同步下降，甚至新生儿数量下降远快于适龄生育人口数量的下降，下降的趋势直到2025年的现在才有所收敛。 交叉点1992 从这个点开始向左看，时间来到1992年，在这之前红色点高于蓝色点，在这之后二者交换。这说明以1992年为界，在这个时间点上，平均一名适龄人口恰好创造一名新生儿，在这之后生育比例降低，低于自然更替水平，长期会导致人口下降。难怪有人口学者以此为界进行研究。 1992年进入低生育水平 第二次生育潮1978-1990 再向左看，可以立即看到1978-1990年的婴儿潮，这是从1978年开始到1990年达到巅峰的长达12年的生育上升期。这个时期有一个明显特点那就是适龄生育人口与新生儿数量同步上升。这代表人们的生育意愿并没有提升，但由于基数大，导致新生儿增多。 第二次生育下降1970-1978 再向左看，这个阶段虽然适龄生育人口数量增加，但新生儿数量逐年下降，这代表他们的生育意愿却逐年下降。 第一次生育潮与三年自然灾害1950-1970 再向左看，由于建国带来的重大利好，在适龄生育人口数量变化不大的单提下，新生儿数量却连年增加。这说明生育意愿不断增强。尤其值得注意的是1952年的朝鲜战争并没有引起生育下降。而这个趋势在1959-1961年发生了明显下降，这个时间是三年自然灾害，属于不可抗力。这个时期不仅生育数量明显下降，新生儿死亡率也在提高，这说明了那个时候的艰难。灾害结束后增加的趋势立即恢复，一直持续到1970年。 值得注意的是马寅初的《新人口论》于1957年7月5日首次在《人民日报》上全文发表，但显然这个理论并没有阻碍生育高峰的前进。 以下是数据获取与分析绘图的细节。 Script Flow Diagram This script reads population data from...","categories": ["News"],
        "tags": [],
        "url": "/book/news/2025/01/26/%E7%9C%8B%E6%87%82%E5%8E%86%E5%B9%B4%E6%96%B0%E7%94%9F%E5%84%BF%E6%95%B0%E9%87%8F%E5%8F%98%E5%8C%96.html",
        "teaser": null
      },{
        "title": "不要轻信AI：拒绝采样方法的证明",
        "excerpt":"最近在啃DeepSeek的文章，其中提到了拒绝采样（Rejection Sampling）的LLM训练方法，于是顺手把这个方法丢给AI想看看如何证明。 但DeepSeek和ChatGPT给出的证明都不令人满意，因为它们都试图从联合概率的角度证明之，但RS问题实际是条件概率问题。 于是在给出提示词“不应该是联合概率，而应该是条件概率。”后，DeepSeek给出的正确的分析结果。 我觉得这个过程很值得记录下来，说明现阶段还是不能完全依赖AI进行数学上的证明。 [toc] 核心思路 拒绝采样是一种从复杂分布中生成样本的常用方法，尤其适用于难以直接采样的分布。 拒绝采样的目标是让被接受的样本服从目标分布 $ p(x) $。我们需要证明： \\(p_{\\text{accepted}}(x) = p(x)\\) 即，在已知样本被接受的条件下，$ x $ 的概率分布等于目标分布。 在拒绝采样的证明中，更严谨的方式应通过条件概率来分析接受样本的分布，而非直接对联合概率积分。 证明步骤 定义变量和条件概率： 候选样本 $ x $ 从提议分布 $ q(x) $ 中生成。 均匀随机数 $ u \\sim U(0, 1) $，用于决定是否接受 $ x $。 接受条件为：$ u \\leq \\frac{p(x)}{M \\cdot q(x)} $，其中 $ M...","categories": ["AI","Rejection-Sampling"],
        "tags": [],
        "url": "/book/ai/rejection-sampling/2025/02/07/rejection-sampling.html",
        "teaser": null
      },{
        "title": "使用Queue的Python阻塞器",
        "excerpt":"程序设计的核心不在键盘上，而在需求里。 本文就是针对这样一系列常见需求： 程序执行严重依赖其他功能是否就位。 程序间的通信遵循异步设计，其他功能的就位状态和等待时间完全随机。 但其他功能就位后，程序要以尽量小的延时立即恢复工作。 如果其他功能在timeout后仍然无效，那么需要忽略它并降级运行。 针对这些需求，我需要设计开销尽量小，延时尽量小的阻塞器。 我分别尝试了使用线程和同步机制在Python中实现的三种不同的阻塞方法。 实际测试中发现，使用Queue的阻塞器方法最为耐用。 如果您感兴趣的话，可以在这里找到我的代码 https://github.com/listenzcc/prototypes/tree/master/python%20blocker [toc] 阻塞工作原理 阻塞是一种同步访问共享资源或确保在继续之前满足某些条件的机制。以下是阻塞工作原理的一般概述： 启动阻塞：调用 wait_until 方法并传入作业 ID。该方法启动一个新线程来执行阻塞操作。 执行阻塞操作：新线程执行一些耗时的工作或等待满足某个条件（例如，获取锁、等待队列项或检查标志）。 检查条件：阻塞操作检查条件（锁、队列、标志）以确定是否可以继续。 响应：如果在指定的超时时间内满足条件，则发送响应。如果在满足条件之前发生超时，则发送超时响应。 以下 PlantUML 图表展示了阻塞机制的总体工作原理： 阻塞方法比较 阻塞方法 低延迟 超时支持 方法 Blocker1 是 否 RLock Blocker2 是 是 Queue Blocker3 否 是 Flag Blocker1：通过 RLock 阻塞 此方法使用可重入锁（RLock）来同步访问共享资源。wait_until 方法启动一个新线程来执行阻塞操作，同时尝试获取锁。block 方法立即执行一些耗时的工作，期间获取锁。在block方法释放锁之后，原线程获取锁，并将作业详情添加到 blocker_jobs 列表中。 注意：Blocker1...","categories": ["programming","python","blocker"],
        "tags": [],
        "url": "/book/programming/python/blocker/2025/02/13/Python-blocker-using-queue.html",
        "teaser": null
      },{
        "title": "二维分形曲线铺满二维平面",
        "excerpt":"本文以Koch分形曲线为例，展示了分形曲线的维度计算原理，并通过实验展示了随曲线维度的提高，分形曲线逐渐铺满二维平面的过程。   [toc]   分形的Koch曲线   分形是对重复现象的数学描述，在数学上的核心是度量。考虑一条连续曲线，一般看来，连续曲线是一维的，因为曲线没有宽度只能沿着两个方向伸展。在分形的视角下，用较大的单位度量它的长度时得到某一个值，在度量单位减小时，曲线的长度会变得更长。在极端情况下，随着度量单位的不断减小，曲线的长度能够从某一个小值扩展到无限长。   简单来说，如果测量的最小单元缩小s倍（即最小单位缩小为原来的1/s），而得到的曲线长度扩大为原来的n倍时，曲线的维度D满足   \\[s^{−D}=n\\\\D=−log_s⁡n\\]  代入下图的例子，采用Koch generator为例，左图的曲线维度为 $D_1=log_3{⁡4}\\approx 1.26$，右图在极端情况下的曲线维度为 $D_2=log_2{⁡4}=2$。一般情况下，右图的曲线维度在 $D_1$ 和 $D_2$ 之间。      二维曲线填充二维平面   接下来，我通过分形实验验证高维度曲线能够在有限的区域内“填充”整个二维平面。三张图分别代表曲线维度增加到2的渐变过程 $D_1 \\rightarrow D_2$。结果表明随着曲线维度的增高，其覆盖的面积越大，且当维度接近2时它几乎能够覆盖二维平面。实验代码位于我的在线笔记本 fractal dimension      注：由于我在代码中限制了分形的迭代次数，因此二维平面上包含一些空隙。但通过增加迭代次数可以发现分形曲线可以数学上稠密地占满整个二维平面。  ","categories": ["Fractal","Dimension"],
        "tags": [],
        "url": "/book/fractal/dimension/2025/02/20/fractal-curve-fill-2d-space.html",
        "teaser": null
      },{
        "title": "粗分辨率相机能否重现细分辨率图像",
        "excerpt":"摘要：本文探讨了如何通过低分辨率相机还原细分辨率图像信息的方法。通过对原始图像进行多样本加噪处理，并使用低分辨率相机进行多次拍摄，最终通过叠加拍摄结果来重建高分辨率图像。实验结果表明，该方法在RGB颜色空间的自然图像上也能取得较好的效果。   [toc]   问题描述   在实际场景中，图像是通过摄影形成的，原始的亮度信息是连续的：   \\[c_{real} \\in \\mathbb{R}\\]  这代表实际的颜色信息，其取值范围是实数域。在摄影过程中，相机可以看作是一种函数，将它们映射到一定范围内的自然数，这代表图像中的颜色具有一定的颜色分辨率：   \\[c_{sample} = f(c_{real}) \\in \\mathbb{N^+}\\]  在相机较为恶劣的极端情况下，采样分辨率往往较小，即较大范围内相近的真实颜色值（real）会映射为同一个采样值（sample）：   \\[f(x) = \\lfloor{x/k}\\rfloor\\]  其中，$k$ 代表采样分辨率。易知$k$值越大，代表采样间隔越大，图像颜色与原始值之间的差异越大，即相机越差。本文试图解决的问题是如何通过这台低精度相机还原出高分辨率的原始图像信息。   灰度色阶样例   这是一个较为极端的样例。假如我设计一条亮度线性变化的条带，亮度范围为$(50, 200)$。接下来使用一台$k=150/3$的相机，这台相机将原始条带映射为只有$3$种亮度。可见失真情况非常严重。      接下来，采用“多样本加噪”方法对原始图像进行加噪，再使用该相机对加噪后的图像进行拍摄。   \\[c_{sample}^i = f(c_{real} + \\varepsilon^i)\\]  最后对拍摄后的图像进行叠加，可见叠加后的图像能够在较高的精度上还原原始图像的高分辨率信息。   \\[c_{rebuild} = 1/N\\sum_{i=1}^{N}{c_{sample}^i}\\]  彩图示意   将上述方法应用在RGB颜色空间的自然图像上，结果仍然较好。      这说明使用颜色失真的相机进行色彩还原是可行的，但这种可行是建立在大数据的基础上。该方法建立在能够反复使用原始信息的基础上，通过不断加噪，并使用该相机进行观测，最终通过叠加信息进行色彩还原。   这里面隐含着使用大数据构造深度网络计算模型的思想。对于自然语言问题，任何精度的计算模型几乎都无法达到如此细粒度的语言和语义分辨率。但如果将计算机想象成没那么精确的相机，虽然每一次采样都是低精度的，但只要对同一客体观测的描述足够多，那么围绕它的信息量就足够大，这些大量的信息就有希望还原出自然语言的复杂分布模式。  ","categories": ["ComputerVision","ImageProcessing"],
        "tags": [],
        "url": "/book/computervision/imageprocessing/2025/02/26/random-image-corse-to-fine.html",
        "teaser": null
      },{
        "title": "计算机中的数",
        "excerpt":"数字是非常有趣的东西，在一维尺度上，只需要简单操作就能以任意高的密度描述整个实数轴。另外，当它与计算机结合时就更有趣了。 语言描述的数 数是抽象的概念，好在皮亚诺公理（Peano axioms）为自然数给出了较为严格的定义。原公理的内容很多，这里只把需要的内容摘录如下 $0$ is a natural number. A single-valued “successor” function $S$ . For every natural number $n$, $S(n)$ is a natural number. That is, the natural numbers are closed under $S$. For all natural numbers $m, n$, if $S(m) = S(n)$ , then $m = n$. That is, $S$ is an injection. For every natural number $n$, $S(n) =...","categories": [],
        "tags": ["Computer","Binary","Number"],
        "url": "/book/2025/03/07/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%B8%AD%E7%9A%84%E6%95%B0.html",
        "teaser": null
      }]
