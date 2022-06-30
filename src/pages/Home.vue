<script setup lang="ts"></script>
<template>
  <ul>
    <li>Rxjs</li>
    <ul>
      <li>
        Major Entities
        <span class="explain">与observable有关</span>
      </li>
      <ul>
        <li>
          Consumer
          <span class="explain"
            >订阅了observable或是被通知next/error/complete的对象</span
          >
        </li>
        <li>
          Producer

          <span class="explain">任何给subscription推送值的对象</span>
        </li>
        <li>
          Subscription

          <span class="explain">consumer正在观察producer推送值的契约</span>
        </li>
        <li>
          Observable

          <span class="explain"
            >通过subscribe将observer作为consumer连接producer最终变为subscription的模板</span
          >
        </li>
        <li>
          Observer

          <span class="explain"
            >consumer的表现，notification的next/error/complete都是observer</span
          >
        </li>
      </ul>
      <li>
        Major Actions
        <span class="explain">发生在Major Entities之间的动作或事件</span>
      </li>
      <ul>
        <li>Subscribe</li>
        <li>Finalization</li>
        <li>Unsubscription</li>
        <li>Observation</li>
        <li>Observation Chain</li>
        <li>Next</li>
        <li>Error</li>
        <li>Complete</li>
        <li>Notification</li>
      </ul>
      <li>
        Major Concepts

        <span class="explain"
          >表现在observables或push-based响应式系统的特性</span
        >
      </li>
      <ul>
        <li>Multicast</li>
        <li>Unicast</li>
        <li>Cold</li>
        <li>Hot</li>
        <li>Push</li>
        <li>Pull</li>
      </ul>
      <li>Minor Entities</li>
      <ul>
        <li>Operator</li>
        <li>Operator Function</li>
        <li>Operation</li>
        <li>Stream</li>
        <li>Source</li>
        <li>Observable Inputs</li>
        <li>Notifier</li>
        <li>Inner Source</li>
        <li>Partial Observer</li>
      </ul>
      <li>Other Concepts</li>
      <ul>
        <li>Unhandled Errors</li>
        <li>Producer Interfaces</li>
        <li>Upstream And Downstream</li>
      </ul>
    </ul>
  </ul>
</template>
<style scoped>
.explain {
  font-size: 12px;
  color: #009fab;
}
</style>
