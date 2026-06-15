---
title: 在 Mac 上玩《尼尔：机械纪元》完美指南 — Wine/D3DMetal + 汉化 + 存档替换
description: 从零到一百，M4 Mac 上通过 Wine 运行 NieR:Automata 的完整记录，包含图形性能调优、龙版汉化安装、存档跨账户替换的实操经验。
date: 2026-06-11T23:00:00+08:00
categories: [技术]
tags:
  - NieRAutomata
  - macOS
  - Wine
  - Gaming
  - D3DMetal
  - 汉化
---

# 在 Mac 上玩《尼尔：机械纪元》完美指南

> 本文记录了在 Apple Silicon Mac (M4) 上通过 Wine/D3DMetal 运行 NieR:Automata Game of the YoRHa Edition 的完整配置过程，包含性能调优、中文汉化、存档替换等实操经验。

## 环境概览

- **硬件**: Mac mini M4 (10核 GPU, 16GB 统一内存)
- **显示器**: 双 1920×1080 @ 100Hz
- **游戏版本**: NieR:Automata Game of the YoRHa Edition (CODEX 版)
- **运行方式**: 割麦网 Kegworks Wine 封装 (D3DMetal 渲染)
- **图形接口**: DirectX → D3DMetal (Metal 3)

## 一、Wine 封装优化

### Info.plist 关键配置

割麦网的 Wine 封装默认配置已经很合理，不需要大改。只需要注意以下几点：

| 键 | 推荐值 | 说明 |
|---|---|---|
| `D3DMETAL` | `1` | DirectX→Metal，M 系列芯片最优选择 |
| `DXVK` | `0` | 不走 Vulkan 套娃路径 |
| `WINEESYNC` | `1` | 启用 ESYNC，提升 Wine 性能 |
| `WINEMSYNC` | `1` | 启用 MSYNC，与 ESYNC 协同 |
| `METAL_HUD` | `0` | 关闭 Metal 调试覆盖层，节省 ~1-3% GPU |

> **踩坑**: 不要随意修改 `METAL_HUD` 以外的其他 D3DMetal 参数，默认值就是最稳定的。

### config.ini (游戏内配置)

配置文件位置（Wine 下）：
`drive_c/users/<user>/AppData/Roaming/PlatinumGames/NierAutomata/config.ini`

```
[GENERAL]
LOD_FORCE=1000       ; 修复远景纹理模糊（默认 -1 会导致 LOD pop-in）
AntiAliasing=2       ; SMAA — MSAA 在该游戏有已知 bug
AmbientOcclusionQuality=2
ShadowQuality=2
TextureQuality=2
BloomQuality=2
FPS=1                ; 0=30, 1=60（游戏原生上限）
VSync=0              ; D3DMetal 下垂直同步会增加延迟
ScreenWidth=1920
ScreenHeight=1080
```

> **注意**: `ScreenWidth`/`ScreenHeight` 的 Section 必须写对。实测部分设置放在错误的 Section 下会导致游戏启动时显示器黑屏。

## 二、中文汉化 — 龙版汉化

目前最好的方案是 **龙版汉化**（WLong 制作），通过提取 Switch 版官方简中/繁中制作。

### 优势

- 官方翻译，角色名/物品名标准化，便于查攻略
- 完整覆盖 DLC 剧情
- 持续更新（2024 甲辰龙年版）

### 两个版本

| 版本 | 特点 |
|---|---|
| **基础版** | 一比一移植官方翻译，原汁原味 |
| **增强版** ✅ | 重制 4K 兼容字体、修复官方错别字、补全未翻译部分、主菜单汉化 |

### 安装方法

1. 下载 `龙版汉化增强版.zip`
   - [123云盘](https://www.123865.com/s/Ux9Fjv-3IgZh?pwd=kZiL#) 提取码: kZiL
   - [百度云盘](https://pan.baidu.com/s/1Rkp3olc36IutmCstug2SLg) 提取码: n8vp
2. 备份游戏 `data/` 目录下的 `data100.cpk` 和 `data201.cpk`
3. 将汉化包中的同名文件覆盖到 `data/` 目录
4. 启动游戏 → Options → Language → 简体中文

> **兼容性**: 兼容 Steam、微软商店、SteamDeck、以及学习版。本质只是替换 CPK 数据文件，不涉及 exe/dll 修改。

### 回滚方法

```sh
# 进入游戏 data 目录
rm data100.cpk data201.cpk           # 删除汉化文件
mv data100.cpk.original data100.cpk  # 恢复备份
mv data201.cpk.original data201.cpk
```

## 三、存档替换 — 特征码修正

NieR:Automata 的存档绑定了 SteamID64，直接复制别人存档会无法识别。特征码修正方法如下：

### 存档位置

**Steam/学习版通用路径**（Wine 下被 Symlink 映射到本地）：
```
~/Documents/My Games/NieR_Automata/
```

包含文件：
- `SlotData_0.dat` / `SlotData_1.dat` / `SlotData_2.dat` — 三个存档槽
- `GameData.dat` — 游戏元数据（与存档槽联动）
- `SystemData.dat` — 系统设置

### 特征码替换方法

1. 启动游戏过一次序章，在任意槽位保存，生成与当前 AccountId 绑定的存档
2. 读取生成的存档，提取**前 12 字节**作为特征码

```
SlotData:  [00 00 00 00] [8字节 SteamID64]
GameData:  [8字节 SteamID64] （无前导 4 个 0）
SystemData: [8字节 SteamID64] （同上）
```

3. 下载的目标存档替换前 12 字节：

```python
with open('你的存档.dat', 'rb') as f:
    prefix = f.read(12)  # 你的特征码

with open('别人的存档.dat', 'rb') as f:
    data = f.read()

patched = prefix + data[12:]

with open('SlotData_0.dat', 'wb') as f:
    f.write(patched)
```

4. 如果替换后游戏仍显示序章，则 `GameData.dat` 也需要同步替换（同样改 8 字节 SteamID64 前缀）

> **踩坑**: 最早我只改了 `CODEX/524220/remote/` 下的文件，但游戏**实际读写的目录**是 `~/Documents/My Games/NieR_Automata/`（Steam 标准路径）。CODEX 的 remote 目录只管模拟器配置，存档要走 Steam 路径。

## 四、多显示器问题

Wine + D3DMetal 在双屏环境下可能出现游戏跨屏/黑屏的问题。

### 症状

- 游戏启动时所有显示器黑屏
- 游戏跨屏显示在两个显示器上

### 解决方案

1. **优先方案**: 进游戏 Options → Display → Full Screen，或按 `Alt+Enter` 切换
2. **备用方案**: macOS 系统设置 → 显示器 → 镜像显示，让两个屏显示相同内容
3. **终极方案**: 给 Kegworks 封装添加 VirtualDesktop 参数（部分版本支持）

> **不要**因为黑屏就去修改 `config.ini` 的显示参数，那会让问题更糟。先还原到初始配置。

## 五、性能表现

| 场景 | M4 (10核 GPU) @ 1080p |
|---|---|
| 野外探索 | 56-60 FPS |
| 战斗场景 | 52-60 FPS |
| 游乐场/密集区域 | 48-55 FPS |
| 加载时间 (SSD) | < 5 秒 |

游戏原生锁 60 FPS，在 M4 上绝大部分场景能稳 60。如果遇到掉帧，优先降低 `ShadowQuality` 到 1 (Medium)。

## 六、工具推荐

- **龙版汉化**: https://gitee.com/WLongWLong/nier_chinese — 还在维护的汉化项目
- **Automata-LodMod**: NexusMods 上的 LOD 修复补丁，进一步修复远景和 AO 问题
- **FAR (Fix Automata Resolution)**: 经典模组，增加全局光照和分辨率缩放选项
- **NieRAutomata_SteamID64_Editor**: 图形化存档 SteamID 修改工具

## 七、完整配置参考

### 游戏目录结构

```
NieR Automata™.app/
├── Contents/
│   ├── Info.plist          ← Wine 封装配置
│   ├── MacOS/Kegworks      ← Wine 启动器
│   └── SharedSupport/
│       ├── prefix/
│       │   └── drive_c/
│       │       └── NieR Automata Game of the YoRHa Edition/
│       │           ├── NieRAutomata.exe
│       │           ├── steam_emu.ini     ← CODEX 模拟器配置
│       │           ├── data/             ← CPK 游戏数据
│       │           └── ...
│       └── wine/            ← Wine 运行时
└── ...
```

### 存档位置映射

Wine Symlink 将 `My Documents` → `~/Documents`，所以：
- 游戏内路径: `C:\Users\<user>\Documents\My Games\NieR_Automata`
- 实际路径: `~/Documents/My Games/NieR_Automata`

---

*最后更新: 2026-06-11*
