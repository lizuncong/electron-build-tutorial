## 手动打包electron应用

### 第一步：使用预构建可执行文件
去electron的[Github Release](https://github.com/electron/electron/releases)下载预构建可执行文件。

比如我的电脑是window系统

![image](./images/manual_02.png)

所以下载下面的版本

![image](./images/manual_01.png)

下载完成后，解压，解压后的文件如下：

![image](./images/manual_03.png)

在resources目录下新建一个app，然后把我们的代码放在这里

![image](./images/manual_04.png)

然后点击electron.exe就可以启动我们的应用

![image](./images/manual_05.png)


### 第二步：打包应用源码
如果你没有使用 Parcel 或 Webpack 之类的构建工具，为了减轻拷贝源文件的分发压力，你可以把你的 app 打包成一个 asar 包来提升在 Windows 等平台上读取文件的性能。

为了使用一个 asar 档案文件代替 app 文件夹，你需要修改这个档案文件的名字为 app.asar ， 然后将其放到 Electron 的资源文件夹下，然后 Electron 就会试图读取这个档案文件并从中启动。

首先运行 `npm install --engine-strict @electron/asar` 安装[asar](https://github.com/electron/asar)

然后我们写个脚本，将src和pacakge.json一起打包成一个app.asar文件：

![image](./images/manual_06.png)

然后在package.json中添加打包命令：


![image](./images/manual_07.png)

运行 `npm run asar`，即可在src同级目录下看到一个app.asar文件了，复制这个文件，放到刚刚下载的electron的resources目录下：

![image](./images/manual_08.png)

点击electron.exe可以看到应用启动了。