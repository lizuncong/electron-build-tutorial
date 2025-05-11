## 手动打包electron应用
如果您更喜欢手动操作，有两种方法可以分发应用程序：

- 使用预构建可执行文件
- 应用程序源代码存档

### 一、使用预构建可执行文件
去electron的[Github Release](https://github.com/electron/electron/releases)下载预构建可执行文件。

#### 1.1 window系统
如果电脑是window系统

![image](./images/manual_02.png)

所以下载下面的版本

![image](./images/manual_01.png)

下载完成后，解压，解压后的文件如下：

![image](./images/manual_03.png)

在resources目录下新建一个app，然后把我们的代码放在这里

![image](./images/manual_04.png)

然后点击electron.exe就可以启动我们的应用

![image](./images/manual_05.png)


#### 1.2 mac系统
需要确认mac处理器是ARM64架构还是x64架构。可以通过选择mac的“关于本机”，在这个窗口中，你会看到 “芯片” 或 “处理器” 信息。如果显示的是 “Apple 芯片”（如 M1、M2 等），那么你的 Mac 是 ARM64 架构。如果显示的是英特尔（Intel）处理器，那么它就是 x64 架构。

由于我的mac是英特尔处理器，因此选择下载下面的zip

![image](./images/manual_09.jpg)

解压缩后，右键显示包内容

![image](./images/manual_11.jpg)

在包内容中的Contents/Resources/目录下新建一个app文件夹，存放我们的源代码：

![image](./images/manual_10.jpg)

双击Electron，就可以启动我们的应用了

![image](./images/manual_12.jpg)

### 二、打包应用源码
如果你没有使用 Parcel 或 Webpack 之类的构建工具，为了减轻拷贝源文件的分发压力，你可以把你的 app 打包成一个 asar 包来提升在 Windows 等平台上读取文件的性能。

为了使用一个 asar 档案文件代替 app 文件夹，你需要修改这个档案文件的名字为 app.asar ， 然后将其放到 Electron 的资源文件夹下，然后 Electron 就会试图读取这个档案文件并从中启动。

首先运行 `npm install --engine-strict @electron/asar` 安装[asar](https://github.com/electron/asar)

然后我们写个脚本，将src和pacakge.json一起打包成一个app.asar文件：

![image](./images/manual_06.png)

然后在package.json中添加打包命令：


![image](./images/manual_07.png)

运行 `npm run asar`，即可在src同级目录下看到一个app.asar文件了

#### 2.1 window系统
复制生成的app.asar文件，放到electron的resources目录下：

![image](./images/manual_08.png)

点击electron.exe可以看到应用启动了。

#### 2.2 mac系统

复制生成的app.asar文件，放到electron的resources目录下：

![image](./images/manual_13.jpg)


### 第三步：使用下载好的可执行文件进行重新定制

将您的应用程序捆绑到Electron后，您可能需要在把应用分发给用户前将Electron进行重新定制

Windows: 您可以将electon.exe重命名为您喜欢的任何名称，也可以通过rcedit编辑其图标和其他信息。

Linux： 您可以将 electron 可执行文件重命名为您喜欢的任何名称。

macOS： 您可以将 Electron.app 重命名为所需的任何名称，并且还必须 以下 文件中的 CFBundleDisplayName， CFBundleIdentifier 和 CFBundleName 字段重命名：

Electron.app/Contents/Info.plist
Electron.app/Contents/Frameworks/Electron Helper.app/Contents/Info.plist
你也可以重命名帮助程序以避免它在系统活动监视器中显示为Electron Helper， 但是请确保你已经修改了帮助应用的可执行文件的名字。

一个重命名后的应用程序的结构可能是这样的

#### window定制