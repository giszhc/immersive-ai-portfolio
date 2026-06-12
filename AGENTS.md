# AGENTS.md

本文件给在本项目中工作的 Codex/Agent 使用。项目是一个 Vite + React + TypeScript + Tailwind 的双语 AI 个人主页，内容、交互和视觉资源都比较集中，修改时优先保持现有结构。

## 项目概览

- 应用入口：`src/main.tsx`
- 页面主组件：`src/App.tsx`
- 双语内容数据：`src/data/profile.ts`
- 全局样式：`src/styles.css`
- 测试文件：`src/App.test.tsx`
- 测试初始化：`src/test/setup.ts`
- 本地图片资源：`public/images/`
- 构建输出：`dist/`，不要手工编辑

## 常用命令

- 安装依赖：`pnpm install`
- 本地开发：`pnpm dev`
- 单次测试：`pnpm test`
- 监听测试：`pnpm test:watch`
- 生产构建：`pnpm build`
- 预览构建产物：`pnpm preview`

在声称修改完成前，至少运行：

```bash
pnpm test && pnpm build
```

如果改动影响响应式布局、弹窗、图片或视觉效果，还需要在浏览器中检查桌面和移动端宽度。

## 内容约定

- 个人资料、项目、能力、时间线和联系信息都放在 `src/data/profile.ts`。
- `cn` 和 `en` 两套内容应保持结构一致，新增字段时同步更新 `ProfileContent` 类型和两种语言的数据。
- 项目图片路径必须使用本地资源，例如 `./images/project-ai-assistant.png`，不要改成远程 URL。
- 默认语言是中文；切换按钮的可访问名称由 `content.ui.switchLanguage` 提供，测试依赖这一行为。

## 组件与交互约定

- `App.tsx` 负责语言切换、导航、主页区块和项目弹窗状态。
- 项目卡片是 `<button>`，点击后打开详情弹窗。
- 弹窗使用 `role="dialog"`、`aria-modal="true"` 和项目标题作为可访问名称。
- 关闭弹窗需要同时支持关闭按钮、点击遮罩和 `Escape` 键。
- 图标优先使用 `lucide-react`，装饰性图标需要设置 `aria-hidden="true"`。

## 样式约定

- 主要样式写在 `src/styles.css`，Tailwind 工具类只用于少量布局基线。
- 继续使用当前调性：深色 AI 工作台首屏、本地项目图、低圆角卡片、克制的绿色/蓝色/琥珀色点缀。
- 不要添加外部字体、远程图片或纯装饰性渐变元素，除非用户明确要求。
- 固定格式元素要保持响应式约束，避免移动端文字溢出、按钮挤压或横向滚动。
- 若新增交互动画，必须尊重 `prefers-reduced-motion`。

## 测试约定

- 使用 Vitest 和 Testing Library。
- 修改语言切换、项目弹窗、图片路径或数据结构时，同步更新 `src/App.test.tsx`。
- 测试应面向用户可见行为和可访问名称，不要依赖脆弱的 DOM 层级。
- 构建配置中 `test` 字段来自 `vitest/config`，不要改回从 `vite` 导入 `defineConfig`。

## 依赖与包管理

- 使用 `pnpm`，不要混用 npm 或 yarn。
- 新增依赖前先确认现有依赖是否已经能满足需求。
- 前端图标使用 `lucide-react`。
- 不要提交或手工修改 `node_modules/`、`dist/`。

## 工作方式

- 先阅读相关文件再修改，避免凭空重写现有结构。
- 保持改动范围小，不做与请求无关的重构。
- 如果改动视觉页面，优先实际打开本地页面检查，而不只依赖构建通过。
- 如果遇到失败，先复现并定位根因，再修改。
