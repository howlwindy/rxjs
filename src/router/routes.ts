import { RouteRecordRaw } from 'vue-router'

const observablesSubscribeObserverSubscription: RouteRecordRaw = {
  path: '/observable-subscriber-observer-subscription-subject-scheduler',
  component: () =>
    import(
      '../pages/observable-subscriber-observer-subscription-subject-scheduler/ObservableSubscriberObserverSubscriptionSubjectScheduler.vue'
    ),
  meta: {
    count: 5,
    done: 0,
  },
}

const operators: RouteRecordRaw = {
  path: '/operators',
  component: () => import('../pages/operators/Operators.vue'),
  meta: {
    count: 103,
    done: 0,
  },
  children: [
    {
      path: 'creation',
      component: () => import('../pages/operators/creation/Creation.vue'),
      meta: {
        count: 14,
        done: 0,
      },
    },
    {
      path: 'join-creation',
      component: () =>
        import('../pages/operators/join-creation/JoinCreation.vue'),
      meta: {
        count: 7,
        done: 0,
      },
    },
    {
      path: 'transformation',
      component: () =>
        import('../pages/operators/transformation/Transformation.vue'),
      meta: {
        count: 25,
        done: 0,
      },
    },
    {
      path: 'filtering',
      component: () => import('../pages/operators/filtering/Filtering.vue'),
      meta: {
        count: 25,
        done: 0,
      },
    },
    {
      path: 'join',
      component: () => import('../pages/operators/join/Join.vue'),
      meta: {
        count: 7,
        done: 0,
      },
    },
    {
      path: 'multicasting',
      component: () =>
        import('../pages/operators/multicasting/Multicasting.vue'),
      meta: {
        count: 1,
        done: 0,
      },
    },
    {
      path: 'error-handling',
      component: () =>
        import('../pages/operators/error-handling/ErrorHandling.vue'),
      meta: {
        count: 3,
        done: 0,
      },
    },
    {
      path: 'utility',
      component: () => import('../pages/operators/utility/Utility.vue'),
      meta: {
        count: 12,
        done: 0,
      },
    },
    {
      path: 'conditional',
      component: () => import('../pages/operators/conditional/Conditional.vue'),
      meta: {
        count: 5,
        done: 0,
      },
    },
    {
      path: 'mathematical',
      component: () =>
        import('../pages/operators/mathematical/Mathematical.vue'),
      meta: {
        count: 4,
        done: 0,
      },
    },
    {
      path: 'custom',
      component: () => import('../pages/operators/custom/Custom.vue'),
      meta: {
        count: 0,
        done: 0,
      },
    },
  ],
}

export const routes = (): RouteRecordRaw[] => [
  {
    path: '/',
    component: () => import('../pages/Home.vue'),
    meta: {
      count: '',
      done: '',
    },
  },
  observablesSubscribeObserverSubscription,
  operators,
]
