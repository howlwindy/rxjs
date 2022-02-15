import { RouteRecordRaw } from 'vue-router'

const observablesSubscribeObserverSubscription: RouteRecordRaw = {
  path: '/observables-subscribe-observer-subscription',
  component: () =>
    import(
      '../pages/observables-subscribe-observer-subscription/ObservablesSubscribeObserverSubscription.vue'
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
        import('../pages/operators/multicasting/Multicaasting.vue')
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

const subjects: RouteRecordRaw = {
  path: '/subjects',
  component: () => import('../pages/subjects/Subjects.vue')
}

const scheduler: RouteRecordRaw = {
  path: '/scheduler',
  component: () => import('../pages/scheduler/Scheduler.vue')
}

export const routes = (): RouteRecordRaw[] => [
  { path: '/', component: () => import('../pages/Home.vue') },
  observablesSubscribeObserverSubscription,
  operators,
  subjects,
  scheduler
]
