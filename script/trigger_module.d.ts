declare module aaa_5nmb {
	//以下为转发事件
	export class 点击开始游戏按钮 extends TriggerEvent{
		obj: base.Game
		player_slot_id: number
		constructor(obj:base.Game, player_slot_id:number)
		readonly event_name: string
		readonly autoForward: boolean
	}
}
