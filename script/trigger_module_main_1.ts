module aaa_5nmb {
	//以下为转发事件
	export class 点击开始游戏按钮 extends TriggerEvent{
		constructor(public obj:base.Game, public player_slot_id:number) {
			super()
		}
		readonly event_name: string = "点击开始游戏按钮"
		readonly autoForward: boolean = false
	}
}
