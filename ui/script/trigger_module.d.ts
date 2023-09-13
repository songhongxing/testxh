declare module aaa_5nmb {
	export class 点击开始游戏按钮 extends TriggerEvent{
		obj: base.Game
		constructor(obj:base.Game)
		readonly event_name: string
		readonly autoForward: boolean
	}
	//以下为转发事件
	function _TRIG_开始游戏_FUNC(this: void, 当前触发器: Trigger, e:aaa_5nmb.点击开始游戏按钮) {
		let 主界面获取: _OBJ__gui_ctrl_panel = base.gui_get_part_as<_OBJ__gui_ctrl_panel>(base.gui_get_main_page(), "首页背景");
		if (true) {
			主界面获取.show = false;
		}
	}
	export let 开始游戏: Trigger
}
