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

### videopreviewitem

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

### videopreviewitem

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

### 首页

  - **【08.11】**：项目使用教程
  - **【08.11】**：首页初始页面的组件设计与布局

