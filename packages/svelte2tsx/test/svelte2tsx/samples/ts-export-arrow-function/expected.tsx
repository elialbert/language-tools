<></>;function render() {

     let f = (a: number, b: number) => {
      let c = a + b;
      return c;
    }
;
() => (<></>);
return { props: {f: f} as {f?: typeof f}, slots: {}, getters: {}, events: {} }}

export default class Input__SvelteComponent_ {
    $$prop_def = __sveltets_partial(render().props)
    $$slot_def = render().slots
    $on = __sveltets_eventDef(render().events)
}
