module aaa_5nmb {
	export class 点击开始游戏按钮 extends TriggerEvent{
		constructor(public obj:base.Game) {
			super()
		}
		readonly event_name: string = "点击开始游戏按钮"
		readonly autoForward: boolean = true
	}
	function _TRIG_开始游戏_FUNC(this: void, 当前触发器: Trigger, e:aaa_5nmb.点击开始游戏按钮) {
		let 主界面获取: _OBJ__gui_ctrl_panel = base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "首页背景");
		if (true) {
			主界面获取.show = false;
		}
	}
	export let 开始游戏 = base.trigger_new(_TRIG_开始游戏_FUNC, [], false, undefined, true)
	//以下为转发事件
	//为触发器添加事件
	开始游戏.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "点击开始游戏按钮"})
}
