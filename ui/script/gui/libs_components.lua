-- THIS FILE IS AUTO-GENERATED, MIGHT BE OVERWRITTEN BY GUI-EDITOR
local components = {}
components['$$smallcard_mail.template@gui_ctrl.邮件按钮'] = {url = '@smallcard_mail.component', com_name = '邮件按钮', template = {
	layout = {
	width = 64,
	height = 64,
},
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.active_button'] = {url = '@gameui.component', com_name = 'active_button', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	click_scale = 0.85,
	color = '#FFFFFF',
	name = '动态按钮',
	Asset = '',
}}
components['$$gameui.template@gui_ctrl.attachable_panel'] = {url = '@gameui.component', com_name = 'attachable_panel', template = {
	hide_on_unit_invisible = false,
	scale_by_distance = false,
	socket_name = 'socket_root',
	layout = {
	height = 100,
	col_self = 'start',
	width = 100,
	row_self = 'start',
},
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.btn_icon'] = {url = '@gameui.component', com_name = 'btn_icon', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 100,
	row_self = 'start',
},
	icon = 'image/btn/sword.png',
	name = 'GUI控件',
	is_on = false,
	is_switch = false,
}}
components['$$gameui.template@gui_ctrl.Buff列表'] = {url = '@gameui.component', com_name = 'Buff列表', template = {
	default_none_cnt = 3,
	name = 'GUI控件',
	default_pos_cnt = 3,
	buff_height = 64,
	buff_icon = 'image/msgbox/btn_1.png',
	buff_width = 64,
	buff_icon_template = '@gameui.prefab.buff.buff_icon',
	buff_margin = 7,
	buff_cat_filter = '可被禁用;负面效果',
	buff_polarity = '正面;负面;无',
	default_neg_cnt = 3,
}}
components['$$gameui.template@gui_ctrl.Buff图标'] = {url = '@gameui.component', com_name = 'Buff图标', template = {
	buff_bg_none_color = 'rgb(154, 154, 154)',
	name = 'GUI控件',
	buff_neg_progress_type = 'clockwise',
	buff_none_progress_type = 'clockwise',
	buff_width = 64,
	buff_icon = 'image/buff/buff_1.png',
	buff_height = 64,
	buff_bg_pos_color = 'rgb(52, 180, 31)',
	buff_margin = 7,
	buff_pos_progress_type = 'clockwise',
	buff_bg_neg_color = 'rgb(231, 67, 57)',
	font_size = 24,
}}
components['$$gameui.template@gui_ctrl.transition_label'] = {url = '@gameui.component', com_name = 'transition_label', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 500,
	row_self = 'start',
},
	name = '动态文本',
}}
components['$$gameui.template@gui_ctrl.normal_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 30,
	bottom = 30,
	left = 30,
	top = 30,
},
	text_opacity = 1,
	text_color = '#ffffff',
	image = 'image/btn/gf_1_major.png',
	active_image = 'image/btn/gf_1_major_active.png',
	text = '默认',
	name = '按钮-古风1-主要',
}}
components['$$gameui.template@gui_ctrl.gf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 30,
	bottom = 30,
	left = 30,
	top = 30,
},
	text_opacity = 1,
	text_color = '#ffffff',
	image = 'image/btn/gf_1_minor.png',
	active_image = 'image/btn/gf_1_minor_active.png',
	text = '默认',
	name = '按钮-古风1-次要',
}}
components['$$gameui.template@gui_ctrl.normal_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	is_decoration = false,
	name = '面板-古风1',
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
	decoration_layout_left = {
	row_self = 'start',
},
	decoration_image = '',
	style = 'image/rect/面板-古风1.png',
}}
components['$$gameui.template@gui_ctrl.gf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 30,
	bottom = 30,
	left = 30,
	top = 30,
},
	text_opacity = 1,
	text_color = '#ffffff',
	image = 'image/btn/gf_2_major.png',
	active_image = 'image/btn/gf_2_major_active.png',
	text = '默认',
	name = '按钮-古风2-主要',
}}
components['$$gameui.template@gui_ctrl.gf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 30,
	bottom = 30,
	left = 30,
	top = 30,
},
	text_opacity = 1,
	text_color = '#ffffff',
	image = 'image/btn/gf_2_minor.png',
	active_image = 'image/btn/gf_2_minor_active.png',
	text = '默认',
	name = '按钮-古风2-次要',
}}
components['$$gameui.template@gui_ctrl.gf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	is_decoration = false,
	name = '面板-古风2',
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
	decoration_layout_left = {
	row_self = 'start',
},
	decoration_image = '',
	style = 'image/rect/面板-古风2.png',
}}
components['$$gameui.template@gui_ctrl.gf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 110,
	bottom = 0,
	left = 220,
	top = 0,
},
	text_opacity = 1,
	text_color = '#ffffff',
	image = 'image/btn/gf_3_major.png',
	active_image = 'image/btn/gf_3_major_active.png',
	text = '默认',
	name = '按钮-古风3-主要',
}}
components['$$gameui.template@gui_ctrl.gf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 110,
	bottom = 0,
	left = 220,
	top = 0,
},
	text_opacity = 1,
	text_color = '#ffffff',
	image = 'image/btn/gf_3_minor.png',
	active_image = 'image/btn/gf_3_minor_active.png',
	text = '默认',
	name = '按钮-古风3-次要',
}}
components['$$gameui.template@gui_ctrl.gf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	margin = {
	right = 6,
},
	row_self = 'end',
},
	is_decoration = true,
	name = '面板-古风3',
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
	decoration_layout_left = {
	margin = {
	left = 6,
},
	row_self = 'start',
},
	decoration_image = 'image/rect/面板-古风3-花纹.png',
	style = 'image/rect/面板-古风3.png',
}}
components['$$gameui.template@gui_ctrl.msgbox'] = {url = '@gameui.component', com_name = 'msgbox', template = {
	layout = {
	height = 300,
	col_self = 'start',
	width = 600,
	row_self = 'start',
},
	msgbox_image = 'image/msgbox/msgbox_1.png',
	name = 'GUI控件',
	msgbox_text = '默认通知框文本',
	is_show_icon = true,
	msgbox_icon_image = 'image/msgbox/icon_1.png',
	style = 3,
}}
components['$$gameui.template@gui_ctrl.msgbox_btn'] = {url = '@gameui.component', com_name = 'msgbox_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	icon_image = '@gameui/image/msgbox/icon_1.png',
	name = 'GUI控件',
	text = '默认',
	btn_image = '@gameui/image/msgbox/btn_1.png',
}}
components['$$gameui.template@gui_ctrl.progress'] = {url = '@gameui.component', com_name = 'progress', template = {
	layout = {
	height = 30,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	progress_bg_image = '',
	name = 'GUI控件',
	progress_bg_color = '#949494',
	value = 50,
	progress_color = '#ff0000',
	name_width = 50,
	default_box_margin = 10,
	name_width_prop = 50,
	name_pos_prop = 'left',
	is_merge_text = true,
	default_name_width = 50,
	value_max = 100,
	description = 'ATK',
	name_show = true,
	progress_text_show = true,
	is_name_show_real = true,
	progress_type = 'right',
	progress_width = 250,
	is_name_show = true,
	progress_image = '',
	progress_height = 20,
	name_height_prop = 20,
}}
components['$$gameui.template@gui_ctrl.sci_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#000000',
	image = 'image/btn/sci_1_major.png',
	active_image = 'image/btn/sci_1_major_active.png',
	text = '默认',
	name = '按钮-科技1-主要',
}}
components['$$gameui.template@gui_ctrl.sci_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#000000',
	image = 'image/btn/sci_1_minor.png',
	active_image = 'image/btn/sci_1_minor_active.png',
	text = '默认',
	name = '按钮-科技1-次要',
}}
components['$$gameui.template@gui_ctrl.sci_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	is_decoration = false,
	name = '面板-科技1',
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
	decoration_layout_left = {
	row_self = 'start',
},
	decoration_image = '',
	style = 'image/rect/面板-科技1.png',
}}
components['$$gameui.template@gui_ctrl.sci_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#13141E',
	image = 'image/btn/sci_2_major.png',
	active_image = 'image/btn/sci_2_major_active.png',
	text = '默认',
	name = '按钮-科技2-主要',
}}
components['$$gameui.template@gui_ctrl.sci_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#13141E',
	image = 'image/btn/sci_2_minor.png',
	active_image = 'image/btn/sci_2_minor_active.png',
	text = '默认',
	name = '按钮-科技2-次要',
}}
components['$$gameui.template@gui_ctrl.sci_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	is_decoration = false,
	name = '面板-科技2',
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
	decoration_layout_left = {
	row_self = 'start',
},
	decoration_image = '',
	style = 'image/rect/面板-科技2.png',
}}
components['$$gameui.template@gui_ctrl.sci_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 0,
	bottom = 0,
	left = 0,
	top = 0,
},
	text_opacity = 1,
	text_color = '#FFF8D7',
	image = 'image/btn/sci_3_major.png',
	active_image = 'image/btn/sci_3_major_active.png',
	text = '默认',
	name = '按钮-科技3-主要',
}}
components['$$gameui.template@gui_ctrl.sci_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 0,
	bottom = 0,
	left = 0,
	top = 0,
},
	text_opacity = 1,
	text_color = '#CCCCCC',
	image = 'image/btn/sci_3_minor.png',
	active_image = 'image/btn/sci_3_minor_active.png',
	text = '默认',
	name = '按钮-科技3-次要',
}}
components['$$gameui.template@gui_ctrl.sci_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	is_decoration = false,
	name = '面板-科技3',
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
	decoration_layout_left = {
	row_self = 'start',
},
	decoration_image = '',
	style = 'image/rect/面板-科技3.png',
}}
components['$$gameui.template@gui_ctrl.simpleui_button'] = {url = '@gameui.component', com_name = 'simpleui_button', template = {
	layout = {
	height = 50,
	col_self = 'start',
	width = 50,
	row_self = 'start',
},
	name = 'GUI控件',
	can_be_clicked = true,
	visiblity = true,
	text = '按钮',
	image = 'image/msgbox/btn_1.png',
}}
components['$$gameui.template@gui_ctrl.simpleui_picture'] = {url = '@gameui.component', com_name = 'simpleui_picture', template = {
	layout = {
	height = 50,
	col_self = 'start',
	width = 100,
	row_self = 'start',
},
	opacity = 0,
	name = 'GUI控件',
	can_be_clicked = true,
	visiblity = true,
	image = 'image/msgbox/icon_1.png',
	zoom_type = 'none',
}}
components['$$gameui.template@gui_ctrl.simpleui_text'] = {url = '@gameui.component', com_name = 'simpleui_text', template = {
	layout = {
	height = 50,
	col_self = 'start',
	width = 50,
	row_self = 'start',
},
	name = 'GUI控件',
	auto_line_feed = true,
	visiblity = true,
	can_be_clicked = true,
	font_size = 5,
}}
components['$$gameui.template@gui_ctrl.timershow'] = {url = '@gameui.component', com_name = 'timershow', template = {
	layout = {
	width = -1,
	col_self = 'start',
	height = 56,
	direction = 'row',
},
	image = 'image/Bg_daojishi_di.png',
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.xf_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#FFFFFF',
	image = 'image/btn/xf_1_major.png',
	active_image = 'image/btn/xf_1_major_active.png',
	text = '默认',
	name = '按钮-西方1-主要',
}}
components['$$gameui.template@gui_ctrl.xf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#FFFFFF',
	image = 'image/btn/xf_1_minor.png',
	active_image = 'image/btn/xf_1_minor_active.png',
	text = '默认',
	name = '按钮-西方1-次要',
}}
components['$$gameui.template@gui_ctrl.xf_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	is_decoration = false,
	name = '面板-西方1',
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
	decoration_layout_left = {
	row_self = 'start',
},
	decoration_image = '',
	style = 'image/rect/面板-西方1.png',
}}
components['$$gameui.template@gui_ctrl.xf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#2A2D3C',
	image = 'image/btn/xf_2_major.png',
	active_image = 'image/btn/xf_2_major_active.png',
	text = '默认',
	name = '按钮-西方1-主要',
}}
components['$$gameui.template@gui_ctrl.xf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#FFFFFF',
	image = 'image/btn/xf_2_minor.png',
	active_image = 'image/btn/xf_2_minor_active.png',
	text = '默认',
	name = '按钮-西方2-次要',
}}
components['$$gameui.template@gui_ctrl.xf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	is_decoration = false,
	name = '面板-西方2',
	border = {
	right = 128,
	bottom = 30,
	left = 128,
	top = 130,
},
	decoration_layout_left = {
	row_self = 'start',
},
	decoration_image = '',
	style = 'image/rect/面板-西方2.png',
}}
components['$$gameui.template@gui_ctrl.xf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#FFFFFF',
	image = 'image/btn/xf_3_major.png',
	active_image = 'image/btn/xf_3_major_active.png',
	text = '默认',
	name = '按钮-西方3-主要',
}}
components['$$gameui.template@gui_ctrl.xf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	layout = {
	height = 100,
	col_self = 'start',
	width = 250,
	row_self = 'start',
},
	border = {
	right = 40,
	bottom = 30,
	left = 40,
	top = 30,
},
	text_opacity = 1,
	text_color = '#FFFFFF',
	image = 'image/btn/xf_3_minor.png',
	active_image = 'image/btn/xf_3_minor_active.png',
	text = '默认',
	name = '按钮-西方3-次要',
}}
components['$$gameui.template@gui_ctrl.xf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	layout = {
	height = 400,
	col_self = 'start',
	width = 400,
	row_self = 'start',
},
	decoration_layout_right = {
	row_self = 'end',
},
	is_decoration = false,
	name = '面板-西方3',
	border = {
	right = 45,
	bottom = 45,
	left = 45,
	top = 45,
},
	decoration_layout_left = {
	row_self = 'start',
},
	decoration_image = '',
	style = 'image/rect/面板-西方3.png',
}}
components['$$lib_control.template@gui_ctrl.技能摇杆'] = {url = '@lib_control.component', com_name = '技能摇杆', template = {
	layout = {
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	row_self = 'end',
	width = 150,
	col_self = 'end',
	height = 150,
},
	skill_click = '@defaultui/image/control/点击技能框.png',
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	name = 'GUI控件',
	vj_panel_scale = 1,
	outer_ratio = 1.022,
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	is_vj_center = true,
	skill_cool = '@defaultui/image/control/冷却.png',
	vj_panel_crop_margin = -9999,
	skill_charge_cool = '@defaultui/image/control/开启技能框.png',
	center_ratio = 0.926,
	skill_stack_bg = '@defaultui/image/control/技能_等级.png',
	press_region_type = 1,
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	active_percent = 0.15,
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	can_press_on_cool = true,
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	skill_normal = '@defaultui/image/control/默认技能框2.png',
}}
components['$$lib_control.template@gui_ctrl.技能摇杆组'] = {url = '@lib_control.component', com_name = '技能摇杆组', template = {
	layout = {
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	row_self = 'end',
	grow_height = 1,
	col_self = 'end',
	grow_width = 0.5,
},
	total_angle_delta = 120,
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	attack_button_size = 250,
	outer_ratio = 1.022,
	auto_bind_key = true,
	press_region_type = 1,
	skill_cool = '@defaultui/image/control/冷却.png',
	skill_stack_bg = '@defaultui/image/control/技能_等级.png',
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	base_x = -150,
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	skill_click = '@defaultui/image/control/点击技能框.png',
	name = 'GUI控件',
	vj_panel_scale = 1,
	init_angle = -15,
	is_vj_center = true,
	vj_panel_crop_margin = -9999,
	skill_charge_cool = '@defaultui/image/control/开启技能框.png',
	button_size = 150,
	can_press_on_cool = true,
	base_y = -120,
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	skill_attack_normal = '@lib_control/image/control/Bth_ingame_gongjidi.png',
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	min_around_dis = 350,
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	active_percent = 0.15,
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	max_skill_count = 99,
	skill_normal = '@defaultui/image/control/默认技能框2.png',
	center_ratio = 0.926,
}}
components['$$lib_control.template@gui_ctrl.lib_control_main'] = {url = '@@.gui.page.lib_control_main.component', is_page = true, template_url = '@@.gui.page.lib_control_main.template'}
components['$$lib_control.template@gui_ctrl.施法进度条'] = {url = '@lib_control.component', com_name = '施法进度条', template = {
	layout = {
	relative = {
	['1'] = 0,
	['2'] = -178,
},
	row_self = 'center',
	width = 688,
	col_self = 'end',
	height = 20,
},
	complete_delay = 300,
	name = 'GUI控件',
	progress_bar_image = '@defaultui/image/control/Bar_ingame_shifatiao.png',
	progress_bg_image = '@defaultui/image/control/Bar_ingame_shifatiaodi.png',
	break_delay = 200,
}}
components['$$lib_control.template@gui_ctrl.摇杆'] = {url = '@lib_control.component', com_name = '摇杆', template = {
	vj_relative_x = 0,
	vj_bg_toggle_show = false,
	vj_main_toggle_show = false,
	name = 'GUI控件',
	vj_is_release_reset = true,
	vj_main_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
	vj_relative_y = 0,
	vj_main_size = 127,
	vj_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
	vj_size = 288,
	vj_active_percent = 0.2,
	vj_main_move_ratio = 1,
	vj_press_region_type = 0,
	vj_main_move_radius = 0.146,
	vj_is_press_center = true,
}}
components['$$lib_control.template@gui_ctrl.移动摇杆'] = {url = '@lib_control.component', com_name = '移动摇杆', template = {
	layout = {
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	row_self = 'start',
	grow_height = 1,
	col_self = 'end',
	grow_width = 0.5,
},
	slow_rate = 0.35,
	name = 'GUI控件',
	slider_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
	vj_is_release_reset = true,
	toggle_show = false,
	vj_slider_height = 59,
	slider_relative_x = 296,
	vj_move_ratio = 1,
	slider_size = 288,
	vj_toggle_show = false,
	is_main_slider = false,
	vj_is_main_slider = true,
	vj_stop_percent = 0,
	slider_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
	vj_auto_move = false,
	vj_move_radius = 0.146,
	slider_mini_image = '@defaultui/image/joystick/Bth_ingame_yaogan3.png',
	vj_press_region_type = 0,
	vj_active_percent = 0.2,
	vj_slow_percent = 0,
	slider_relative_y = -113,
	vj_slider_width = 59,
	vj_is_press_center = true,
}}
components['$$lib_control.template@gui_ctrl.中止施法区域'] = {url = '@lib_control.component', com_name = '中止施法区域', template = {
	layout = {
	relative = {
	['1'] = -200,
	['2'] = 200,
},
	row_self = 'end',
	width = 117,
	col_self = 'start',
	height = 117,
},
	image = '@defaultui/image/control/取消施法区域.png',
	name = 'GUI控件',
}}
components['$$lib_game_options.template@gui_ctrl.设置按钮'] = {url = '@lib_game_options.component', com_name = '设置按钮', template = {
	layout = {
	relative = {
	['1'] = -100,
	['2'] = 200,
},
	row_self = 'end',
	width = 500,
	col_self = 'start',
	height = 500,
},
	show = true,
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.背包入口'] = {url = '@smallcard_inventory.component', com_name = '背包入口', template = {
	layout = {
	relative = {
	['1'] = -422,
	['2'] = 29,
},
	row_self = 'end',
	width = 64,
	col_self = 'start',
	height = 64,
},
	show = true,
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.多功能格子'] = {url = '@smallcard_inventory.component', com_name = '多功能格子', template = {
	can_use = true,
	bind_item_link = '',
	show_frame = true,
	show_tips = true,
	show_bg = true,
	show_num = true,
	bind_loot_link = '',
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.模块背包'] = {url = '@smallcard_inventory.component', com_name = '模块背包', template = {
	inv_link = '',
	parameter = '',
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包格子'] = {url = '@smallcard_inventory.component', com_name = '自定义背包格子', template = {
	layout = {
	width = 156,
	height = 156,
},
	drop_mode = true,
	name = 'GUI控件',
}}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包面板'] = {url = '@smallcard_inventory.component', com_name = '自定义背包面板', template = {
	layout = {
	width = 600,
	height = 600,
},
	inv_link = '',
	drop_mode = true,
	name = 'GUI控件',
}}
components['$$.template@gui_ctrl.button'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'button', template = {
}}
components['$$.template@gui_ctrl.input'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'input', template = {
}}
components['$$.template@gui_ctrl.label'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'label', template = {
}}
components['$$.template@gui_ctrl.GuiCtrl'] = {url = "@@.gui.page.MainPage.component", is_page = true}
components['$$.template@gui_ctrl.minimap_canvas'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'minimap_canvas', template = {
}}
components['$$.template@gui_ctrl.panel'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'panel', template = {
}}
components['$$.template@gui_ctrl.progress'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'progress', template = {
}}
components['$$.template@gui_ctrl.sprites'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'sprites', template = {
}}
return components