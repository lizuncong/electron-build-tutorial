const fs = require("fs");
const path = require("path");
const asar = require("@electron/asar");

const src = "src/"; // 源目录
const packageJsonPath = path.join(path.dirname(src), "package.json"); // 获取与 src 同级的 package.json 路径
const dest = "app.asar"; // 目标 asar 文件
const tempDir = "app/"; // 临时目录

// 创建临时目录
fs.mkdirSync(tempDir, { recursive: true });

// 复制 src 目录到临时目录
fs.cpSync(src, path.join(tempDir, path.basename(src)), { recursive: true });

// 复制 package.json 文件到临时目录
fs.copyFileSync(packageJsonPath, path.join(tempDir, "package.json"));

// 对临时目录进行打包
asar.createPackage(tempDir, dest).then((res) => {
  console.log("done.", res);

  // 打包完成后删除临时目录
  fs.rmdirSync(tempDir, { recursive: true });
});
