import { RouteRecordRaw } from 'vue-router'

const observablesSubscribeObserverSubscription: RouteRecordRaw = {
  path: '/observable-subscriber-observer-subscription-subject-scheduler',
  component: () =>
    import(
      '../pages/observable-subscriber-observer-subscription-subject-scheduler/ObservableSubscriberObserverSubscriptionSubjectScheduler.vue'
    ),
  meta: {
    count: '?',
    notUnderstand: '?'
  }
}

const operators: RouteRecordRaw = {
  path: '/operators',
  component: () => import('../pages/operators/Operators.vue'),
  meta: {
    count: 103,
    notUnderstand: '?'
  },
  children: [
    {
      path: 'creation',
      component: () => import('../pages/operators/creation/Creation.vue'),
      meta: {
        count: 14,
        notUnderstand: '?'
      }
    },
    {
      path: 'join-creation',
      component: () =>
        import('../pages/operators/join-creation/JoinCreation.vue'),
      meta: {
        count: 7,
        notUnderstand: '?'
      }
    },
    {
      path: 'transformation',
      component: () =>
        import('../pages/operators/transformation/Transformation.vue'),
      meta: {
        count: 25,
        notUnderstand: '?'
      }
    },
    {
      path: 'filtering',
      component: () => import('../pages/operators/filtering/Filtering.vue'),
      meta: {
        count: 25,
        notUnderstand: '?'
      }
    },
    {
      path: 'join',
      component: () => import('../pages/operators/join/Join.vue'),
      meta: {
        count: 7,
        notUnderstand: '?'
      }
    },
    {
      path: 'multicasting',
      component: () =>
        import('../pages/operators/multicasting/Multicasting.vue'),
      meta: {
        count: 1,
        notUnderstand: '?'
      }
    },
    {
      path: 'error-handling',
      component: () =>
        import('../pages/operators/error-handling/ErrorHandling.vue'),
      meta: {
        count: 3,
        notUnderstand: '?'
      }
    },
    {
      path: 'utility',
      component: () => import('../pages/operators/utility/Utility.vue'),
      meta: {
        count: 12,
        notUnderstand: '?'
      }
    },
    {
      path: 'conditional',
      component: () => import('../pages/operators/conditional/Conditional.vue'),
      meta: {
        count: 5,
        notUnderstand: '?'
      }
    },
    {
      path: 'mathematical',
      component: () =>
        import('../pages/operators/mathematical/Mathematical.vue'),
      meta: {
        count: 4,
        notUnderstand: '?'
      }
    },
    {
      path: 'custom',
      component: () => import('../pages/operators/custom/Custom.vue'),
      meta: {
        count: '?',
        notUnderstand: '?'
      }
    }
  ]
}

export const routes = (): RouteRecordRaw[] => [
  {
    path: '/',
    component: () => import('../pages/Home.vue'),
    meta: {
      count: '?',
      notUnderstand: '?'
    }
  },
  observablesSubscribeObserverSubscription,
  operators
]
