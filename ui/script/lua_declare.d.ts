declare const enum Scene {
	["default"] = "default",
}
declare const enum 单位标签 {
	["自动复活"] = "自动复活",
}
declare const enum 单位字符串属性 {
}
declare const enum 技能属性 {
}
declare const enum 单位属性子类型 {
}
declare const enum 伤害类型 {
}
declare const enum 游戏选项 {
}
declare const enum 单位属性 {
	["金币"] = "金币",
	["复活时间"] = "复活时间",
}
declare const enum 玩家属性 {
}
declare const enum 游戏属性 {
}
declare const enum 血条类型 {
}
declare const enum 验证器代码 {
}
declare const enum 能量类型 {
}
declare class _OBJ_smallcard_inventory_EquipAttributeFormat extends DataCache{
	Attribute:_OBJ__UnitAttribute;
	Format:_OBJ_smallcard_inventory_AttributeFormat;
	constructor()
}
declare class _OBJ_lib_control_技能摇杆GUIEvent extends DataCache{
	on_vj_press:(this: void, )=>void;
	on_vj_move_start:(this: void, )=>void;
	on_vj_move:(this: void, )=>void;
	on_down:(this: void, )=>void;
	on_vj_move_end:(this: void, )=>void;
	on_vj_release:(this: void, )=>void;
	on_up:(this: void, )=>void;
	constructor()
}
declare class _OBJ_lib_control_移动摇杆GUIEvent extends DataCache{
	on_vj_press:(this: void, )=>void;
	on_vj_move_start:(this: void, )=>void;
	on_vj_move:(this: void, )=>void;
	on_vj_release:(this: void, )=>void;
	on_vj_move_end:(this: void, )=>void;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_gain_Lobby_Resource_Gain extends _OBJ__lobby_resource_gain_lobby_resource_gain{
	LobbyResource:IdPreset<"lobby_resource_id">;
	Name:string;
	Count:number;
	Link:IdPreset<"lobby_resource_gain_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_gain_group_Lobby_Resource_Gain_Group extends _OBJ__lobby_resource_gain_group_lobby_resource_gain_group{
	Array:Array<IdPreset<"lobby_resource_gain_id">>;
	Name:string;
	Link:IdPreset<"lobby_resource_gain_group_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_inventory_config_Inventory_Config extends _OBJ__inventory_config_inventory_config{
	Filters:Array<IdPreset<"item_class_id">>;
	InteractRange:number;
	Special:string;
	ShowDropArea:boolean;
	ShowDefaultEntrance:boolean;
	EnableInGameInventory:boolean;
	Default_Frame:string;
	EquipTypes:Array<IdPreset<"item_class_id">>;
	QualityColor:Array<undefined>;
	EquipAttributeFormat:Array<_OBJ_smallcard_inventory_EquipAttributeFormat>;
	Character:string;
	ShowCharacter:boolean;
	V2Special:boolean;
	ShowQuickBarCollapse:boolean;
	TypeFilters:Array<IdPreset<"item_class_id">>;
	Name:string;
	ShowQuickBarLock:boolean;
	EnableInteract:boolean;
	Link:IdPreset<"inventory_config_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_inventory_config_Quality_Color extends _OBJ__inventory_config_inventory_config{
	ClassLink:IdPreset<"item_class_id">;
	Frame:string;
	Color:string;
	Background:string;
	ActorArray:Array<IdPreset<"actor_id">>;
	Name:string;
	Link:IdPreset<"inventory_config_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource extends _OBJ__lobby_resource_lobby_resource{
	ItemType:IdPreset<"item_id">;
	Rare:number;
	Icon:string;
	Name:string;
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	Desc:string;
	IdName:string;
	CustomParams:Array<IdPreset<"link_node_id">>;
	TokenName:string;
	SmallIcon:string;
	Count:number;
	Link:IdPreset<"lobby_resource_id">;
	/** @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>boolean
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_模块背包 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	parameter:string;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	enable:boolean;
	image:string;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	z_index:number;
	CustomString:string;
	enable_drop:boolean;
	static:boolean;
	scale:number;
	opacity:number;
	inv_link:string;
	flip_x:boolean;
	round_corner_radius:number;
	swallow_events:string;
	flip_y:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_btn_icon extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	icon:string;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	enable:boolean;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	is_switch:boolean;
	image:string;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	z_index:number;
	is_on:boolean;
	enable_drop:boolean;
	swallow_events:string;
	static:boolean;
	opacity:number;
	scale:number;
	flip_x:boolean;
	round_corner_radius:number;
	CustomString:string;
	flip_y:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_simpleui_button extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	mask_image:string;
	text:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	enable:boolean;
	image:string;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	gray:boolean;
	z_index:number;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	can_be_clicked:boolean;
	CustomString:string;
	enable_drop:boolean;
	swallow_events:string;
	opacity:number;
	scale:number;
	static:boolean;
	flip_x:boolean;
	round_corner_radius:number;
	visiblity:boolean;
	flip_y:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_simpleui_text extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	Name:string;
	show:boolean;
	visiblity:boolean;
	gray:boolean;
	enable:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	image:string;
	auto_line_feed:boolean;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	clip:boolean;
	z_index:number;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	can_be_clicked:boolean;
	CustomString:string;
	enable_drop:boolean;
	opacity:number;
	scale:number;
	static:boolean;
	swallow_events:string;
	flip_x:boolean;
	round_corner_radius:number;
	mask_image:string;
	flip_y:boolean;
	font_size:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_Buff图标 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	Name:string;
	show:boolean;
	buff_icon:string;
	event:_OBJ__GUIEvent;
	border:_OBJ__GUIBorder;
	static:boolean;
	enable_drag:boolean;
	flip_x:boolean;
	buff_margin:number;
	font_size:number;
	buff:Buff;
	swallow_event:boolean;
	clip:boolean;
	mask_image:string;
	gray:boolean;
	buff_width:number;
	z_index:number;
	enable:boolean;
	image:string;
	rotate:number;
	buff_bg_neg_color:string;
	buff_bg_none_color:string;
	transition:_OBJ__GUITransition;
	opacity:number;
	color:string;
	buff_none_progress_type:string;
	buff_neg_progress_type:string;
	CustomString:string;
	enable_drop:boolean;
	scale:number;
	buff_height:number;
	buff_pos_progress_type:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	buff_bg_pos_color:string;
	round_corner_radius:number;
	low_level:boolean;
	flip_y:boolean;
	swallow_events:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_simpleui_picture extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	visiblity:boolean;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	enable:boolean;
	flip_y:boolean;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	color:string;
	zoom_type:string;
	border:_OBJ__GUIBorder;
	opacity:number;
	enable_drag:boolean;
	can_be_clicked:boolean;
	CustomString:string;
	enable_drop:boolean;
	z_index:number;
	scale:number;
	static:boolean;
	swallow_events:string;
	flip_x:boolean;
	round_corner_radius:number;
	Name:string;
	image:string;
	mask_image:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_背包入口 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	z_index:number;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	enable:boolean;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	image:string;
	CustomString:string;
	enable_drop:boolean;
	Name:string;
	static:boolean;
	scale:number;
	opacity:number;
	flip_x:boolean;
	round_corner_radius:number;
	swallow_events:string;
	flip_y:boolean;
	transition:_OBJ__GUITransition;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_attachable_panel extends _OBJ__gui_ctrl_gui_ctrl{
	hide_on_unit_invisible:boolean;
	swallow_event:boolean;
	Name:string;
	show:boolean;
	mask_image:string;
	gray:boolean;
	enable:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	image:string;
	scale_by_distance:boolean;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	layout:_OBJ__GUILayout;
	clip:boolean;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	z_index:number;
	CustomString:string;
	enable_drop:boolean;
	opacity:number;
	scale:number;
	static:boolean;
	swallow_events:string;
	flip_x:boolean;
	round_corner_radius:number;
	socket_name:string;
	flip_y:boolean;
	_attach_unit:Unit;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_mail_gui_ctrl_邮件按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	z_index:number;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	enable:boolean;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	image:string;
	CustomString:string;
	enable_drop:boolean;
	Name:string;
	static:boolean;
	scale:number;
	opacity:number;
	flip_x:boolean;
	round_corner_radius:number;
	swallow_events:string;
	flip_y:boolean;
	transition:_OBJ__GUITransition;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_normal_rect extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	decoration_layout_right:_OBJ__GUILayout;
	enable:boolean;
	clip:boolean;
	show:boolean;
	decoration_layout_left:_OBJ__GUILayout;
	decoration_image:string;
	image:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	gray:boolean;
	Name:string;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	border:_OBJ__GUIBorder;
	opacity:number;
	is_decoration:boolean;
	color:string;
	enable_drag:boolean;
	scale:number;
	CustomString:string;
	enable_drop:boolean;
	style:string;
	static:boolean;
	swallow_events:string;
	z_index:number;
	flip_x:boolean;
	round_corner_radius:number;
	swallow_event:boolean;
	flip_y:boolean;
	mask_image:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_msgbox extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	Name:string;
	show:boolean;
	msgbox_image:string;
	on_yes:(this: void, )=>void;
	event:_OBJ__GUIEvent;
	border:_OBJ__GUIBorder;
	opacity:number;
	enable_drag:boolean;
	on_cancel:(this: void, )=>void;
	flip_x:boolean;
	msgbox_icon_image:string;
	swallow_event:boolean;
	on_no:(this: void, )=>void;
	clip:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	z_index:number;
	rotate:number;
	on_press_btn:(this: void, )=>void;
	enable:boolean;
	color:string;
	image:string;
	scale:number;
	CustomString:string;
	enable_drop:boolean;
	swallow_events:string;
	msgbox_text:string;
	style:number;
	transition:_OBJ__GUITransition;
	low_level:boolean;
	round_corner_radius:number;
	static:boolean;
	flip_y:boolean;
	is_show_icon:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_技能摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	skill_toggleon:string;
	Name:string;
	show:boolean;
	outer_ratio:number;
	shortcut_key_bg:string;
	press_region_type:number;
	event:_OBJ_lib_control_技能摇杆GUIEvent;
	skill_cool:string;
	border:_OBJ__GUIBorder;
	static:boolean;
	enable_drag:boolean;
	skill_stack_bg:string;
	cast_slider:string;
	flip_x:boolean;
	cast_slider_panel:string;
	skill_icon_mask:string;
	enable:boolean;
	skill_click:string;
	image:string;
	can_press_on_cool:boolean;
	vj_panel_scale:number;
	mask_image:string;
	gray:boolean;
	clip:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	z_index:number;
	skill_normal:string;
	opacity:number;
	scale:number;
	rotate:number;
	low_level:boolean;
	swallow_events:string;
	vj_panel_crop_margin:number;
	skill_charge_cool:string;
	color:string;
	is_vj_center:boolean;
	CustomString:string;
	skill_locked:string;
	enable_drop:boolean;
	skill:Skill;
	cast_slider_panel_disable:string;
	active_percent:number;
	skill_disable:string;
	center_ratio:number;
	round_corner_radius:number;
	swallow_event:boolean;
	flip_y:boolean;
	transition:_OBJ__GUITransition;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_game_options_gui_ctrl_设置按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	show_localization_panel:boolean;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	enable:boolean;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	image:string;
	CustomString:string;
	enable_drop:boolean;
	z_index:number;
	static:boolean;
	scale:number;
	opacity:number;
	flip_x:boolean;
	round_corner_radius:number;
	swallow_events:string;
	flip_y:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_msgbox_btn extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	icon_image:string;
	clip:boolean;
	show:boolean;
	mask_image:string;
	text:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	enable:boolean;
	image:string;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	gray:boolean;
	z_index:number;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	enable_drop:boolean;
	CustomString:string;
	btn_image:string;
	opacity:number;
	scale:number;
	static:boolean;
	swallow_events:string;
	flip_x:boolean;
	round_corner_radius:number;
	swallow_event:boolean;
	flip_y:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_normal_btn extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	Name:string;
	show:boolean;
	mask_image:string;
	text:string;
	enable:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	text_opacity:number;
	image:string;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	gray:boolean;
	clip:boolean;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	z_index:number;
	CustomString:string;
	enable_drop:boolean;
	opacity:number;
	scale:number;
	static:boolean;
	swallow_events:string;
	flip_x:boolean;
	round_corner_radius:number;
	active_image:string;
	flip_y:boolean;
	text_color:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_技能摇杆组 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	total_angle_delta:number;
	skill_toggleon:string;
	Name:string;
	attack_button_size:number;
	outer_ratio:number;
	center_ratio:number;
	is_vj_center:boolean;
	event:_OBJ__GUIEvent;
	skill_cool:string;
	enable:boolean;
	border:_OBJ__GUIBorder;
	static:boolean;
	enable_drag:boolean;
	image:string;
	skill_stack_bg:string;
	shortcut_key_bg:string;
	press_region_type:number;
	scale:number;
	opacity:number;
	cast_slider:string;
	flip_x:boolean;
	cast_slider_panel:string;
	swallow_events:string;
	skill_icon_mask:string;
	base_x:number;
	CustomString:string;
	skill_click:string;
	clip:boolean;
	max_skill_count:number;
	vj_panel_scale:number;
	mask_image:string;
	gray:boolean;
	can_press_on_cool:boolean;
	init_angle:number;
	z_index:number;
	show:boolean;
	transition:_OBJ__GUITransition;
	children:Array<IdPreset<"gui_ctrl_id">>;
	rotate:number;
	low_level:boolean;
	swallow_event:boolean;
	vj_panel_crop_margin:number;
	skill_charge_cool:string;
	color:string;
	button_size:number;
	base_y:number;
	skill_locked:string;
	enable_drop:boolean;
	auto_bind_key:boolean;
	cast_slider_panel_disable:string;
	active_percent:number;
	skill_disable:string;
	min_around_dis:number;
	round_corner_radius:number;
	skill_attack_normal:string;
	flip_y:boolean;
	skill_normal:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_移动摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	vj_slider_width:number;
	Name:string;
	show:boolean;
	vj_is_release_reset:boolean;
	toggle_show:boolean;
	transition:_OBJ__GUITransition;
	event:_OBJ_lib_control_移动摇杆GUIEvent;
	border:_OBJ__GUIBorder;
	static:boolean;
	enable_drag:boolean;
	vj_move_radius:number;
	slider_mini_image:string;
	flip_x:boolean;
	enable:boolean;
	vj_press_region_type:number;
	image:string;
	vj_is_press_center:boolean;
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	slow_rate:number;
	vj_auto_move:boolean;
	slider_image:string;
	mask_image:string;
	gray:boolean;
	vj_slow_percent:number;
	children:Array<IdPreset<"gui_ctrl_id">>;
	z_index:number;
	opacity:number;
	vj_active_percent:number;
	scale:number;
	rotate:number;
	low_level:boolean;
	swallow_events:string;
	vj_move_ratio:number;
	color:string;
	vj_toggle_show:boolean;
	CustomString:string;
	vj_is_main_slider:boolean;
	vj_stop_percent:number;
	enable_drop:boolean;
	slider_relative_x:number;
	slider_relative_y:number;
	slider_bg_image:string;
	clip:boolean;
	vj_slider_height:number;
	round_corner_radius:number;
	is_main_slider:boolean;
	flip_y:boolean;
	slider_size:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_中止施法区域 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	enable:boolean;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	flip_y:boolean;
	CustomString:string;
	enable_drop:boolean;
	swallow_events:string;
	static:boolean;
	opacity:number;
	scale:number;
	flip_x:boolean;
	round_corner_radius:number;
	z_index:number;
	image:string;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_自定义背包面板 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	drop_mode:boolean;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	enable:boolean;
	image:string;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	z_index:number;
	CustomString:string;
	enable_drop:boolean;
	static:boolean;
	scale:number;
	opacity:number;
	inv_link:string;
	flip_x:boolean;
	round_corner_radius:number;
	swallow_events:string;
	flip_y:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_施法进度条 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	progress_bg_image:string;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	complete_delay:number;
	enable:boolean;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	break_delay:number;
	image:string;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	z_index:number;
	CustomString:string;
	enable_drop:boolean;
	swallow_events:string;
	static:boolean;
	opacity:number;
	scale:number;
	flip_x:boolean;
	round_corner_radius:number;
	progress_bar_image:string;
	flip_y:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_timershow extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	z_index:number;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	enable:boolean;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	image:string;
	CustomString:string;
	enable_drop:boolean;
	Name:string;
	static:boolean;
	scale:number;
	opacity:number;
	flip_x:boolean;
	round_corner_radius:number;
	swallow_events:string;
	flip_y:boolean;
	transition:_OBJ__GUITransition;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_lib_control_gui_ctrl_摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	vj_main_image:string;
	vj_bg_toggle_show:boolean;
	vj_main_toggle_show:boolean;
	Name:string;
	show:boolean;
	vj_is_release_reset:boolean;
	vj_size:number;
	transition:_OBJ__GUITransition;
	vj_main_move_ratio:number;
	vj_main_move_radius:number;
	border:_OBJ__GUIBorder;
	static:boolean;
	enable_drag:boolean;
	flip_x:boolean;
	vj_press_region_type:number;
	vj_is_press_center:boolean;
	swallow_event:boolean;
	clip:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	z_index:number;
	vj_bg_image:string;
	rotate:number;
	low_level:boolean;
	enable:boolean;
	image:string;
	color:string;
	vj_relative_y:number;
	vj_active_percent:number;
	CustomString:string;
	enable_drop:boolean;
	opacity:number;
	vj_main_size:number;
	scale:number;
	swallow_events:string;
	vj_relative_x:number;
	round_corner_radius:number;
	event:_OBJ_lib_control_移动摇杆GUIEvent;
	flip_y:boolean;
	layout:_OBJ__GUILayout;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_progress extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	is_name_show:boolean;
	Name:string;
	progress_bg_color:string;
	name_width:number;
	transition:_OBJ__GUITransition;
	is_merge_text:boolean;
	border:_OBJ__GUIBorder;
	static:boolean;
	progress_text_show:boolean;
	is_name_show_real:boolean;
	progress_type:string;
	progress_width:number;
	enable:boolean;
	image:string;
	flip_y:boolean;
	gray:boolean;
	swallow_event:boolean;
	flip_x:boolean;
	clip:boolean;
	opacity:number;
	mask_image:string;
	value:number;
	progress_color:string;
	progress_image:string;
	default_box_margin:number;
	name_height_prop:number;
	name_pos_prop:string;
	scale:number;
	default_name_width:number;
	low_level:boolean;
	value_max:number;
	description:string;
	name_show:boolean;
	color:string;
	swallow_events:string;
	z_index:number;
	CustomString:string;
	enable_drop:boolean;
	enable_drag:boolean;
	progress_bg_image:string;
	event:_OBJ__GUIEvent;
	name_width_prop:number;
	show:boolean;
	round_corner_radius:number;
	children:Array<IdPreset<"gui_ctrl_id">>;
	progress_height:number;
	rotate:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_自定义背包格子 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	show:boolean;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	drop_mode:boolean;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	enable:boolean;
	border:_OBJ__GUIBorder;
	color:string;
	enable_drag:boolean;
	image:string;
	CustomString:string;
	enable_drop:boolean;
	z_index:number;
	static:boolean;
	scale:number;
	opacity:number;
	flip_x:boolean;
	round_corner_radius:number;
	swallow_events:string;
	flip_y:boolean;
	Name:string;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_active_button extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	click_scale:number;
	Name:string;
	show:boolean;
	transition:_OBJ__GUITransition;
	event:_OBJ__GUIEvent;
	border:_OBJ__GUIBorder;
	opacity:number;
	enable_drag:boolean;
	flip_x:boolean;
	active_image:string;
	swallow_events:string;
	clip:boolean;
	mask_image:string;
	Asset:string;
	children:Array<IdPreset<"gui_ctrl_id">>;
	z_index:number;
	rotate:number;
	low_level:boolean;
	click_color:string;
	color:string;
	enable:boolean;
	CustomString:string;
	enable_drop:boolean;
	swallow_event:boolean;
	flip_y:boolean;
	effect_speed:number;
	static:boolean;
	scale:number;
	round_corner_radius:number;
	gray:boolean;
	image:string;
	click_opacity:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_Buff列表 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	buff_icon_template:string;
	Name:string;
	show:boolean;
	buff_icon:string;
	unit:Unit;
	event:_OBJ__GUIEvent;
	border:_OBJ__GUIBorder;
	scale:number;
	enable_drag:boolean;
	flip_x:boolean;
	buff_margin:number;
	buff_cat_filter:string;
	swallow_events:string;
	clip:boolean;
	mask_image:string;
	gray:boolean;
	buff_width:number;
	z_index:number;
	rotate:number;
	buff_polarity:string;
	enable:boolean;
	image:string;
	default_pos_cnt:number;
	color:string;
	transition:_OBJ__GUITransition;
	opacity:number;
	CustomString:string;
	enable_drop:boolean;
	default_neg_cnt:number;
	buff_height:number;
	swallow_event:boolean;
	default_none_cnt:number;
	children:Array<IdPreset<"gui_ctrl_id">>;
	round_corner_radius:number;
	low_level:boolean;
	flip_y:boolean;
	static:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_inventory_gui_ctrl_多功能格子 extends _OBJ__gui_ctrl_gui_ctrl{
	layout:_OBJ__GUILayout;
	bind_item:Item;
	Name:string;
	show_bg:boolean;
	transition:_OBJ__GUITransition;
	show_frame:boolean;
	show_tips:boolean;
	event:_OBJ__GUIEvent;
	border:_OBJ__GUIBorder;
	opacity:number;
	enable_drag:boolean;
	show_num:boolean;
	flip_x:boolean;
	bind_slot:Slot;
	swallow_events:string;
	clip:boolean;
	mask_image:string;
	bind_loot_link:IdPreset<"loot_id">;
	children:Array<IdPreset<"gui_ctrl_id">>;
	bind_item_link:IdPreset<"item_id">;
	rotate:number;
	low_level:boolean;
	color:string;
	enable:boolean;
	image:string;
	CustomString:string;
	enable_drop:boolean;
	static:boolean;
	can_use:boolean;
	gray:boolean;
	swallow_event:boolean;
	show:boolean;
	round_corner_radius:number;
	z_index:number;
	flip_y:boolean;
	scale:number;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_link_node_LinkNodeLobbyResource extends _OBJ__link_node_LinkNode{
	IsArray:boolean;
	Value:IdPreset<"lobby_resource_id">;
	Array:Array<IdPreset<"lobby_resource_id">>;
	Name:string;
	Link:IdPreset<"link_node_id">;
	constructor()
}
declare class _OBJ_smallcard_get_items_lobby_resource_ResourceTicket extends _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource{
	ItemType:IdPreset<"item_id">;
	Rare:number;
	Icon:string;
	Name:string;
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	Desc:string;
	IdName:string;
	PerLastTime:number;
	SmallIcon:string;
	PerLastCount:number;
	TicketName:string;
	TokenName:string;
	CustomParams:Array<IdPreset<"link_node_id">>;
	Count:number;
	Link:IdPreset<"lobby_resource_id">;
	/** @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>boolean
	constructor()
}
declare class _OBJ_gameui_gui_ctrl_transition_label extends _OBJ__gui_ctrl_label{
	layout:_OBJ__GUILayout;
	swallow_event:boolean;
	clip:boolean;
	font:_OBJ__Font;
	mask_image:string;
	gray:boolean;
	children:Array<IdPreset<"gui_ctrl_id">>;
	transition:_OBJ__GUITransition;
	Name:string;
	flip_y:boolean;
	event:_OBJ__GUIEvent;
	rotate:number;
	low_level:boolean;
	text:string;
	z_index:number;
	border:_OBJ__GUIBorder;
	enable:boolean;
	enable_drag:boolean;
	flip_x:boolean;
	CustomString:string;
	enable_drop:boolean;
	static:boolean;
	scale:number;
	opacity:number;
	swallow_events:string;
	number_transition:_OBJ__GUITransitionSubType;
	round_corner_radius:number;
	color:string;
	image:string;
	show:boolean;
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare const enum _OBJ__Unit_Filter {
	["自动复活"] = "自动复活",
}
declare const enum _OBJ__KeyValueAttribute_Key {
	["金币"] = "金币",
	["复活时间"] = "复活时间",
}
declare const enum _OBJ__BuffCategory {
	["正面效果"] = "正面效果",
	["位移效果"] = "位移效果",
	["持续性治疗"] = "持续性治疗",
	["控制效果"] = "控制效果",
	["负面效果"] = "负面效果",
	["持续性伤害"] = "持续性伤害",
}
declare const enum _OBJ__Spell_attack_speed_attribute {
	["金币"] = "金币",
	["复活时间"] = "复活时间",
}
declare const enum _OBJ__UnitPropertySubTypeEx {
}
declare const enum _OBJ__DamageType {
}
declare const enum _OBJ__PlayerAttribute {
}
declare const enum _OBJ__SpellAttribute_Key {
}
declare const enum _OBJ__UnitAttribute {
	["金币"] = "金币",
	["复活时间"] = "复活时间",
}
declare const enum _OBJ__AbilCategory {
}
declare const enum _OBJ_smallcard_inventory_AttributeFormat {
}
declare const enum _OBJ_smallcard_get_items_LobbyResourceType {
}
declare const enum _OBJ__GameOptionUIItem_DataType {
}