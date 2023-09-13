local ____lualib = base.tsc
local __TS__Class = ____lualib.__TS__Class
local __TS__ClassExtends = ____lualib.__TS__ClassExtends
local __TS__SuperTypeArgumentsFuncWrapper = ____lualib.__TS__SuperTypeArgumentsFuncWrapper
local __TS__TypeReference = ____lualib.__TS__TypeReference
local __TS__Class2 = ____lualib.__TS__Class2
Point = base.tsc.CLASSES.Point or __TS__Class2("Point")
Unit = base.tsc.CLASSES.Unit or __TS__Class2("Unit")
Slot = base.tsc.CLASSES.Slot or __TS__Class2("Slot")
Camera = base.tsc.CLASSES.Camera or __TS__Class2("Camera")
DataCache = base.tsc.CLASSES.DataCache or __TS__Class2("DataCache")
YPR旋转 = base.tsc.CLASSES.YPR旋转 or __TS__Class2("YPR旋转")
EffectParamShared = base.tsc.CLASSES.EffectParamShared or __TS__Class2("EffectParamShared")
EffectParam = base.tsc.CLASSES.EffectParam or __TS__Class2("EffectParam")
Target = base.tsc.CLASSES.Target or __TS__Class2("Target")
ScreenPos = base.tsc.CLASSES.ScreenPos or __TS__Class2("ScreenPos")
Actor = base.tsc.CLASSES.Actor or __TS__Class2("Actor")
TriggerEvent = base.tsc.CLASSES.TriggerEvent or __TS__Class2("TriggerEvent")
TriggerParamTable = base.tsc.CLASSES.TriggerParamTable or __TS__Class2("TriggerParamTable")
Player = base.tsc.CLASSES.Player or __TS__Class2("Player")
Skill = base.tsc.CLASSES.Skill or __TS__Class2("Skill")
Buff = base.tsc.CLASSES.Buff or __TS__Class2("Buff")
Timer = base.tsc.CLASSES.Timer or __TS__Class2("Timer")
Item = base.tsc.CLASSES.Item or __TS__Class2("Item")
Trigger = base.tsc.CLASSES.Trigger or __TS__Class2("Trigger")
Coroutine = base.tsc.CLASSES.Coroutine or __TS__Class2("Coroutine")
IEventNotify = base.tsc.CLASSES.IEventNotify or __TS__Class2("IEventNotify")
Present = base.tsc.CLASSES.Present or __TS__Class2("Present")
Array = base.tsc.CLASSES.Array or __TS__Class2("Array")
aaa_5nmb = aaa_5nmb or ({})
do
    aaa_5nmb.点击开始游戏按钮 = __TS__Class()
    local 点击开始游戏按钮 = aaa_5nmb.点击开始游戏按钮
    点击开始游戏按钮.name = "点击开始游戏按钮"
    __TS__ClassExtends(
        点击开始游戏按钮,
        TriggerEvent,
        function()
            return {}
        end
    )
    function 点击开始游戏按钮.prototype.____constructor(self, obj)
        __TS__SuperTypeArgumentsFuncWrapper(点击开始游戏按钮, {}, TriggerEvent.prototype.____constructor)(self)
        self.obj = obj
        self.event_name = "点击开始游戏按钮"
        self.autoForward = true
    end
    local function _TRIG_开始游戏_FUNC(当前触发器, e)
        local 主界面获取 = base.gui_get_part_as(
            __TS__TypeReference(_OBJ__gui_ctrl_panel, {}),
            base.gui_get_main_page(),
            "首页背景"
        )
        if true then
            主界面获取.show = false
        end
    end
    aaa_5nmb.开始游戏 = base.trigger_new(
        _TRIG_开始游戏_FUNC,
        {},
        false,
        nil,
        true
    )
    aaa_5nmb.开始游戏:add_event_common({obj = base.game, event_name = "点击开始游戏按钮"})
end
