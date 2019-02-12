/**
 * 在githubg官网创建一个新的仓库
 * 下载git工具
 * 安装
 * 第一次使用时, 需要在控制台输入
 * git config --global user.name "qf-wang"
 * git config --global user.email "532344054@qq.com"
 * 
 * 获取秘钥
 * ssh-keygen -t rsa -C "532344054@qq.com"
 * 查找秘钥
 * 在C:\Users\Administrator\.ssh
 * 
 * 到github官网的setting中去添加秘钥
 * 
 * 克隆项目到本地
 * `git clone 项目地址`
 * 
 * 每一个仓库有一个.gitw文件夹（不要去触碰）
 * 
 * 上传代码
 * git add . (添加所有修改的文件)
 * git commit -m '' 对这一次提交的描述（添加纪录）
 * git push origin master  把代码上传到主分支
 * 
 * 切记:
 *  完成一个小功能就add, commit, push, pull
 * 
 * 拉取最新代码
 * 每一次书写代码之前，都要先pull一下每一次push代码之前也要先pull一下
 * git pull origin master
 * 
 * 多人不能同时修改一个文件
 * 
 * 
 * 
 * git status
 * 查看工作树的状态
 * 
 * 打开github网站,查看是否更新成功
 * 
 * 
 * 
 * 添加合作者
 * 在项目的setting中Collaborators栏中添加
 * 
 * 
 */