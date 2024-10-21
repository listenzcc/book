---
layout: single
title: Boltzmann distribution
date: 2024-10-21
author: listenzcc
categories: BoltzmannDistribution Entropy
toc: true
---

平均能量约束下，使熵达到极大值的分布是`Boltzmann`分布。
这个结论非常有意思，因此本文将其证明简要地记录下来。

[toc]

## 概率与信息熵

假设系统中包含大量元素，每个元素处于某个状态$i$，状态服从概率分布$p_i$。因此系统的信息熵为

$$
H = -\sum_i^N p_i \log{p_i}
$$

## 约束条件

考虑任意可测函数$f(\varepsilon_i)$，它在全部状态下都有良好的性质，满足

$$
\sum_i^N p_i f(\varepsilon_i) = \text{Const.}
$$

其中，$\varepsilon_i$代表该状态下的状态函数。利用爱因斯坦求和约定（即上下标的$i$取遍全部值并求和），上式可以简写为，

$$
p_if^i = \sum_i^N p_i f(\varepsilon_i)
$$

这样的函数可以有多个，简记为

$$
\begin{cases}
c_1 = p_i f_1^i\\
c_2 = p_i f_2^i\\
\dots \\
c_m = p_i f_m^i
\end{cases}
$$

## 求极大熵

采用拉格朗日法求熵的极值，构造拉格朗日函数

$$
L = H + \lambda^j \cdot (p_i f_j^i-c_j)
$$

展开得

$$
\tag{1} L = -\sum_i^N p_i \log{p_i}  +\lambda^j \cdot (p_i f_j^i-c_j)
$$

对任意$p_i$求偏导，得

$$
\frac{\partial}{\partial p_i}L = -\log{p_i} - 1 + \lambda^j f_j^i
$$

令其值为$\frac{\partial}{\partial p_i}L  = 0$，可得

$$
\log{p_i}=\lambda^j f_j^i - 1
$$

整理得

$$
\tag{2} p_i \propto \exp{\lambda^j f_j(\varepsilon_i)}
$$

另外，对`(1)`式求二阶偏导，得

$$
\frac{\partial^2}{\partial p_i^2} L = - \frac{1}{p_i}
$$

由于该项恒为负，因此**极值为极大值**。

## 平均能量约束下的分布

将$\varepsilon_i$视为该状态下的能量值，对平均能量进行约束

$$
p^i \varepsilon_i=\text{Const.}
$$

此时利用`(2)`式可知

$$
p_i \propto \exp{\lambda \cdot\varepsilon_i}
$$

易见该式为`Boltzmann`分布，即平均能量约束下，使熵达到极大值的分布是`Boltzmann`分布。

[Boltzmann distribution](https://en.wikipedia.org/wiki/Boltzmann_distribution)
