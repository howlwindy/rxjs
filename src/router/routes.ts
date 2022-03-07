import { RouteRecordRaw } from 'vue-router'

const observablesSubscribeObserverSubscription: RouteRecordRaw = {
  path: '/observable-subscriber-observer-subscription-subject-scheduler',
  component: () =>
    import(
      '../pages/observable-subscriber-observer-subscription-subject-scheduler/ObservableSubscriberObserverSubscriptionSubjectScheduler.vue'
    )
}

const operators: RouteRecordRaw = {
  path: '/operators',
  component: () => import('../pages/operators/Operators.vue'),
  children: [
    {
      path: 'creation',
      component: () => import('../pages/operators/creation/Creation.vue')
    },
    {
      path: 'join-creation',
      component: () =>
        import('../pages/operators/join-creation/JoinCreation.vue')
    },
    {
      path: 'transformation',
      component: () =>
        import('../pages/operators/transformation/Transformation.vue')
    },
    {
      path: 'filtering',
      component: () => import('../pages/operators/filtering/Filtering.vue')
    },
    {
      path: 'join',
      component: () => import('../pages/operators/join/Join.vue')
    },
    {
      path: 'multicasting',
      component: () =>
        import('../pages/operators/multicasting/Multicasting.vue')
    },
    {
      path: 'error-handling',
      component: () =>
        import('../pages/operators/error-handling/ErrorHandling.vue')
    },
    {
      path: 'utility',
      component: () => import('../pages/operators/utility/Utility.vue')
    },
    {
      path: 'conditional',
      component: () => import('../pages/operators/conditional/Conditional.vue')
    },
    {
      path: 'mathematical',
      component: () =>
        import('../pages/operators/mathematical/Mathematical.vue')
    },
    {
      path: 'custom',
      component: () => import('../pages/operators/custom/Custom.vue')
    }
  ]
}

export const routes = (): RouteRecordRaw[] => [
  { path: '/', component: () => import('../pages/Home.vue') },
  observablesSubscribeObserverSubscription,
  operators
]
