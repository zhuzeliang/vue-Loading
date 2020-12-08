import Vue, {VueConstructor} from 'vue'

/**
 * @FYI https://www.yuque.com/docs/share/a72a1b84-c0e4-4bd5-853f-6711cb08a507
 */
declare module '@femessage/' {
  class VueComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type Data = {}

  type Methods = {}

  type Computed = {}

  type Props = {}

  type  = Combined<
    Data,
    Methods,
    Computed,
    Props
  >

  export interface Type extends VueComponent,  {}

  const Construction: ExtendedVue<
    Vue,
    Data,
    Methods,
    Computed,
    Props
  >

  export default Construction
}
