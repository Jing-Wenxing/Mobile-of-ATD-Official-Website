# Mobile of ATD official website

## 项目使用

### 1、下载项目

  在Github中下载项目 [项目地址](https://github.com/Jing-Wenxing/Mobile-of-ATD-official-website)

  ![image-20200811120703831](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811120703831.png)

  ![image-20200811121055234](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811121055234.png)

### 2、环境配置

  - 选择自己的代码区域放置下载的压缩包，并解压

  ![image-20200811121011034](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811121011034.png)

  - 进入目录

  ![image-20200811121217092](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811121217092.png)

  - 在此目录打开cmd

  ![image-20200811121255433](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811121255433.png)

  - 执行命令 `npm install` 下载依赖

  ![image-20200811121401932](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811121401932.png)

  - 下载完成后，执行 `npm run serve` 运行项目

  ![image-20200811121721652](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811121721652.png)

  ![image-20200811121734463](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811121734463.png)

  ![image-20200811121746964](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811121746964.png)

  - 将local地址复制进浏览器，即可查看页面

  ![image-20200811121928169](https://raw.githubusercontent.com/Jing-Wenxing/Mobile-of-ATD-official-website/master/image/image-20200811121928169.png)

## 项目依赖

### Vant

```cmd
npm install -g @vue/cli
```

[依赖地址](https://youzan.github.io/vant/#/zh-CN/)

### Element

```cmd
npm i element-ui -S
```

[依赖地址](https://element.eleme.cn/#/zh-CN/component/installation)

### DPlayer

```cmd
npm install dplayer --save
```

[依赖地址](http://dplayer.js.org/guide.html)

## 组件使用

### video_preview

#### 示例使用

```vue
<template>
  <videopreview :column="false"
                :videodata="this.invideo_content"></videopreview>
</template>

<script>
import videopreview from '@/components/Video/video_preview'

export default {
  components: {
    videopreview,
  },
  data () {
    return {
      invideo_content: [
        {
          videoid: '视频编号',
          imgurl: '封面地址',
          title: '视频名称',
          author: '作者',
          activity: '播放量',
          description: '文案说明',
          videourl: '视频地址'
        },
      ]
    };
  },
}
</script>
```

#### 参数说明

|   参数    |      说明      |  类型   | 默认值 |
| :-------: | :------------: | :-----: | :----: |
|  column   |  行列布局转换  | boolean |   -    |
| videodata | 视频信息的数据 | object  |   -    |

#### 备注说明

|   参数    |             说明             |
| :-------: | :--------------------------: |
| videodata | 数组中的键值对应与示例中一致 |

### video_preview_item

#### 示例使用

```vue
<template>
  <videopreviewitem :final="true"
                    :videodata="invideo_content"></videopreviewitem>
</template>

<script>
import videopreviewitem from '@/components/Video/video_preview_item'

export default {
  components: {
    videopreviewitem,
  },
  data () {
    return {
      invideo_content: {
          videoid: '视频编号',
          imgurl: '封面地址',
          title: '视频名称',
          author: '作者',
          activity: '播放量',
          description: '文案说明',
          videourl: '视频地址'
      }
    };
  },
}
</script>
```

#### 参数说明

|   参数    |      说明      |  类型   | 默认值 |
| :-------: | :------------: | :-----: | :----: |
|   final   |  组件尺寸转换  | boolean |   -    |
| videodata | 视频信息的数据 | object  |   -    |

#### 备注说明

|   参数    |                             说明                             |
| :-------: | :----------------------------------------------------------: |
| videodata | 数据为单个对象，键值对应与示例中一致。本组件一般与 **video_preview** 连用，从上级目录中获取 |

### software_preview

#### 示例使用

```vue
<template>
  <softwarepreview :column="false"
                   :softwaredata="this.insoftware_content"></softwarepreview>
</template>

<script>
import softwarepreview from '@/components/Software/software_preview'

export default {
  components: {
    softwarepreview,
  },
  data () {
    return {
      invideo_content: [
        {
          softwareid: '软件编号',
          imgurl: '封面地址',
          title: '视频名称',
          subtitle: '副标题',
          activity: '下载量',
          description: '文案说明',
          videourl: '视频地址',
          activityitem: [评分数组]
        },
      ]
    };
  },
}
</script>
```

#### 参数说明

|   参数    |      说明      |  类型   | 默认值 |
| :-------: | :------------: | :-----: | :----: |
|  column   |  行列布局转换  | boolean |   -    |
| softwaredata | 软件信息的数据 | object  |   -    |

#### 备注说明

|   参数    |             说明             |
| :-------: | :--------------------------: |
| softwaredata | 数组中的键值对应与示例中一致 |

### software_preview_item

#### 示例使用

```vue
<template>
  <softwarepreviewitem :final="true"
                       :softwaredata="invideo_content"></softwarepreviewitem>
</template>

<script>
import softwarepreviewitem from '@/components/Software/software_preview_item'

export default {
  components: {
    softwarepreviewitem,
  },
  data () {
    return {
      invideo_content: [
        {
          softwareid: '软件编号',
          imgurl: '封面地址',
          title: '视频名称',
          subtitle: '副标题',
          activity: '下载量',
          description: '文案说明',
          videourl: '视频地址',
          activityitem: [评分数组]
        },
    };
  },
}
</script>
```

#### 参数说明

|   参数    |      说明      |  类型   | 默认值 |
| :-------: | :------------: | :-----: | :----: |
|   final   |  组件尺寸转换  | boolean |   -    |
| softwaredata | 视频信息的数据 | object  |   -    |

#### 备注说明

|   参数    |                             说明                             |
| :-------: | :----------------------------------------------------------: |
| softwaredata | 数据为单个对象，键值对应与示例中一致。本组件一般与 **software_preview** 连用，从上级目录中获取 |

### microservice_preview

#### 示例使用

```vue
M<template>
  <microservicepreview :column="false"
                   :microservicedata="this.inmicroservice_content"></microservicepreview>
</template>

<script>
import microservicepreview from '@/components/Microservice/microservice_preview'

export default {
  components: {
    microservicepreview,
  },
  data () {
    return {
      invideo_content: [
        {
          microserviceid: '微服务编号',
          imgurl: '封面地址',
          title: '视频名称',
          subtitle: '副标题',
          activity: '下载量',
          description: '文案说明',
          videourl: '视频地址',
          activityitem: [评分数组]
        },
      ]
    };
  },
}
</script>
```

#### 参数说明

|       参数       |       说明       |  类型   | 默认值 |
| :--------------: | :--------------: | :-----: | :----: |
|      column      |   行列布局转换   | boolean |   -    |
| microservicedata | 微服务信息的数据 | object  |   -    |

#### 备注说明

|       参数       |             说明             |
| :--------------: | :--------------------------: |
| microservicedata | 数组中的键值对应与示例中一致 |

### microservice_preview_item

#### 示例使用

```vue
<template>
  <microservicepreviewitem :final="true"
                       :microservicedata="invideo_content"></microservicepreviewitem>
</template>

<script>
import microservicepreviewitem from '@/components/M	icroservice/microservice_preview_item'

export default {
  components: {
    microservicepreviewitem,
  },
  data () {
    return {
      invideo_content: [
        {
          microserviceid: '微服务编号',
          imgurl: '封面地址',
          title: '视频名称',
          subtitle: '副标题',
          activity: '下载量',
          description: '文案说明',
          videourl: '视频地址',
          activityitem: [评分数组]
        },
    };
  },
}
</script>
```

#### 参数说明

|       参数       |      说明      |  类型   | 默认值 |
| :--------------: | :------------: | :-----: | :----: |
|      final       |  组件尺寸转换  | boolean |   -    |
| microservicedata | 视频信息的数据 | object  |   -    |

#### 备注说明

|       参数       |                             说明                             |
| :--------------: | :----------------------------------------------------------: |
| microservicedata | 数据为单个对象，键值对应与示例中一致。本组件一般与 **microservice_preview** 连用，从上级目录中获取 |

### search

#### 示例使用

```vue
<template>
  <search :isvideo="true"
          :issoftware="true"
          :ismicroservice="true"></search>
</template>

<script>
import search from '@/components/Search/search'

export default {
 components: {
    search,
  },
}
</script>

<style>
</style>
```

#### 参数说明

|    参数    |      说明      |  类型   | 默认值 |
| :--------: | :------------: | :-----: | :----: |
|  isvideo   |  启用视频搜索  | boolean |   -    |
| issoftware | 启用软件搜索 | boolean  |   -    |
| ismicroservice | 启用微服务搜索 | boolean  |   -    |

## 完成内容

### 全局

  - **【08.10】**：基础部分完成
  - **【08.11】**：修改了底部Tabbar的布局问题和被软键盘影响

### 组件

#### 视频部分

- **【08.12】**：视频页预览列表组件
- **【08.12】**：视频页预览单项组件
- **【08.12】**：视频页播放页面

#### 软件部分

- **【08.12】**：软件页预览列表组件

- **【08.12】**：软件页预览单项组件

- **【08.12】**：软件页下载页面

#### 微服务部分

  - **【08.13】**：微服务预览列表组件
  - **【08.13】**：微服务预览单项组件
  - **【08.13】**：微服务跳转页面

#### 搜索部分

  - **【08.13】**：搜索组件

### 首页

  - **【08.11】**：项目使用教程
  - **【08.11】**：首页初始页面的组件设计与布局
  - **【08.13】**：首页内容基本完成（除轮播图跳转、活动页跳转、后端接入）

### 服务

#### 视频部分

- **【08.13】**：内容基本完成（除后端接入）

