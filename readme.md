## 简介
本项目用于研究学习使用Electron Forge和Electron Builder对Electron应用打包构建、以及结合Github action做自动化部署、自动更新

## 为什么 Electron 是 devDependency
您的应用需要运行 Electron API，因此将Electron 放在 devDependency听上去可能有点反直觉。 实际上，打包后的应用本身会包含 Electron 的二进制文件，因此不需要将 Electron 作为生产环境依赖。


## 分支及用途
- feature/manual-build。学习手动打包Electron应用
- feature/forge。学习使用forge打包Electron应用

## 文档
- [Electron Forge和Electron Builder的对比分析](./docs/forge和builder的对比.md)
- [使用Electron Builder打包应用](./docs/使用electron%20build打包应用.md)
- [使用Electron Forge打包应用](./docs/使用electron%20forge打包应用.md)
- [手动打包electron应用](./docs/手动打包electron应用.md)