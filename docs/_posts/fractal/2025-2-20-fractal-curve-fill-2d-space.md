---
layout: single
title: 二维分形曲线铺满二维平面
date: 2025-2-20
author: listenzcc
categories: Fractal Dimension
---

本文以Koch分形曲线为例，展示了分形曲线的维度计算原理，并通过实验展示了随曲线维度的提高，分形曲线逐渐铺满二维平面的过程。

[toc]

## 分形的Koch曲线

分形是对重复现象的数学描述，在数学上的核心是度量。考虑一条连续曲线，一般看来，连续曲线是一维的，因为曲线没有宽度只能沿着两个方向伸展。在分形的视角下，用较大的单位度量它的长度时得到某一个值，在度量单位减小时，曲线的长度会变得更长。在极端情况下，随着度量单位的不断减小，曲线的长度能够从某一个小值扩展到无限长。

简单来说，如果测量的最小单元缩小`s`倍（即最小单位缩小为原来的`1/s`），而得到的曲线长度扩大为原来的`n`倍时，曲线的维度D满足

$$s^{−D}=n\\D=−log_s⁡n$$

代入下图的例子，采用[Koch generator](https://fractalfoundation.org/OFC/OFC-10-2.html "Koch generator")为例，左图的曲线维度为 $D_1=log_3{⁡4}\approx 1.26$，右图在极端情况下的曲线维度为 $D_2=log_2{⁡4}=2$。一般情况下，右图的曲线维度在 $D_1$ 和 $D_2$ 之间。

![koch-generator](/assets/fractal/koch-generator.png)

## 二维曲线填充二维平面

接下来，我通过分形实验验证高维度曲线能够在有限的区域内“填充”整个二维平面。三张图分别代表曲线维度增加到2的渐变过程 $D_1 \rightarrow D_2$。结果表明随着曲线维度的增高，其覆盖的面积越大，且当维度接近`2`时它几乎能够覆盖二维平面。实验代码位于我的在线笔记本
[fractal dimension](https://observablehq.com/@listenzcc/fractal-dimension "fractal-dimension")

![koch-filling](/assets/fractal/koch-filling.png)

注：由于我在代码中限制了分形的迭代次数，因此二维平面上包含一些空隙。但通过增加迭代次数可以发现分形曲线可以数学上稠密地占满整个二维平面。
