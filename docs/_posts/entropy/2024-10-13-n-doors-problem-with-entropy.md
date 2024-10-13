---
layout: single
title: Entropy explains n-doors problem
date: 2024-10-13
author: listenzcc
categories: Entropy
---

这是一个思想实验（或者说是游戏），游戏有 N 扇门，其中某一扇是正确的门。游戏有玩家和主持人参与，主持人知道正确的门，玩家的任务是找到正确的门。游戏进行三轮，第一轮由玩家选择一扇门，第二轮主持人在没有选择的 N-1 扇门中打开 N-2 扇确定不是正确的门，第三轮由玩家选择是否更换自己的选择，即选择没有被主持人打开的那扇门。

对于这个实验的解释众说纷纭，我在这里提供一个信息量的视角。结果似乎说明，如果玩家选择更换的话，他取胜的概率会增加，N 越大胜率增加的就越多。

[toc]

## 玩家视角

玩家面对的初始问题记为`问题1`，面前有$n$扇门，有且仅有一扇门是正确的门，由于他不知道门后的任何信息，因此每一扇门为正确门的概率相同均为

$$
p_0 = \frac{1}{n}
$$

易见，`问题1`的信息熵为

$$
H_1 = n \cdot (-p_0 \log{p_0}) = \log{n}
$$

在做出选择后，他的问题转换成了`问题2`，将$n$扇门分成两组，`组A`是选择的门，`组B`是其他$n-1$扇门。易见，正确门在`组A`和`组B`中的概率分别为

$$
\begin{cases}
p_A = \frac{1}{n}\\
p_B = \frac{n-1}{n}
\end{cases}
$$

此时`问题2`的信息熵为

$$
H_2 = \frac{1}{n}\log{n}+\frac{n-1}{n}\log{\frac{n}{n-1}}
$$

## 主持人视角

主持人的角色是在玩家做出决策后介入的，此时的局势有两种可能情况

- `事件A`发生，即正确的门在`组A`中；
- `事件B`发生，即正确的门在`组B`中。

当`事件A`发生时，主持人可以任意选择$n-2$扇门打开，但这些操作无法提供任何信息，因为每扇门都不是正确的门，即

$$
H_a=0
$$

当`事件B`发生时，主持人要小心地避开正确的门，因此他实际上提供了，或者说他的操作需要他具有的信息量为

$$
H_b = \log{n-1}
$$

综合起来可以得到主持人提供的信息量为

$$
H_B = \frac{n-1}{n}\log{n-1}
$$

## 问题的转化

注意到恒等关系

$$
H_1 = H_2 + H_B
$$

即主持人的操作提供的信息量能够将`问题1`转换为`问题2`，也就是说只要玩家在主持人操作后对自己的决策进行修改，那么他选择到正确门的概率就得到了提升

$$
p_A \rightarrow p_B
$$