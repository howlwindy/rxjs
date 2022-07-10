<script setup lang="ts">
import { defineComponent, ref } from 'vue'

interface IData {
  title: string
  info?: string
  children?: IData[]
}

const data = ref<IData[]>([
  {
    title: 'Glossary And Semantics',
    children: [
      {
        title: 'Major Entities',
        info: '与observable有关',
        children: [
          {
            title: 'Consumer',
            info: '订阅了observable或是被通知next/error/complete的对象',
          },
          { title: 'Producer', info: '任何给subscription推送值的对象' },
          {
            title: 'Subscription',
            info: 'consumer正在观察producer推送值的契约',
          },
          {
            title: 'Observable',
            info: '通过subscribe将observer作为consumer连接producer最终变为subscription的模板',
          },
          {
            title: 'Observer',
            info: 'consumer的表现，notification的next/error/complete都是observer',
          },
        ],
      },
      {
        title: 'Major Actions',
        info: '发生在Major Entities之间的动作或事件',
        children: [
          {
            title: 'Subscribe',
            info: 'consumer请求observable设置一个subscription来观察producer的行为',
          },
          {
            title: 'Finalization',
            info: '在error/complete/unsubscription时清理producer使用的资源',
          },
          {
            title: 'Unsubscription',
            info: 'consumer告诉producer不在接收，导致finalization',
          },
          {
            title: 'Observation',
            info: 'consumer在subscription对next/error/complete/notifications的反应',
          },
          {
            title: 'Observation chain',
            info: '当一个observable用另一个observable作为producer，多个observable会单向通知最终的consumer',
          },
          {
            title: 'Next',
            info: '总会在subscription时当consumer已observed时push值，但不会在finalization发生',
          },
          {
            title: 'Error',
            info: '当producer遇到问题时通知consumer，不会在finalization触发',
          },
          {
            title: 'Complete',
            info: '当producer不会再有新值推送时会通知consumer，不会在finalization之后触发',
          },
          {
            title: 'Notification',
            info: '当consumer已observed时，producer会push next/error/complete',
          },
        ],
      },
      {
        title: 'Major Concepts',
        info: '表现在observables或push-based响应式系统的特性',
        children: [
          { title: 'Multicast', info: '多consumer observed一个producer' },
          { title: 'Unicast', info: '单consumer observed一个producer' },
          {
            title: 'Cold',
            info: '当新producer在新subscription时，总是unicast，可以转hot',
          },
          {
            title: 'Hot',
            info: 'producer在subscribe操作外就已经创建，总是multicast(或假定），不能转cold',
          },
          {
            title: 'Push',
            info: 'observable是push-based，在producer输出时会让observed的consumer第一时间得到值',
          },
          {
            title: 'Pull',
            info: 'function/iterator是pull-based，需要手动req producer的输出，可能producer已经在很久之前就已经输出',
          },
        ],
      },
      {
        title: 'Minor Entities',
        info: '',
        children: [
          {
            title: 'Operator',
            info: '从一个observable的pipe传入工厂函数生成的操作函数到另一个observable',
          },
          {
            title: 'Operator Function',
            info: '将一个observable映射到另一个observable',
          },
          { title: 'Operation', info: '处理notification时的动作' },
          {
            title: 'Stream',
            info: '如果是observable，则代表operation集合，在subscription进行处理；如果是observation chain/operations/subscription，则定义为stream',
          },
          { title: 'Source', info: '任何类型的observable' },
          {
            title: 'Observable Inputs',
            info: '可以轻易转为observable的值，某些情况下代表valid observable sources',
          },
          {
            title: 'Notifier',
            info: '在指定的operator使用，可能直接传递或函数输出',
          },
          {
            title: 'Inner Source',
            info: '可能是许多source，自动在内部单个subscription到另一个observable的subscribe',
          },
          {
            title: 'Partial Observer',
            info: '通常用户自定义的observer可能没有全部的notification handlers',
          },
        ],
      },
      {
        title: 'Other Concepts',
        info: '',
        children: [
          {
            title: 'Unhandled Errors',
            info: '通常没有在subscribe时处理错误时，rxjs会重新抛出这个错误到新的调用栈或阻止producer interferences',
          },
          {
            title: 'Producer Interfaces',
            info: '当error被允许在notification的调用栈展开时发生，',
          },
          {
            title: 'Upstream And Downstream',
            info: '在stream的notification被operator的处理顺序，upstream代表operation在当前operation之前以准备好处理，downstream代表operation在当前operation之后已准备好处理',
          },
        ],
      },
    ],
  },
])
const node = defineComponent({
  name: 'Child',
  props: {
    data: {
      default: () => [],
      type: Array,
    },
  },
  setup(props) {
    return {
      props,
    }
  },
  template: `
    <ul v-for="v of props.data" :key="v.title">
      <li>
        {{ v.title }}
        <span style="font-size: 12px; color: #009fab">{{ v.info }}</span>
      </li>
      <Child v-if="v.children" :data=v.children></Child>
    </ul>
  `,
})
</script>
<template>
  <node :data="data" />
</template>
